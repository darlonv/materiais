#!/bin/bash

echo Pulling daron/ssh_base..
docker pull darlon/ssh_base

echo Building base ssh..
docker build --target base --platform linux/amd64 -t darlon/ssh_base:latest .
docker push darlon/ssh_base:latest

echo Building ssh with users..
docker build --no-cache --target ssh --platform linux/amd64 -t darlon/ssh:latest .
echo Pushing..
docker push darlon/ssh:latest
echo done.

echo "Run with: docker run --rm -d --name ssh -p 2222:22  darlon/ssh"
