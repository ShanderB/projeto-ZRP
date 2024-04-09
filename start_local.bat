@echo off


netstat -ano | findstr :8080 > nul
if errorlevel 1 (
    echo Port 8080 is free
) else (
    echo Port 8080 is in use
    exit /b
)

@REM Innitiate front local server
start cmd /k "cd ./webapp && npm start"

@REM Innitiate back local server
start cmd /k "cd ./service && mvn spring-boot:run"