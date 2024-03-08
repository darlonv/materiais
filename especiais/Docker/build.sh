#!/bin/bash

ARCH=$(uname -m)

if [ ${ARCH} == 'x86_64' ];
then
    echo ${ARCH}:
    docker build -t darlon/quarto:latest -f Dockerfile-quarto-linux .
fi

if [ ${ARCH} == 'arm64' ];
then
    echo ${ARCH}:
    docker build -t darlon/quarto:latest -f Dockerfile-quarto-osx .
fi

docker build -t darlon/quarto-full:latest -f Dockerfile-quarto-full .

docker push darlon/quarto:latest
docker push darlon/quarto-full:latest