import { ProjectData, ExperienceItem, SkillCategory } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: "Mayang Gita Oktafia",
  shortName: "Mayang",
  wordmark: "MAYANG.GO",
  role: "AI / Machine Learning Engineer",
  subRole: "Telecommunications Engineering Graduate",
  tagline: "Intelligence, with intention.",
  headlineSubtitle: "Building practical AI solutions through machine learning, computer vision, and thoughtful engineering.",
  bio: "Telecommunications Engineering graduate from Telkom University with an active focus on applied AI, deep learning, and computer vision. I bridge the discipline of physical signals and systems with modern intelligent algorithms to develop grounded, accountable solutions.",
  location: "Bandung / Cirebon, Indonesia",
  email: "mayanggitaoktafia@gmail.com",
  linkedin: "https://linkedin.com/in/mayanggitaoktafia",
  github: "https://github.com/maygitvia-dot",
  availability: "Available for AI / ML Engineer & Technical Roles",
};

export const PROJECTS_DATA: ProjectData[] = [
  {
    id: "scovis",
    numericId: "01",
    tagline: "Deep learning for essay assessment",
    title: "SCOVIS",
    subtitle: "Image-Based Handwritten Essay Assessment Using Deep Learning",
    fullTitle: "SCOVIS: Image-Based Handwritten Essay Assessment Using Deep Learning",
    category: "Deep Learning & Computer Vision",
    period: "Academic Project",
    role: "ML Model Developer & Data Pipeline Contributor",
    stack: [
      "Python",
      "TensorFlow / Keras",
      "MobileNetV2",
      "BiLSTM",
      "OpenCV",
      "Image Preprocessing",
      "Deep Learning",
      "Model Evaluation"
    ],
    summary: "A collaborative academic research project engineered to automatically evaluate and score handwritten student essay answers using hybrid convolutional and recurrent neural networks.",
    problem: {
      statement: "Manual assessment of handwritten student exam essays is inherently time-intensive, subjective, prone to grader fatigue, and difficult to standardize across large cohorts.",
      challenges: [
        "High variance in individual handwriting styles, slant, and ink thickness",
        "Subjectivity and grading fatigue in manual evaluation",
        "Document scan noise, lighting variance, and paper crease artifacts",
        "Sequential nature of written arguments combined with spatial visual features"
      ],
      objectives: [
        "Extract spatial visual features from handwritten essay answer crops using CNN feature extractors",
        "Capture sequential dependencies in written text answers using Bidirectional LSTM",
        "Establish an automated grading baseline validated on real course exam submissions"
      ]
    },
    myContribution: [
      "Participated actively in the collection of 1,560 handwritten exam answer image samples across 65 students.",
      "Contributed to manual dataset labeling and ground-truth validation as part of the academic team.",
      "Engineered model-specific image preprocessing pipelines (grayscale normalization, adaptive thresholding, resizing, and tensor formatting).",
      "Designed, developed, trained, and benchmarked the MobileNetV2 + BiLSTM hybrid deep learning architecture in TensorFlow/Keras.",
      "Implemented and adapted Python inference routines to load trained model weights and generate predictions from image crops.",
      "Authored JSON manifests for model metadata, label mappings, and inference documentation."
    ],
    technicalProcess: {
      overview: "The assessment pipeline takes raw handwritten exam scans through multi-stage preprocessing, spatial feature extraction, temporal sequence modeling, and dense classification.",
      steps: [
        {
          step: "01",
          title: "Dataset Acquisition & Annotation",
          description: "Curated 1,560 handwritten answer images from 65 students answering 4 Steganography exam questions (sections a–f). Team-based ground-truth scoring and bounding-box crops."
        },
        {
          step: "02",
          title: "Targeted Image Preprocessing",
          description: "Applied OpenCV image pipelines: contrast enhancement, adaptive thresholding, noise reduction, and aspect-ratio-preserving tensor resizing."
        },
        {
          step: "03",
          title: "Spatial Feature Extraction (MobileNetV2)",
          description: "Utilized inverted residual blocks from MobileNetV2 to generate compact 2D feature maps from handwriting crops with efficient parameter overhead."
        },
        {
          step: "04",
          title: "Sequence Modeling (BiLSTM)",
          description: "Fed spatial feature sequences into Bidirectional LSTM layers to preserve both forward and backward contextual relationships across written character sequences."
        },
        {
          step: "05",
          title: "Inference & Score Generation",
          description: "Softmax output heads produce categorical assessment tiers accompanied by JSON inference manifests for downstream web verification."
        }
      ]
    },
    implementation: {
      architecture: "Hybrid MobileNetV2 + BiLSTM: MobileNetV2 extracts fine-grained visual features without massive computational overhead, while BiLSTM captures character/stroke continuity across handwriting lines.",
      codeSnippet: {
        filename: "inference_pipeline.py",
        language: "python",
        code: `import json
import numpy as np
import cv2
import tensorflow as tf
from tensorflow.keras.models import load_model

def preprocess_essay_image(image_path: str, target_size=(224, 224)) -> np.ndarray:
    """Preprocess handwritten essay crop: grayscale, normalize, resize."""
    img = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)
    if img is None:
        raise ValueError(f"Could not load image at {image_path}")
    
    # Adaptive thresholding to clean background grain
    thresh = cv2.adaptiveThreshold(
        img, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, 
        cv2.THRESH_BINARY_INV, 11, 2
    )
    # Convert to 3-channel for backbone compatibility
    img_rgb = cv2.cvtColor(thresh, cv2.COLOR_GRAY2RGB)
    img_resized = cv2.resize(img_rgb, target_size)
    normalized = img_resized.astype(np.float32) / 255.0
    return np.expand_dims(normalized, axis=0)

def predict_essay_score(model, image_path: str, manifest_path: str = "model_manifest.json"):
    """Run model inference and map output using JSON manifest."""
    with open(manifest_path, 'r') as f:
        manifest = json.load(f)
    
    tensor = preprocess_essay_image(image_path)
    predictions = model.predict(tensor)
    predicted_idx = int(np.argmax(predictions[0]))
    confidence = float(predictions[0][predicted_idx])
    
    return {
        "predicted_label": manifest["classes"][predicted_idx],
        "confidence": confidence,
        "model_architecture": manifest["architecture_version"]
    }`
      }
    },
    results: {
      summary: "Evaluated across multiple deep neural architectures. The MobileNetV2 + BiLSTM model achieved the highest validation accuracy (55.45%) and strong weighted F1-score (0.5191) with significantly lower parameter counts.",
      metrics: [
        { label: "Validation Accuracy", value: "55.45%", subtext: "MobileNetV2 + BiLSTM" },
        { label: "Weighted F1-Score", value: "0.5191", subtext: "Balanced precision/recall" },
        { label: "Macro F1-Score", value: "0.3156", subtext: "Across all score tiers" },
        { label: "Dataset Samples", value: "1,560", subtext: "65 students × 4 questions" }
      ],
      comparisons: [
        {
          name: "MobileNetV2 + BiLSTM (My Model)",
          valAccuracy: 55.45,
          macroF1: 0.3156,
          weightedF1: 0.5191,
          isMainModel: true
        },
        {
          name: "InceptionV3 + BiLSTM",
          valAccuracy: 54.17,
          macroF1: 0.3369,
          weightedF1: 0.5187,
          isMainModel: false
        },
        {
          name: "DenseNet121 + BiLSTM",
          valAccuracy: 52.56,
          macroF1: 0.2808,
          weightedF1: 0.4931,
          isMainModel: false
        }
      ],
      validationNotice: "Note: Reported figures represent validation results computed on cross-validation splits. No separate independent test set was evaluated for these benchmark metrics.",
      honestLimitations: [
        "Model performance is sensitive to extreme handwriting slant, heavy ink bleed, and scanning artifacts.",
        "Macro F1 (0.3156) highlights class imbalance across extreme grade tiers (very high or very low scores).",
        "This model is an academic research prototype and baseline, not a commercial-grade automated scoring engine.",
        "Dataset was bounded to examinations from a single Steganography university course."
      ]
    },
    resources: {
      githubUrl: "https://github.com/maygitvia-dot/scovis-essay-eval",
      demoNote: "Academic project codebase and inference verification scripts.",
      artifacts: [
        {
          title: "Model & Inference Pipeline Diagram",
          type: "diagram",
          description: "End-to-end dataflow from raw student crop to BiLSTM classification vector.",
          status: "Available in case study"
        },
        {
          title: "Inference Code & Manifest Schema",
          type: "code",
          description: "Python inference loader, preprocessing filters, and model metadata JSON.",
          status: "Available"
        },
        {
          title: "Dataset Structure & Preprocessing Samples",
          type: "data",
          description: "Sample handwriting crops before and after adaptive OpenCV filtering.",
          status: "Illustrated"
        },
        {
          title: "Academic Project Report (Kelompok 6)",
          type: "pdf",
          description: "Formal academic documentation of methodology and validation curves.",
          status: "Documented"
        }
      ]
    }
  },
  {
    id: "ai-translation",
    numericId: "02",
    tagline: "Document translation with n8n & Gemini",
    title: "AI Document Translation",
    subtitle: "AI-Powered Document Translation Automation with n8n",
    fullTitle: "AI-Powered Document Translation Automation with n8n, Gemini & Google Workspace",
    category: "Intelligent Automation & LLM Orchestration",
    period: "Independent Engineering Project",
    role: "Automation Architect & Workflow Engineer",
    stack: [
      "n8n Workflow Automation",
      "Google Gemini AI",
      "Google Drive API",
      "Google Docs API",
      "Prompt Engineering",
      "Text Extraction",
      "Node Architecture",
      "JSON Dataflow"
    ],
    summary: "An independently designed and tested automated pipeline that monitors Google Drive for English PDF documents, extracts text content, applies context-aware translation via Google Gemini AI, and outputs formatted Indonesian Google Docs.",
    problem: {
      statement: "Translating technical documentation, academic papers, and manuals manually is repetitive, tedious, and disrupts productivity when handling multi-page PDF documents.",
      challenges: [
        "Unstructured PDF text extraction often results in broken line wraps and fragmented paragraphs",
        "Direct literal translation loses domain-specific context and technical nuance",
        "Manual copy-pasting between cloud storage, translation tools, and word processors is slow and error-prone",
        "Automated systems require error handling when file schemas or token limits fluctuate"
      ],
      objectives: [
        "Eliminate manual steps by establishing an end-to-end automated workflow in n8n",
        "Leverage Google Gemini LLM with tailored prompts for natural, technical Indonesian translations",
        "Deliver cleanly formatted Indonesian Google Docs back into Google Drive automatically"
      ]
    },
    myContribution: [
      "Independently conceptualized, designed, and configured the entire 7-stage automated workflow in n8n.",
      "Integrated Google Drive API for scheduled file detection, metadata querying, and binary file download.",
      "Configured robust file-extraction nodes to parse raw text streams from multi-page PDFs.",
      "Designed and refined system prompts for Google Gemini to preserve technical terminology and coherent Indonesian grammar.",
      "Integrated Google Docs nodes to dynamically generate, title, and populate output documents.",
      "Conducted end-to-end testing with three test PDF documents, achieving three verified, fully translated output Google Docs."
    ],
    technicalProcess: {
      overview: "The architecture operates sequentially across 7 dedicated nodes, transforming raw cloud files into polished Indonesian documents without human intervention.",
      steps: [
        {
          step: "01",
          title: "Schedule Trigger",
          description: "Initiates the workflow on a configurable cron schedule to poll designated Google Drive input repositories."
        },
        {
          step: "02",
          title: "Search Files and Folders",
          description: "Queries Google Drive with MIME-type filters (application/pdf) and status tags to identify new un-translated documents."
        },
        {
          step: "03",
          title: "Download File",
          description: "Retrieves the raw binary stream of the identified PDF into the workflow memory cache."
        },
        {
          step: "04",
          title: "Extract From File",
          description: "Extracts textual content, sanitizing carriage returns, page breaks, and formatting inconsistencies."
        },
        {
          step: "05",
          title: "AI Agent (Google Gemini)",
          description: "Passes extracted text through a prompt-engineered Gemini model with explicit context preservation for technical Indonesian."
        },
        {
          step: "06",
          title: "Create Document",
          description: "Calls Google Docs API to instantiate a new document with automated timestamping and localized title prefix."
        },
        {
          step: "07",
          title: "Update Document",
          description: "Populates the document body with the Gemini-generated translation and moves original files to processed archive."
        }
      ]
    },
    implementation: {
      architecture: "A scheduled event-driven DAG (Directed Acyclic Graph) in n8n leveraging OAuth2 integrations with Google Cloud APIs and Gemini 1.5/Flash endpoints.",
      workflowNodes: [
        {
          node: "Schedule Trigger",
          purpose: "Time-based polling mechanism",
          configuration: "Configured interval check on Google Drive folder root."
        },
        {
          node: "Search Files & Folders",
          purpose: "Target document retrieval",
          configuration: "Query: parents in 'FOLDER_ID' and mimeType='application/pdf' and trashed=false."
        },
        {
          node: "Download File",
          purpose: "Stream ingestion",
          configuration: "Fetches binary stream keyed by Drive fileId into $binary.data property."
        },
        {
          node: "Extract From File",
          purpose: "PDF text parser",
          configuration: "Extracts raw text payload from binary object and outputs sanitized text string."
        },
        {
          node: "AI Agent with Google Gemini",
          purpose: "Contextual translation engine",
          configuration: "Model: gemini-1.5-flash. System prompt enforced professional Indonesian technical terminology."
        },
        {
          node: "Create Document",
          purpose: "Destination file instantiation",
          configuration: "Creates file titled '[ID-TRANSLATION] ' + $json.name in target Drive folder."
        },
        {
          node: "Update Document",
          purpose: "Payload insertion",
          configuration: "Appends translated markdown/plain text stream into the created Google Doc ID."
        }
      ],
      codeSnippet: {
        filename: "gemini_prompt_template.txt",
        language: "markdown",
        code: `You are an expert technical translator specializing in engineering and computer science.
Your task is to translate the following English document into professional, fluent Indonesian.

Guidelines:
1. Maintain consistent technical terminology (e.g., 'deep learning', 'feature extraction', 'neural network').
2. Preserve original structural hierarchy, section headers, and bulleted lists.
3. Ensure natural grammatical flow in Indonesian (Bahasa Indonesia baku) without awkward literal phrasing.
4. Output ONLY the translated document content without meta-commentary or conversational filler.

Source Text:
{{ $json.extractedText }}`
      }
    },
    results: {
      summary: "The workflow was rigorously tested with three diverse technical PDF documents. All three were successfully ingested, extracted, translated by Gemini, and formatted into three complete Indonesian Google Docs.",
      metrics: [
        { label: "Pipeline Success Rate", value: "100%", subtext: "3 of 3 test PDFs processed" },
        { label: "Workflow Nodes", value: "7 Nodes", subtext: "Fully connected DAG" },
        { label: "Generated Outputs", value: "3 Docs", subtext: "Google Docs in Drive" },
        { label: "Human Intervention", value: "0 Steps", subtext: "Fully autonomous run" }
      ],
      validationNotice: "Verified on a controlled test set of 3 sample documents. Production deployment for arbitrary long-form PDFs would require token-chunking logic for files exceeding context windows.",
      honestLimitations: [
        "Very large documents (100+ pages) require text chunking to avoid LLM single-call token constraints.",
        "Embedded raster charts and mathematical formula notation in complex PDFs require OCR / LaTeX post-processing.",
        "Requires active Google Cloud OAuth2 credentials and active n8n runner instance."
      ]
    },
    resources: {
      githubUrl: "https://github.com/maygitvia-dot/n8n-gemini-document-translator",
      demoNote: "Workflow blueprint JSON and configuration documentation.",
      artifacts: [
        {
          title: "Full n8n Workflow Architecture Blueprint",
          type: "diagram",
          description: "Visual node mapping of all 7 execution steps from Schedule to Google Docs insertion.",
          status: "Visualized"
        },
        {
          title: "Sanitized n8n Workflow JSON Export",
          type: "code",
          description: "Importable JSON pipeline with placeholder credential slots for public sharing.",
          status: "Available"
        },
        {
          title: "Gemini Prompt & Translation Schema",
          type: "code",
          description: "System instructions, context rules, and formatting directives for the LLM node.",
          status: "Documented"
        },
        {
          title: "3 Test Runs & Generated Document Records",
          type: "doc",
          description: "Documented proof of 3 successful runs from English PDF to Indonesian Google Doc.",
          status: "Verified"
        }
      ]
    }
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "kai-internship",
    role: "Telecommunications Engineering Intern",
    organization: "PT Kereta Api Indonesia (Persero)",
    division: "Divisi Sintelis / UPT Workshop Sintelis Daop 3 Cirebon",
    location: "Cirebon, Indonesia",
    period: "30 June – 9 August 2025",
    type: "internship",
    highlights: [
      "Gained hands-on technical exposure to railway telecommunications backbone networks supporting critical railway signaling and operational safety.",
      "Performed supervised fiber-optic cable maintenance activities, including precision fusion splicing, connectorization, and Visual Fault Locator (VFL) continuity testing.",
      "Acquired practical familiarization with Optical Time-Domain Reflectometer (OTDR) trace inspection and loss-profile measurement procedures.",
      "Configured basic Voice over IP (VoIP) telephony systems utilizing Elastix PBX within Oracle VirtualBox virtualized environments.",
      "Conducted extension-to-extension test calls and voice verification using Mizudroid SIP client."
    ],
    technologies: [
      "Fiber-Optic Backbone",
      "Fusion Splicer",
      "VFL Testing",
      "OTDR Practice",
      "VoIP (Elastix)",
      "Oracle VirtualBox",
      "Mizudroid SIP"
    ],
    note: "Documented technical engineering internship focused on physical layer and backbone network telecommunications infrastructure."
  },
  {
    id: "parlemen-dpa-hmtt",
    role: "General Treasurer (Bendahara Umum)",
    organization: "INTI PARLEMEN DPA HMTT",
    division: "Dewan Perwakilan Anggota — Himpunan Mahasiswa Teknik Telekomunikasi",
    location: "Telkom University, Bandung",
    period: "2024 – 2025",
    type: "organization",
    highlights: [
      "Managed budgetary oversight, financial records, cash flow, and transparency for the legislative student council body representing telecommunications engineering students.",
      "Coordinated with student commissions to review expense accountability reports and ensure transparent fund allocation across organizational events."
    ]
  },
  {
    id: "staff-dpa-hmtt",
    role: "Staff Member",
    organization: "DPA HMTT (Dewan Perwakilan Anggota HMTT)",
    division: "Legislative Affairs & Internal Relations",
    location: "Telkom University, Bandung",
    period: "2023 – 2024",
    type: "organization",
    highlights: [
      "Contributed to organizational documentation, legislative hearings, and student advocacy initiatives across the academic year."
    ]
  },
  {
    id: "gathrak-lo",
    role: "Liaison Officer / Public Relations",
    organization: "GATHRAK (Gathering Akbar HMTT)",
    location: "Telkom University, Bandung",
    period: "Event Period",
    type: "organization",
    highlights: [
      "Served as primary communication point of contact between invited guests, alumni, and the organizing committee.",
      "Facilitated scheduling, briefing, and logistical coordination during major departmental gathering event."
    ]
  },
  {
    id: "bindes-mc",
    role: "Master of Ceremonies (MC)",
    organization: "BINDES (Bina Desa)",
    location: "West Java, Indonesia",
    period: "Community Service Period",
    type: "organization",
    highlights: [
      "Hosted and moderated official community service and student social engagement programs, facilitating communication with village leadership and community members."
    ]
  }
];

export const EDUCATION_DATA = {
  institution: "Telkom University",
  faculty: "School of Electrical Engineering",
  major: "S1 Telecommunications Engineering (Teknik Telekomunikasi)",
  degree: "Bachelor of Engineering (S.T. Candidate / Fresh Graduate)",
  period: "Graduated 2025 / 2026",
  location: "Bandung, Indonesia",
  thesisTitle: "Image-Based Handwritten Essay Assessment Using Deep Learning (MobileNetV2 + BiLSTM)",
  relevantCoursework: [
    "Signal Processing & Transforms",
    "Digital Communications",
    "Transmission Lines & Optical Networks",
    "Data Structures & Algorithms",
    "Probability & Random Processes",
    "Steganography & Multimedia Security",
    "Machine Learning & Pattern Recognition"
  ],
  academicFocus: "Leveraging the rigorous mathematical grounding of signal analysis to solve modern computer vision and deep learning challenges."
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "programming",
    name: "Programming",
    orbitalAngle: 0,
    color: "#3568FF",
    skills: [
      { name: "Python", context: "Primary language for ML, OpenCV scripts, data preprocessing, and model pipelines", category: "Core" }
    ]
  },
  {
    id: "deep-learning",
    name: "Deep Learning",
    orbitalAngle: 28,
    color: "#8B5CFF",
    skills: [
      { name: "TensorFlow / Keras", context: "Model construction, layer stacking, custom training loops, and validation", category: "Framework" },
      { name: "CNN Architectures", context: "Feature extraction, spatial convolutions, pooling, transfer learning", category: "Architecture" },
      { name: "MobileNetV2", context: "Lightweight inverted residual architecture for handwritten text feature maps", category: "Backbone" },
      { name: "BiLSTM", context: "Bidirectional long short-term memory for sequential text / handwriting continuity", category: "Sequence" },
      { name: "Model Evaluation", context: "Validation loss, accuracy, precision, macro F1, and weighted F1 analysis", category: "Metric" }
    ]
  },
  {
    id: "computer-vision",
    name: "Computer Vision",
    orbitalAngle: 56,
    color: "#36DDF2",
    skills: [
      { name: "OpenCV", context: "Image processing, bounding box cropping, adaptive thresholding, format conversions", category: "Vision" },
      { name: "Image Preprocessing", context: "Noise removal, grayscale transformation, contrast stretching, tensor normalization", category: "Vision" }
    ]
  },
  {
    id: "ai-automation",
    name: "AI & Automation",
    orbitalAngle: 84,
    color: "#C6A8FF",
    skills: [
      { name: "Google Gemini", context: "Multimodal and text LLM prompting for translation and semantic structuring", category: "LLM" },
      { name: "Prompt Engineering", context: "Few-shot prompting, technical vocabulary constraints, output schema enforcement", category: "Prompting" },
      { name: "n8n Automation", context: "Multi-node DAG workflows, webhook triggers, API connectors, error handlers", category: "Orchestration" }
    ]
  },
  {
    id: "tools-dev",
    name: "Tools & Development",
    orbitalAngle: 112,
    color: "#D5E0F8",
    skills: [
      { name: "Git & GitHub", context: "Version control, commit hygiene, branch management, collaborative repositories", category: "Tool" },
      { name: "Google Colab", context: "GPU-accelerated model training, notebook experiments, data exploration", category: "Environment" },
      { name: "Linux Basics", context: "Shell scripting, file operations, environment configuration", category: "OS" },
      { name: "Google Cloud APIs", context: "Google Drive API, Google Docs API integration within automated pipelines", category: "API" }
    ]
  }
];

export const PHILOSOPHY_PILLARS = [
  {
    number: "01",
    title: "Problem Solver",
    headline: "Formulating real questions before picking algorithms.",
    description: "Every model is only as effective as the problem it is formulated to solve. Starting from raw physical inputs—whether scanned essay handwriting or high-volume PDF documents—I focus on isolating the true constraint before architecting pipelines."
  },
  {
    number: "02",
    title: "Continuous Learner",
    headline: "Bridging telecommunication fundamentals with frontier AI.",
    description: "My academic background in Telecommunications Engineering instilled rigorous mathematical discipline in signal paths, noise, and systems. Transitioning into AI means applying that same analytical rigor to neural weights, feature spaces, and generative agents."
  },
  {
    number: "03",
    title: "Impact Driven",
    headline: "Building practical tools that deliver measurable utility.",
    description: "Rather than theoretical experiments that never leave a notebook, I prioritize end-to-end viability: manageable parameter counts (MobileNetV2), verifiable validation metrics, and automated workflows (n8n) that reliably save human time."
  }
];

