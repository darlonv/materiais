#!/bin/bash

for i in *'.slides.md'
do
	echo Creating PDF for ${i}..
	marp ${i} --pdf
done
