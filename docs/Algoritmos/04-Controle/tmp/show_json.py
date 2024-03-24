#!/usr/bin/python

import json

text = input()
doc = json.loads(text)
print(json.dumps(doc, indent=2))
