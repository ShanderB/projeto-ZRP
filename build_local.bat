@echo off

REM Innitiate front local server
start cmd /k "cd ./webapp && npm i && npm start"

REM Innitiate back local server
start cmd /k "cd ./service && mvn package && mvn spring-boot:run"