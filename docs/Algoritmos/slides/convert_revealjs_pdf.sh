#!/bin/bash

#Fonte:
## https://4comprehension.com/github-actions-reveal-js-and-automating-pdf-conversion/

for FILE in *.html
do
	echo "+== Processando ${FILE} ==+"
	docker run -it -v $(pwd):/slides astefanutti/decktape /slides/${FILE} ${FILE}.pdf
done
