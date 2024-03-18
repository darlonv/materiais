import re


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

    return content


def convertDoc2Quarto(content):
    content = remover(content)
    content = replace(content)
    # print(converting)

    return content


def loadFile(filename):
    content = ''
    with open(filename, 'r') as file:
        content = file.read()

    return content


def saveFile(filename, content):
    with open(filename, 'w') as file:
        file.write(content)


if __name__ == "__main__":
    filename_in = "./02-Selecao.md"
    filename_out = "./02-Selecao.qmd"
    content = loadFile(filename_in)
    # print(content)
    content = convertDoc2Quarto(content)
    saveFile(filename_out, content)
