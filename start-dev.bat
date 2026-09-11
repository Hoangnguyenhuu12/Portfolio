@echo off
echo ========================================================
echo   Starting Portfolio Dev Server on http://localhost:3000
echo ========================================================
cd /d "%~dp0"
node ./node_modules/next/dist/bin/next dev
pause
