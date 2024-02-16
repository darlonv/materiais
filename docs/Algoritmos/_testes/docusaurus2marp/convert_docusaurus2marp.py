import re


def marp_filtra_linguagem(data, language, language_label):
    substituir = []

    regex_outer = r'<Tabs.*?</Tabs>'
    regex_inner = r'<TabItem value="'+language+r'".*?</TabItem>'
    
    for it_outer in re.finditer(regex_outer, data, re.DOTALL):
        text_outer = it_outer.group()

        for it_inner in re.finditer(regex_inner, text_outer, re.DOTALL):
            text_inner = it_inner.group()
            
            #remove o inicio da tag <TabItem
            text_inner = re.sub(r'<TabItem.*?>', language_label, text_inner)

            #remove o final da tag </TabItem>
            text_inner = re.sub(r'</TabItem>', '', text_inner)
            
            # print(text_inner)

            substituir.append((text_outer, text_inner))

    for s in substituir:
        data = data.replace(s[0], s[1])
    
    # print(data)
    return data


# Linguagem a ser extraída
linguagem = "java"
linguagem_label = "Java"

# Carrega o cabeçalho
file = open("./marp_header.txt")
marp_header = file.read()
file.close()


# Carrega o arquivo
filename = "02-Entrada_saida.md"
file = open(filename)
data = file.read()
file.close()

# Filtra pela linguagem
# print(data)
data = marp_filtra_linguagem(data, linguagem, linguagem_label)


# Salva em novo arquivo
filename_out = f"_slides.{filename}.{linguagem}.md"
file = open(filename_out, 'w')
file.write(data)
file.close()
