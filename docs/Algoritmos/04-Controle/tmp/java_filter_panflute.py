#!/usr/bin/python

# Pandoc version:
# pandoc-3.1.12.3-1-amd64
# https://github.com/jgm/pandoc/releases/download/3.1.12.3/pandoc-3.1.12.3-1-amd64.deb

from panflute import *
import sys


def filter_java(elem, doc, args):
    if type(elem) == CodeBlock:
        if elem.classes[0] not in args:
            return []
    # else:
        # return []


def main(doc=None):
    return run_filter(filter_java, doc=doc, args=sys.argv[1:])


if __name__ == "__main__":
    main()
