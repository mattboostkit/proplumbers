@echo off
echo Cleaning cache...
rmdir /s /q .next 2>nul
rmdir /s /q node_modules\.cache 2>nul

echo Starting Pro Plumbers website...
echo.
echo Once started, open your browser to:
echo - http://localhost:3000 (Homepage)
echo - http://localhost:3000/test (CSS Test Page)
echo.
echo Press Ctrl+C to stop the server
echo.

npm run dev