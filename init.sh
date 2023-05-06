#!/bin/bash

git clone https://github.com/darlonv/algoritmos.git
git clone https://github.com/darlonv/redes.git
git clone https://github.com/ifpr-cascavel/robotica.git
git clone https://github.com/darlonv/so.git

docker compose --profile init up 
docker compose --profile init down 

echo "####################################################"
echo "#### Edit the .env file with github credentials ####"
echo "####################################################"
