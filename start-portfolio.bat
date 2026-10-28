@echo off
title Mayang Portfolio Launcher
echo ====================================================
echo Starting Mayang Gita Oktafia Portfolio...
echo ====================================================

:: Ensure Node.js is in PATH
set "PATH=C:\Program Files\nodejs;%PATH%"

:: Verify Node
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js tidak ditemukan di C:\Program Files\nodejs
    pause
    exit /b
)

:: Start browser after 2 seconds in background
start "" cmd /c "timeout /t 2 /nobreak >nul && start http://localhost:3000"

:: Start Vite dev server
echo Menjalankan server portofolio di http://localhost:3000 ...
call npm run dev -- --host
pause

