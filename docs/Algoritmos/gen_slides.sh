#!/bin/bash

mkdir -p slides

#Obtém o nome do diretório para utilizar nos slides
CONTENT=${PWD}
CONTENT=${CONTENT##*/}
# echo ${CONTENT}

#Calculando diretório de saída
OUTPATH=${PWD}
OUTPATH=${OUTPATH%/*}
OUTPATH=${OUTPATH%/*}
OUTPATH="${OUTPATH}/static/slides/${CONTENT}"
# echo OUTPATH: ${OUTPATH}

#Criando diretório base
mkdir -p ${OUTPATH}

# for i in '_slides'*'.md'
for FILE in $(find . -type f -name "_slides.*.md")
do
	# echo FILE: ${FILE}
	# echo Creating PDF for ${i}..
	FILEPATH=${FILE%/*} #extraindo caminho
	FILEPATH=${FILEPATH#./} #extraindo caminho
	# echo FILEPATH: ${FILEPATH}
	FILENAME_IN=${FILE##*/} #Extraindo nome do arquivo
	# echo FILENAME_IN: ${FILENAME_IN}
	FILENAME_OUT=${FILENAME_IN}
	FILENAME_OUT=${FILENAME_OUT%.md} #Removendo sufixo
	FILENAME_OUT=${FILENAME_OUT#_slides.} #Removendo prefixo
	# echo FILENAME_OUT: ${FILENAME_OUT}

	# marp ${i} --pdf

	#Criando a estrutura onde será salvo o arquivo final
	mkdir -p "${OUTPATH}/${FILEPATH}"

	#Abrindo diretório onde está o arquivo
	OLD_PWD=${PWD}
	cd ${FILEPATH}
	
	if [ "$(uname)" == "Linux" ]; 
	then
		#Gerando slides..
		docker run --rm -v ${PWD}:/home/marp/app/ -e MARP_USER="$(id -u):$(id -g)" -e LANG=$LANG marpteam/marp-cli ${FILENAME_IN} 
		docker run --rm -v ${PWD}:/home/marp/app/ -e MARP_USER="$(id -u):$(id -g)" -e LANG=$LANG marpteam/marp-cli ${FILENAME_IN} --pdf
	fi

	if [ "$(uname)" == "Darwin" ]; 
	then
		#Gerando slides..
		docker run --rm -v ${PWD}:/home/marp/app/ -e LANG=$LANG marpteam/marp-cli ${FILENAME_IN} 
		docker run --rm -v ${PWD}:/home/marp/app/ -e LANG=$LANG marpteam/marp-cli ${FILENAME_IN} --pdf
	fi

	#Movendo para diretório destino
	mv  "${FILENAME_IN%.md}.html" "${OUTPATH}/${FILEPATH}/${FILENAME_OUT}.html"
	mv  "${FILENAME_IN%.md}.pdf" "${OUTPATH}/${FILEPATH}/${FILENAME_OUT}.pdf"

	#voltando ao diretório base
	cd ${OLD_PWD}	


done
