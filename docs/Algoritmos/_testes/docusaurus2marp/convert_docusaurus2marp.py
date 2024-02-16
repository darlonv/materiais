import re

slide_break = '\n---\n'

def marp_adminitions_slides(data):
    data_new = ''

    for linha in data.split('\n'):
        if ':::' in linha:
            linha_strip = linha.strip()
            if linha_strip == ':::':
                # admonition fechando
                data_new += slide_break + '\n'
            else:
                # admonition abrindo
                pos = linha_strip.find(' ')
                if pos >=0 :
                    data_new += slide_break + '\n'
                    data_new += f'### {linha[pos+1:]}' + '\n'
                else:
                    data_new += slide_break + '\n'
                    data_new += f'### {linha[3:]}' + '\n'


        else:
            data_new += linha + '\n'

            

    return data_new

def marp_quebra_slides(data):
    data_new = ''
    slide_break = '\n---\n'
    tag_marp_slide_break = '<!-- marp --- -->'
    for linha in data.split('\n'):
        if tag_marp_slide_break in linha:
            data_new += slide_break + '\n'
        else:
            data_new += linha + '\n'

    return data_new



def marp_get_slide_inicial(data, titulo):
    
    subtitulo = ''
    slide = ''

    # Procura pelo primeiro tópico e o define como substitulo
    linhas = data.split('\n')
    for linha in linhas:
        tokens = re.findall(r'^# .*?$', linha)
        if tokens:
            subtitulo = tokens[0][2:]
            break

    
    slide += f'\n'
    slide += f'# {titulo}\n'
    slide += f'## {subtitulo}\n'

    return slide

def marp_inclui_cabecalho(data):
    data = f'{marp_header}\n\n{data}'

def marp_separa_topicos_slides(data):

    data_new = ''
    token_slide = '\n---\n'

    codigo_dentro = False

    linhas = data.split('\n')
    for linha in linhas:
        # print(linhas)
        # match_codigo = re.match(r'^```.*$', linha)

        if '```' in linha:
            codigo_dentro = not codigo_dentro

        if not codigo_dentro:
            m = re.match(r'^#{1,3} [^#]*$', linha)
            if m or \
            '**Exemplo**' in linha or \
            '**Exercício**' in linha or \
            '**Exercícios**' in linha: 
                # print(linha)
                # print(m.group())
                data_new += token_slide


        data_new += '\n' + linha
    # for it in re.finditer(r'^##?[^#]*?\n', data, re.DOTALL):
    #     topic = it.group()
    #     re.sub(topic, f'---\n{topic}', data, re.DOTALL)
    #     print(it.group())

    return data_new

def marp_prepara_cabecalho(data,titulo, header):
    data_new = ''
    tag_header = '<!-- marp-header -->'

    copiar_linha = False

    data_new += f'{header}\n'

    #prepara o slide inicial
    slide_inicial = marp_get_slide_inicial(data,titulo)
    data_new += slide_inicial

    for linha in data.split('\n'):
        if tag_header in linha:
            copiar_linha = True
            continue
        
        if copiar_linha:
            data_new += f'{linha}\n'

    return data_new

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
titulo_principal = "Algoritmos e Estruturas de Dados"

# Carrega o cabeçalho
file = open("./marp_header.txt")
marp_header = file.read()
file.close()

# Carrega o arquivo
filename = "02-Entrada_saida.md"
file = open(filename)
texto = file.read()
file.close()

#Prepara cada tópico e subtópico como um slide
texto = marp_separa_topicos_slides(texto)

# Prepara o cabecalho
texto = marp_prepara_cabecalho(texto,titulo_principal, marp_header)

# Filtra pela linguagem
texto = marp_filtra_linguagem(texto, linguagem, linguagem_label)

# Inclui quebra de slides onde sinalizado
texto = marp_quebra_slides(texto)

# Coloca admonitions em um único slide

texto = marp_adminitions_slides(texto)




# Salva em novo arquivo
filename_out = f"_slides.{filename}.{linguagem}.md"
file = open(filename_out, 'w')
file.write(texto)
file.close()
