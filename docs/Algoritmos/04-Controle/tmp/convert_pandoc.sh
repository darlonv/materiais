#!/bin/bash


#Ex: ./filter_content.sh intro.md java text 


PARAMS=(${@}) #parametros 
FILE=${PARAMS[0]} #primeiro argumento é o arquivo
LANGS=(${PARAMS[@]:1}) #demais argumentos são linguagens. ultima linguagem consta no nome do arquivo

# echo PARAMS: ${PARAMS[@]}
# echo FILE  : ${FILE}
# echo LANGS : ${LANGS[@]}


./filter_content.sh ${FILE} | pandoc -t json --bibliography references.bib --citeproc  | ./java_filter_panflute.py ${LANGS[@]} | pandoc -f json -o ${FILE}.${LANGS[-1]}.pdf