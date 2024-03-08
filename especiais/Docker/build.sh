#!/bin/bash

docker build -t darlon/quarto:latest -f Dockerfile-quarto .
# docker build -t darlon/quarto-full:latest -f Dockerfile-quarto-full .
# docker push darlon/quarto:latest
# docker push darlon/quarto-full:latest