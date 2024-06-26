#!/bin/bash

ARCH=$(uname -m)

if [ ${ARCH} == 'x86_64' ];
then
    PLATFORM="linux/amd64"
    ARCHNAME="-amd64"
    echo ${ARCH}:
    docker build -t darlon/quarto${ARCHNAME}:latest      --platform ${PLATFORM} -f Dockerfile-quarto-amd64 .
    docker build -t darlon/quarto-full${ARCHNAME}:latest --platform ${PLATFORM} -f Dockerfile-quarto-full-amd64 .

    docker push darlon/quarto${ARCHNAME}:latest 
    docker push darlon/quarto-full${ARCHNAME}:latest
fi


if [ ${ARCH} == 'arm64' ];
then
    PLATFORM="linux/arm64"
    ARCHNAME="-arm64"
    echo ${ARCH}:
    docker build -t darlon/quarto${ARCHNAME}:latest      --platform ${PLATFORM} -f Dockerfile-quarto-arm64 .
    docker build -t darlon/quarto-full${ARCHNAME}:latest --platform ${PLATFORM} -f Dockerfile-quarto-full-arm64 .

    docker push darlon/quarto${ARCHNAME}:latest 
    docker push darlon/quarto-full${ARCHNAME}:latest
fi

#docker manifest rm darlon/quarto #remove possiveis manifests anteriores
#docker manifest create darlon/quarto darlon/quarto-amd64:latest darlon/quarto-arm64:latest
#docker manifest push darlon/quarto

#docker manifest rm darlon/quarto-full #remove possiveis manifests anteriores
#docker manifest create darlon/quarto-full darlon/quarto-full-amd64:latest darlon/quarto-full-arm64:latest
#docker manifest push darlon/quarto-full

