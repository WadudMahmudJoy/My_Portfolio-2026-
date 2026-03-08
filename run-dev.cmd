@echo off
set "NODEJS=C:\Program Files\nodejs"
set "PATH=%NODEJS%;%PATH%"
cd /d %~dp0
call npm.cmd install
call npm.cmd run dev
pause
