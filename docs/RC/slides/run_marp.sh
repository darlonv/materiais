#!/bin/bash

for i in *'.slides.md'
do
	echo Creating PDF for ${i}..
	# marp ${i} --pdf
	docker run --rm -v $PWD:/home/marp/app/ -e LANG=$LANG marpteam/marp-cli ${i} --pdf
done
