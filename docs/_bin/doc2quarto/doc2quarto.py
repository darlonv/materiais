

import re
import sys


def remover(content):
    # content = content.replace("", "")
    content = content.replace("import Tabs from '@theme/Tabs';", "")
    content = content.replace("import TabItem from '@theme/TabItem';", "")
    content = content.replace("<Tabs groupId='language'>", "")
    content = content.replace("</Tabs>", "")
    content = content.replace("// highlight-end", "")
    content = content.replace("// highlight-start", "")
    content = content.replace("# highlight-end", "")
    content = content.replace("# highlight-start", "")
    content = content.replace("showLineNumbers", "")

    return content


def replace(content):

    content = content.replace('<TabItem value="portugol" label="Portugol" default>',
                              '\n::: {.content-visible when-profile="pseudocodigo"}\n')
    content = content.replace('<TabItem value="pseudocodigo" label="pseudocodigo" default>',
                              '\n::: {.content-visible when-profile="pseudocodigo"}\n')
    content = content.replace(
        '<TabItem value="java" label="Java">', '\n::: {.content-visible when-profile="java"}\n')
    content = content.replace('<TabItem value="python" label="Python">',
                              '\n::: {.content-visible when-profile="python"}\n')
    content = content.replace(
        '<TabItem value="python" label="c">', '\n::: {.content-visible when-profile="c"}\n')
    content = content.replace("</TabItem>", "\n:::\n")
    content = content.replace("```mermaid", "```{mermaid}")
    content = content.replace(
        "<!-- --- -->", '\n\n::: {.content-visible when-profile="slides"}\n---\n:::\n\n')

    return content


def fillTitle(content, title):
    content = content.replace("<!-- title -->", title)
    return content


def convertDoc2Quarto(content):
    content = remover(content)
    content = replace(content)
    # print(converting)

    return content


def insertHeader(header, content):
    content = header + '\n\n' + content
    return content


def getTitle(content):
    title = ''

    content = content.lstrip()
    pos_br = content.find('\n')
    pos_space = content.find(' ')
    title = content[pos_space+1:pos_br]

    return title


def loadFile(filename):
    content = ''
    with open(filename, 'r') as file:
        content = file.read()

    return content


def saveFile(filename, content):
    with open(filename, 'w') as file:
        file.write(content)


def startMd2Qmd(filename_in, filename_header="./quarto_pdf_header.txt"):
    # filename_in = "./02-Selecao.md"
    filename_out = filename_in + ".qmd"  # "./02-Selecao.qmd"
    # filename_header = "./quarto_pdf_header.txt"

    content = loadFile(filename_in)
    # print(content)
    content = convertDoc2Quarto(content)
    header = loadFile(filename_header)
    title = getTitle(content)
    # print(len(title), title)
    header = fillTitle(header, title)
    content = insertHeader(header, content)
    saveFile(filename_out, content)


if __name__ == "__main__":
    if len(sys.argv) == 1:
        print("Nome de arquivo .md faltando.")
        exit(1)

    for i in range(1, len(sys.argv)):
        filename = sys.argv[i]
        print(filename, "..", end=' ')
        startMd2Qmd(filename)
        print("done.")
