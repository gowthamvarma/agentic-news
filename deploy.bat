@echo off
setlocal enabledelayedexpansion

echo ==============================================================================
echo       Agentic News Analyser - Automated Production Deployment Pipeline        
echo ==============================================================================

:: 1. Identify GCP Project ID
set PROJECT_ID=%~1
if "%PROJECT_ID%"=="" (
    for /f "tokens=*" %%i in ('gcloud config get-value project 2^>nul') do set PROJECT_ID=%%i
)
if "%PROJECT_ID%"=="" (
    set PROJECT_ID=project-4124e964-bf18-4c2d-936
)

:: 2. Identify Gemini API Key
set API_KEY=%~2
if "%API_KEY%"=="" (
    if defined GEMINI_API_KEY (
        set API_KEY=%GEMINI_API_KEY%
    ) else (
        if exist backend\.env (
            for /f "tokens=1,2 delims==" %%a in (backend\.env) do (
                if "%%a"=="GEMINI_API_KEY" set API_KEY=%%b
            )
        )
    )
)

if "%API_KEY%"=="" (
    echo [WARNING] No GEMINI_API_KEY supplied or found in environment / backend\.env.
    echo Defaulting to current live Cloud Run key or Simulation Mode.
)

set REGION=us-central1
set SERVICE_NAME=agentic-news-api

echo Target Project:  %PROJECT_ID%
echo Target Region:   %REGION%
echo Cloud Run App:   %SERVICE_NAME%
echo ==============================================================================
echo.

:: STEP 1: Build React Production Frontend
echo [1/4] Building React Production Frontend Bundle...
pushd frontend
call npm.cmd run build
if %errorlevel% neq 0 (
    echo [ERROR] Frontend build failed!
    popd
    exit /b %errorlevel%
)
popd
echo [OK] Frontend built into frontend\dist.
echo.

:: STEP 2: Sync frontend bundle into backend distribution directory
echo [2/4] Syncing frontend bundle into backend\dist for unified serving...
if not exist backend\dist mkdir backend\dist
robocopy frontend\dist backend\dist /E /PURGE /NFL /NDL /NJH /NJS /nc /ns /np
echo [OK] Frontend synced to backend\dist.
echo.

:: STEP 3: Deploy Firestore Security Rules
echo [3/4] Releasing Cloud Firestore Security Rules...
python firebase\deploy_rules.py %PROJECT_ID%
if %errorlevel% neq 0 (
    echo [WARNING] Firestore rules deployment encountered an issue. Continuing container build...
) else (
    echo [OK] Firestore rules updated and released to cloud.firestore.
)
echo.

:: STEP 4: Deploy Unified Cloud Run Service
echo [4/4] Building container and deploying to Google Cloud Run...
pushd backend

if "%API_KEY%"=="" (
    call gcloud.cmd run deploy %SERVICE_NAME% ^
        --source . ^
        --region %REGION% ^
        --project %PROJECT_ID% ^
        --platform managed ^
        --allow-unauthenticated ^
        --set-env-vars "FIREBASE_PROJECT_ID=%PROJECT_ID%,ADK_LOG_LEVEL=INFO" ^
        --timeout 300 ^
        --memory 2Gi ^
        --cpu 2 ^
        --min-instances 0 ^
        --max-instances 10 ^
        --quiet
) else (
    call gcloud.cmd run deploy %SERVICE_NAME% ^
        --source . ^
        --region %REGION% ^
        --project %PROJECT_ID% ^
        --platform managed ^
        --allow-unauthenticated ^
        --set-env-vars "FIREBASE_PROJECT_ID=%PROJECT_ID%,GEMINI_API_KEY=%API_KEY%,ADK_LOG_LEVEL=INFO" ^
        --timeout 300 ^
        --memory 2Gi ^
        --cpu 2 ^
        --min-instances 0 ^
        --max-instances 10 ^
        --quiet
)

if %errorlevel% neq 0 (
    echo [ERROR] Cloud Run deployment failed!
    popd
    exit /b %errorlevel%
)
popd

:: Retrieve Service URL
for /f "tokens=*" %%u in ('gcloud.cmd run services describe %SERVICE_NAME% --region %REGION% --project %PROJECT_ID% --format="value(status.url)" 2^>nul') do set LIVE_URL=%%u

echo.
echo ==============================================================================
echo [SUCCESS] Deployment Finished Successfully!
echo Live Web Dashboard: %LIVE_URL%/
echo Health API Check:   %LIVE_URL%/api/health
echo ==============================================================================
echo.
