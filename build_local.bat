@echo off

netstat -ano | findstr :8080
if errorlevel 1 (
    echo Port 8080 is free
) else (
    echo Port 8080 is in use
    exit /b
)

@REM Innitiate front local server
start cmd /k "cd ./webapp && npm i && npm start"

@REM Innitiate back local server
start cmd /k "cd ./service && mvn package && mvn spring-boot:run"
