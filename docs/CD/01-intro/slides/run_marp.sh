#!/bin/bash

for i in _*.slides.md
do
	echo Creating PDF for ${i}..
	marp ${i} --pdf
done
