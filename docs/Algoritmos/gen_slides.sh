#!/bin/bash

mkdir -p slides

#Calculando diretório de saída
OUTPATH=${PWD}
OUTPATH=${OUTPATH%/*}
OUTPATH=${OUTPATH%/*}
echo OUTPATH: ${OUTPATH}
OUTPATH="${OUTPATH}/static/slides"
echo OUTPATH: ${OUTPATH}

# for i in '_slides'*'.md'
for FILE in $(find . -type f -name "_slides.*.md")
do
	echo ${FILE}
	# echo Creating PDF for ${i}..
	FILEPATH=${FILE%/*} #extraindo caminho
	FILEPATH=${FILEPATH#./} #extraindo caminho
	echo FILEPATH: ${FILEPATH}
	FILENAME_IN=${FILE##*/} #Extraindo nome do arquivo
	echo FILENAME_IN: ${FILENAME_IN}
	FILENAME_OUT=${FILENAME_IN}
	FILENAME_OUT=${FILENAME_OUT%.md} #Removendo sufixo
	FILENAME_OUT=${FILENAME_OUT#_slides.} #Removendo prefixo
	echo FILENAME_OUT: ${FILENAME_OUT}

	# marp ${i} --pdf

	#Abrindo diretório onde está o arquivo
	OLD_PWD=${PWD}
	cd ${FILEPATH}
	pwd
	echo +++
	#voltando ao diretório base
	cd ${OLD_PWD}

	
	

	# if [ "$(uname)" == "Linux" ]; 
	# then
	# 	docker run --rm -v ${PWD}:/home/marp/app/ -e MARP_USER="$(id -u):$(id -g)" -e LANG=$LANG marpteam/marp-cli ${i} -o ./slides/${OUTNAME}.html
	# 	docker run --rm -v ${PWD}:/home/marp/app/ -e MARP_USER="$(id -u):$(id -g)" -e LANG=$LANG marpteam/marp-cli ${i} --pdf -o ./slides/${OUTNAME}.pdf
	# fi

	# if [ "$(uname)" == "Darwin" ]; 
	# then
	# 	docker run --rm -v ${PWD}:/home/marp/app/ -e LANG=$LANG marpteam/marp-cli ${i} -o ./slides/${OUTNAME}.html
	# 	docker run --rm -v ${PWD}:/home/marp/app/ -e LANG=$LANG marpteam/marp-cli ${i} --pdf -o ./slides/${OUTNAME}.pdf
	# fi


done
