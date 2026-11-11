# 📘 PANDUAN LENGKAP & BAHAN BELAJAR PORTOFOLIO MAYANG GITA OKTAFIA
> **Dokumen Bahan Belajar, Penguasaan Konsep Teknis, dan Panduan Wawancara Kerja (Interview Prep)**  
> *Target Role: AI / Machine Learning Engineer & AI Automation Specialist*  
> *Pendidikan: S1 Teknik Telekomunikasi — Telkom University (IPK: 3.12 / 4.00)*

---

## 📑 DAFTAR ISI
1. [Core Identity & Personal Branding (Narasi "Signal → Intelligence")](#1-core-identity--personal-branding)
2. [Deep Dive Proyek 1: SCOVIS (Handwritten Essay Assessment)](#2-deep-dive-proyek-1-scovis)
   - Konsep, Pipeline OpenCV, Arsitektur MobileNetV2 + BiLSTM
   - Metrik Riset & Kejujuran Sains
   - Blueprint MLOps & Deployment Industri
3. [Deep Dive Proyek 2: Otomatisasi Penerjemahan Dokumen AI (n8n + Gemini)](#3-deep-dive-proyek-2-otomatisasi-penerjemahan-dokumen-ai)
   - Arsitektur 7-Node DAG
   - Prompt Engineering & Telemetri Eksekusi Riil
4. [Korelasi Telekomunikasi & Machine Learning (Field Experience)](#4-korelasi-telekomunikasi--machine-learning)
5. [Daftar Istilah Teknis (Glossary) yang Wajib Dikuasai](#5-daftar-istilah-teknis-glossary)
6. [Simulasi Tanya Jawab Wawancara Kerja (Interview Cheat-Sheet)](#6-simulasi-tanya-jawab-wawancara-kerja)

---

## 1. CORE IDENTITY & PERSONAL BRANDING

### 🎯 Profil Singkat
- **Nama:** Mayang Gita Oktafia, S.T.
- **Lulusan:** S1 Teknik Telekomunikasi, Fakultas Teknik Elektro, Telkom University.
- **Fokus Utama:** Applied Machine Learning, Computer Vision, Deep Learning, dan AI Workflow Automation.
- **Tagline Filosofis:** *"Intelligence, with intention."*

### 🌉 Narasi Utama: "Signal → Intelligence"
Sebagai sarjana Teknik Telekomunikasi, kamu memiliki nilai jual unik (*unique selling point*) yang jarang dimiliki lulusan ilmu komputer murni:
- **Di Telekomunikasi:** Kamu terbiasa menganalisis sinyal fisik, derau (*noise*), modulasi, transformasi Fourier, filtering, dan batasan bandwidth sistem.
- **Korelasinya ke AI/ML:** Citra/gambar tidak lain adalah sinyal 2D berdimensi spasial. Nilai piksel adalah amplitudo sinyal. Konvolusi (*Convolutional Neural Network*) adalah operasi filtering sinyal untuk mengekstraksi frekuensi spasial (tepi, tekstur, pola).
- **Kelebihanmu:** Kamu memahami batasan komputasi (*latency, memory, system constraint*), bukan sekadar asal memanggil library Python.

---

## 2. DEEP DIVE PROYEK 1: SCOVIS

### 📌 Ringkasan Eksekutif
- **Judul Proyek:** SCOVIS (*Image-Based Handwritten Essay Assessment Using Deep Learning*)
- **Tujuan:** Menilai jawaban esai tulisan tangan mahasiswa secara otomatis tanpa melalui perantara OCR (*Optical Character Recognition*) kata demi kata, untuk mengurangi subjektivitas dan beban koreksi dosen.
- **Batasan Riset:** Ujian mata kuliah Steganografi (4 soal × 6 bagian = 24 section), 1.560 sampel citra dari 65 mahasiswa (64 mahasiswa + 1 dosen sebagai kunci).

---

### 🔬 Tahap 1: Pipeline Pengolahan Citra (OpenCV Preprocessing)
Mengapa preprocessing sangat krusial? Karena tulisan tangan mahasiswa memiliki variasi ketebalan pulpen, bayangan scanner, dan warna kertas yang tidak seragam.

```
[Citra Lembar Ujian Asli]
         │
         ▼
[1. Grayscale Conversion] ──> Mengubah citra RGB (3 channel) menjadi 1 channel intensitas (0-255).
         │
         ▼
[2. Noise Filtering & Denoising] ──> Menghilangkan bintik-bintik debu scanner.
         │
         ▼
[3. Adaptive Gaussian Thresholding] ──> Menghitung threshold lokal per blok piksel, memisahkan tinta dari kertas meskipun ada gradasi pencahayaan.
         │
         ▼
[4. Binarization & Bounding Cropping] ──> Menghasilkan piksel hitam-putih murni, memotong area 24 kotak section.
         │
         ▼
[5. Tensor Normalization (224×224×3)] ──> Mengubah skala piksel [0, 255] menjadi [0, 1] agar gradien neural network stabil saat backpropagation.
```

---

### 🧠 Tahap 2: Arsitektur Model Hibrida (MobileNetV2 + BiLSTM)

Mengapa menggabungkan CNN dan RNN (LSTM)?

1. **Backbone MobileNetV2 (Feature Extractor Spasial):**
   - **Alasan memilih MobileNetV2:** Menggunakan mekanisme *Depthwise Separable Convolution* yang membagi konvolusi standar menjadi 2 langkah (*depthwise* + *pointwise 1×1*). Ini memangkas parameter secara drastis (hanya ~3.4 juta parameter) sehingga inferensi sangat cepat dan ringan di perangkat CPU/edge.
   - **Output:** Tensor berukuran `(7 × 7 × 1280)`.
   - **Bottleneck 1×1 Conv:** Mereduksi dimensi channel dari 1280 menjadi 256 channel `(7 × 7 × 256)`.

2. **Reshape Spasial ke Temporal:**
   - Tensor `(7 × 7 × 256)` di-flatten/reshape menjadi deret sekuensial `(49 × 256)`.
   - Artinya: 49 representasi patch spasial dibaca berurutan seperti membaca baris tulisan dari kiri ke kanan, atas ke bawah.

3. **Bidirectional LSTM (Sequence Context Modeling):**
   - **Alasan menggunakan BiLSTM:** Tulisan tangan esai memiliki ketergantungan konteks dua arah. BiLSTM membaca sekuens fitur baik maju (*forward pass*) maupun mundur (*backward pass*) dengan 128 unit per arah (total 256 fitur kontekstual).
   - Dilengkapi *Dropout (0.3)* untuk mencegah overfitting.

4. **Dense Layer & Softmax Classification:**
   - Dense 128 neuron dengan regulasi L2 ($10^{-4}$).
   - Lapisan akhir Softmax menghasilkan probabilitas kelas tier nilai (misal: *Tier 1 Excellent, Tier 2 Competent, Tier 3 Developing*).

---

### 📊 Tahap 3: Metrik Riset & Kejujuran Ilmiah (Academic Integrity)

| Arsitektur Model | Mean Val Accuracy | Macro F1-Score | Weighted F1-Score |
|---|---|---|---|
| **MobileNetV2 + BiLSTM (Model Pilihan)** | **55.45%** | **0.3156** | **0.5191** |
| DenseNet121 + BiLSTM | 52.88% | 0.2840 | 0.4812 |
| InceptionV3 + BiLSTM | 51.60% | 0.3369 | 0.4905 |

#### 💡 Poin Pembelajaran Kritis:
- **Rasio Split Terbaik:** Eksperimen membuktikan split **80:20** memberikan keseimbangan generalisasi terbaik (55.45%) dibandingkan 90:10 (overfitting) atau 50:50 (under-trained).
- **Mengapa Macro F1 bernilai 0.3156?** Terjadi *class imbalance* alami karena mahasiswa mayoritas memperoleh nilai menengah (*Tier 2*), sedangkan nilai sangat tinggi atau sangat rendah jumlah sampelnya sedikit.
- **Konsep Human-in-the-Loop:** SCOVIS dirancang sebagai *AI Decision Support System* (pemberi rekomendasi skor awal), di mana keputusan akhir tetap divalidasi oleh dosen penguji.

---

### 🚢 Tahap 4: Blueprint MLOps & Production Scaling

Untuk menunjukkan kesiapan industri (*industry-readiness*):

```
[Client PDF/Image Upload]
         │
         ▼
[FastAPI Gateway Endpoint: POST /v1/predict-essay]
         │  (Validasi payload dengan Pydantic Schema)
         ▼
[OpenCV Preprocessing Worker] ──> (Grayscale, Thresholding, Tensor Scaling)
         │
         ▼
[ONNX Runtime / TFLite Engine] ──> Inferensi model terkuantisasi (~42 ms per inferensi)
         │
         ▼
[JSON Prediction Manifest Response]
{
  "sample_id": "STG-042-B",
  "predicted_class": "Tier_2_Competent",
  "normalized_score": 82.5,
  "confidence": 0.894,
  "inference_latency_ms": 42
}
```
- **Containerization:** Dibungkus dalam image Docker berbasis `python:3.11-slim` berukuran ~350 MB yang siap di-deploy pada Kubernetes atau cloud container service.

---

## 3. DEEP DIVE PROYEK 2: OTOMATISASI PENERJEMAHAN DOKUMEN AI

### 📌 Ringkasan Eksekutif
- **Judul Proyek:** Autonomous Document Translation Pipeline
- **Teknologi:** n8n Workflow Automation, Google Gemini 1.5 API, Google Drive API, Google Docs API, JSON.
- **Tujuan:** Mengeliminasi proses manual penerjemahan dokumen PDF berbahasa Inggris menjadi Google Docs berbahasa Indonesia yang terstruktur dan rapi secara zero-touch (100% otomatis).

---

### 🔄 Alur 7-Stage DAG (Directed Acyclic Graph)

```
[1. Schedule Trigger] ──> Berjalan otomatis secara berkala (cron) memicu pipeline.
         │
         ▼
[2. Search Files & Folders] ──> Memindai folder Google Drive "Dokumen_Masuk" untuk mendeteksi PDF baru.
         │
         ▼
[3. Download File] ──> Mengunduh file stream biner PDF secara aman.
         │
         ▼
[4. Extract from File (PDF)] ──> Parsing teks dan struktur paragraf mentah dari format biner PDF.
         │
         ▼
[5. AI Agent (Google Gemini 1.5)] ──> Menerjemahkan dengan prompt sistem sadar konteks & istilah teknis.
         │
         ▼
[6. Create a Document] ──> Membuat berkas Google Docs baru di folder "Dokumen_Hasil_Terjemahan".
         │
         ▼
[7. Update a Document] ──> Menuliskan teks terjemahan yang telah diformat rapi ke dalam dokumen tujuan.
```

---

### 📈 Bukti Telemetri & Verifikasi Eksekusi Nyata
- **Total Durasi Pipeline:** **30.601 detik** untuk memproses 3 dokumen sekaligus.
- **Durasi Node AI Agent:** **18.04 detik**.
- **Konsumsi Token:** **4.966 tokens**.
- **Hasil Verifikasi 3 Berkas Dokumen Nyata:**
  1. `The Charming Crystal Ball.pdf` → `Terjemahan_The Charming Crystal Ball`
  2. `The Colour of Love.pdf` → `Terjemahan_The Colour of Love`
  3. `Ten Hours.pdf` → `Terjemahan_Ten Hours`

### 💡 Teknik Prompt Engineering yang Diterapkan:
1. **Role-Based Framing:** Menetapkan persona Gemini sebagai penerjemah teknis profesional dwibahasa.
2. **Domain-Specific Preservation:** Menginstruksikan model untuk mempertahankan istilah teknis yang baku dan tidak menerjemahkan istilah kode/rumus secara harfiah.
3. **Structured Output Enforcement:** Menjamin format heading, paragraf, dan penomoran dokumen output sesuai dengan dokumen sumber asli.

---

## 4. KORELASI TELEKOMUNIKASI & MACHINE LEARNING

### 🛠️ Pengalaman Lapangan: PT Kereta Api Indonesia (Persero)
- **Divisi:** Sintelis (Sinyal, Telekomunikasi, dan Listrik) Daop 3 Cirebon.
- **Tugas Nyata:**
  - Pemeliharaan jaringan backbone transmisi serat optik (*fiber optics*) untuk persinyalan stasiun dan sensor rel kereta api.
  - Splicing kabel optik presisi tinggi dan pengukuran redaman sinyal (*attenuation*) menggunakan **OTDR** (*Optical Time-Domain Reflectometer*) dan **VFL** (*Visual Fault Locator*).
  - Konfigurasi server Voice over IP (VoIP) berbasis Elastix IP-PBX pada Oracle VirtualBox dan pengujian ekstensi SIP via softphone client.
- **Poin Relevansi untuk AI Engineer:**
  - Memahami keandalan sistem berskala misi kritis (*mission-critical uptime*).
  - Pengalaman langsung dengan infrastruktur jaringan fisik yang menopang pengiriman data ke server AI/cloud.

### 🏛️ Pengalaman Organisasi: DPA HMTT Telkom University
- **Jabatan:** Bendahara Umum (Inti Parlemen) Dewan Perwakilan Anggota HMTT (2025–2026).
- **Nilai Tambah Profesional:**
  - Akuntabilitas pengelolaan anggaran keuangan organisasi.
  - Komunikasi lintas fungsi (*cross-functional team alignment*) dan kepemimpinan tata kelola.

---

## 5. DAFTAR ISTILAH TEKNIS (GLOSSARY)

| Istilah | Penjelasan Sederhana |
|---|---|
| **Adaptive Thresholding** | Teknik binarisasi citra di mana nilai ambang (*threshold*) dihitung secara dinamis untuk area lokal piksel, sangat ampuh mengatasi bayangan tidak merata pada scanner/kamera. |
| **Depthwise Separable Conv** | Trik arsitektur MobileNet yang memisahkan filtering spasial dan filtering channel, menghemat komputasi hingga 8–9 kali lipat dibanding konvolusi biasa. |
| **BiLSTM** | Recurrent neural network yang membaca urutan fitur dari kiri-ke-kanan dan kanan-ke-kiri untuk menangkap konteks penuh suatu sekuens. |
| **Macro F1 vs Weighted F1** | Macro F1 menghitung rata-rata skor F1 per kelas tanpa memedulikan jumlah data (sensitif terhadap data minoritas). Weighted F1 memberi bobot sesuai proporsi jumlah sampel tiap kelas. |
| **DAG (Directed Acyclic Graph)** | Struktur alur kerja terarah tanpa putaran berulang, memastikan data mengalir secara deterministik dari trigger awal hingga tujuan akhir (seperti pada n8n). |
| **ONNX Runtime** | Format model terbuka lintas platform yang mengoptimalkan inferensi model deep learning agar berjalan lebih cepat pada CPU/GPU tanpa beban framework Keras/PyTorch penuh. |

---

## 6. SIMULASI TANYA JAWAB WAWANCARA KERJA (INTERVIEW CHEAT-SHEET)

### Q1: "Ceritakan tentang diri Anda dan latar belakang pendidikan Anda!"
> **Contoh Jawaban Ideal:**  
> *"Saya Mayang Gita Oktafia, sarjana Teknik Telekomunikasi dari Telkom University dengan fokus karir pada Applied Machine Learning dan AI Automation. Latar belakang telekomunikasi memberi saya fondasi analitis yang kuat dalam memahami sinyal, derau, dan batasan komputasi sistem. Fondasi ini saya terapkan pada dua proyek utama: pertama, SCOVIS, di mana saya merancang model hibrida MobileNetV2 dan BiLSTM untuk penilaian esai tulisan tangan; dan kedua, sistem otomatisasi penerjemahan dokumen n8n berbasis Google Gemini. Saya mencari peran di mana saya bisa menerapkan machine learning dan otomatisasi cerdas untuk memecahkan masalah operasional yang nyata."*

---

### Q2: "Mengapa pada proyek SCOVIS Anda tidak memakai OCR (seperti Tesseract) lalu teksnya dinilai dengan LLM?"
> **Contoh Jawaban Ideal:**  
> *"Itu pertimbangan arsitektur yang sangat penting. Tulisan tangan mahasiswa ujian memiliki tingkat variasi yang sangat ekstrem—coretan, diagram, persamaan matematika, dan tulisan bersambung. OCR tradisional sering mengalami *cascading error*: jika OCR salah membaca kata kunci atau simbol matematika, maka LLM di tahap berikutnya akan menerima input teks yang rusak dan menghasilkan penilaian yang salah. Dengan pendekatan *Image-Based Feature Extraction* langsung dari citra melalui MobileNetV2 dan BiLSTM, model mempelajari pola visual dan struktur spasial tulisan secara holistik tanpa rentan terhadap kegagalan parsing OCR."*

---

### Q3: "Mengapa akurasi validasi model SCOVIS sebesar 55.45%? Bukankah itu terbilang moderat?"
> **Contoh Jawaban Ideal:**  
> *"Betul, dan saya menyajikan angka tersebut secara transparan apa adanya. Tugas penilaian esai subjektif berbasis citra murni pada 24 section ujian adalah permasalahan klasifikasi multi-kelas yang sangat menantang dengan 1.560 data riil mahasiswa. Angka 55.45% merupakan *mean validation accuracy* lintas seluruh 24 section terpisah dengan split 80:20 yang ketat. Model ini bukan dirancang untuk menggantikan dosen 100%, melainkan sebagai *Human-in-the-Loop decision support*, di mana rekomendasi skor dan tingkat kepercayaan model membantu memangkas 60–70% waktu koreksi awal sebelum ditinjau ulang oleh dosen."*

---

### Q4: "Bagaimana alur kerja sistem otomatisasi n8n yang Anda buat?"
> **Contoh Jawaban Ideal:**  
> *"Sistem tersebut adalah event-driven pipeline 7 tahap. Berjalan dari trigger berkala, memindai folder Google Drive 'Dokumen_Masuk', mengunduh biner PDF, mengekstraksi teks, lalu meneruskannya ke AI Agent Google Gemini 1.5. Saya menyusun prompt engineering berbasis peran dengan aturan preservasi terminologi teknis. Hasil terjemahan kemudian secara otomatis dibuatkan berkas Google Docs baru di folder tujuan. Pada pengujian riil, pipeline memproses 3 dokumen multi-halaman dalam waktu 30.6 detik dengan konsumsi 4.966 token secara 100% otonom."*

---

*Panduan ini disusun untuk menjadi pegangan utama Mayang dalam mempersiapkan portofolio, presentasi proyek, dan wawancara teknis.*
