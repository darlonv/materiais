import os
import re

import convert_docusaurus2marp

# print(os.listdir())

re_filename_markdown = re.compile(r'^[^_].*\.md$')

for (dirpath, dirnames, filenames) in os.walk('.'):
    if '/_' not in dirpath:
        # print(dirpath)
        # print(dirnames)
        # print(filenames)

        for filename in filenames:
            if re_filename_markdown.match(filename) and not filename.endswith('.slides.md'):
                filepath = f'{dirpath}/{filename}'
                print(filepath)
                # convert_docusaurus2marp.printa_arquivos([filepath])
                convert_docusaurus2marp.converte_arquivos([filepath])
                exit(2)
