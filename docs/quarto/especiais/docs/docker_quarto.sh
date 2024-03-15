#!/bin/bash

docker run --rm -it -v $(pwd):/data -w /data/ darlon/quarto-full /bin/bash
