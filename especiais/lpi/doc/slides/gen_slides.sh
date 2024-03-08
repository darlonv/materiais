#!/bin/bash

FORMAT_PDF=("beamer" "pdf")
FORMAT_HTML=("revealjs")
LANGUAGE=("pseudocodigo" "java" "python" "c")

# FORMAT=("revealjs")
# LANGUAGE=("java")

echo ${FORMAT_PDF[@]}
echo ${FORMAT_HTML[@]}

for file in *.qmd
do
    for format in ${FORMAT_PDF[@]}
    do
        # echo ${format}
        for language in ${LANGUAGE[@]}
        do
            # echo "    " ${language}
            echo Gerando slides no formato "${format}" com "${language}"..
            echo quarto render ${file} --profile ${language} --to ${format}
            quarto render ${file} --profile ${language} --to ${format}
            mv ${file%qmd}pdf "${format}/${language}/"
            chown -R 1000:1000 
        done
    done
done

for file in *.qmd
do
    for format in ${FORMAT_HTML[@]}
    do
        # echo ${format}
        for language in ${LANGUAGE[@]}
        do
            # echo "    " ${language}
            echo Gerando slides no formato "${format}" com "${language}"..
            mkdir -p "${format}/${language}"
            # quarto render ${file} --profile ${language} --to ${format} -o ${file}
            # mv ${file%qmd}pdf "${format}/${language}/"
            echo quarto render ${file} --profile ${language} --to ${format}
            quarto render ${file} --profile ${language} --to ${format}
            mv ${file%.qmd}.html "${format}/${language}/"
            rm -r  "${format}/${language}/${file%.qmd}_files" 2>/dev/null
            mv ${file%.qmd}_files "${format}/${language}/"
        done
    done
done

for format in ${FORMAT_HTML[@]} ${FORMAT_PDF[@]} 
do
    chown -R 1000:1000 ${format}
done

# quarto render 00-teste.qmd --profile python --to beamer -o a.pdf