#!/bin/bash

cd algoritmos
git pull
cd ..

cd redes
git pull
cd ..

cd robotica
git pull
cd ..

cd so
git pull
cd ..


git clone git@github.com:darlonv/algoritmos.git
git clone git@github.com:darlonv/redes.git
git clone git@github.com:darlonv/robotica.git
git clone git@github.com:darlonv/so.git
git clone git@github.com:darlonv/trabalhos-resolvidos.git

echo "####################################################"
echo "#### Edit the .env file with github credentials ####"
echo "####################################################"
