#!/bin/bash

ARCH=$(uname -m)

if [ ${ARCH} == 'x86_64' ];
then
    PLATFORM="linux/amd64"
    ARCHNAME="-amd64"
    echo ${ARCH}:
    docker build -t darlon/quarto${ARCHNAME}:latest --platform ${PLATFORM} -f Dockerfile-quarto-linux .
    docker build -t darlon/quarto-full${ARCHNAME}:latest --platform ${PLATFORM} -f Dockerfile-quarto-full .

    docker push darlon/quarto${ARCHNAME}:latest 
    docker push darlon/quarto-full${ARCHNAME}:latest
fi


if [ ${ARCH} == 'arm64' ];
then
    PLATFORM="linux/arm64"
    ARCHNAME="-arm64"
    echo ${ARCH}:
    docker build -t darlon/quarto${ARCHNAME}:latest --platform ${PLATFORM} -f Dockerfile-quarto-osx .
    docker build -t darlon/quarto-full${ARCHNAME}:latest --platform ${PLATFORM} -f Dockerfile-quarto-full .

    docker push darlon/quarto${ARCHNAME}:latest 
    docker push darlon/quarto-full${ARCHNAME}:latest
fi


#docker manifest create darlon/quarto darlon/quarto-amd64:latest darlon/quarto-arm64:latest
#docker manifest push darlon/quarto

#docker manifest create darlon/quarto-full darlon/quarto-full-amd64:latest darlon/quarto-full-arm64:latest
#docker manifest push darlon/quarto-full

