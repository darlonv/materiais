#!/bin/bash

set -x
docker run --rm -d --name streamlit -p 8501:8501 streamlit:0.1 
set +x