@echo off

REM Innitiate front local server
start cmd /k "cd ./webapp && npm start"

REM Innitiate back local server
start cmd /k "cd ./service && mvn spring-boot:run"