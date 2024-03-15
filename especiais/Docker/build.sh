#!/bin/bash

ARCH=$(uname -m)

if [ ${ARCH} == 'x86_64' ];
then
    echo ${ARCH}:
    docker build -t darlon/quarto:latest --platform linux/amd64 -f Dockerfile-quarto-linux .
    docker build -t darlon/quarto-full:latest --platform linux/amd64 -f Dockerfile-quarto-full .
fi


if [ ${ARCH} == 'arm64' ];
then
    echo ${ARCH}:
    docker build -t darlon/quarto:latest --platform linux/aarm64 -f Dockerfile-quarto-osx .
    docker build -t darlon/quarto-full:latest --platform linux/aarm64 -f Dockerfile-quarto-full .
fi

docker push darlon/quarto:latest 
docker push darlon/quarto-full:latest
