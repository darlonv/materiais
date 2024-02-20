import re
import sys
import os
import json

config_file = "_slides_.json"

# Default configs
default_header = '''---
marp: true
theme: gaia
_class: lead
backgroundColor: #fff
backgroundImage: url('https://marp.app/assets/hero-background.svg')
---
'''

default_title = "Material"
default_generate_pdf = True
default_generate_html = False

default_languages = {"java": "Java", "python": "Python"}

# Tags
# quebra de slide
marp_tag_slide_break = '<!-- marp --- -->'
marp_tag_slide_header = '<!-- marp-header -->'
# início da região a ocultar no slides
marp_tag_hide_ini = '<!-- marp hide -->'
# fim da região a ocultar no slides
marp_tag_hide_end = '<!-- marp /hide -->'
# início da região em que estão os links para os slides
marp_tag_slides_ini = '<!-- marp slides -->'
# fim da região em que estão os links para os slides
marp_tag_slides_end = '<!-- marp /slides -->'
# marca o local para onde colocar os slides
marp_tag_slides_link = '<!-- marp slides-link -->'


# código a ser utilizado na quebra de slides
slide_break = '\n---\n\n'

# Linguagens a serem extraídas
# linguagens = ["pseudocodigo", "java", "python", "c"]
# linguagens_labels = ["Pseudocódigo", "Java", "Python", "C"]
# linguagens = ["java"]
# linguagens_labels = ["Java"]


def marp_inclui_slide_branco_final(data):
    data += slide_break
    return data


def marp_remove_area_slides(data):
    data_new = data

    # procura pelas tags de remoção
    trechos_ocultar = re.findall(
        f'{marp_tag_slides_ini}.*?{marp_tag_slides_end}', data, re.DOTALL)

    # substitui as ocorrencias por uma única quebra de slides
    for trecho_ocultar in trechos_ocultar:
        data_new = data_new.replace(
            trecho_ocultar, f'\n{marp_tag_slides_link}\n')

    return data_new


def marp_remove_trechos_marcados(data):
    data_new = data

    # procura pelas tags de remoção
    trechos_ocultar = re.findall(
        f'{marp_tag_hide_ini}.*?{marp_tag_hide_end}', data, re.DOTALL)

    # substitui as ocorrencias por uma única quebra de slides
    for trecho_ocultar in trechos_ocultar:
        data_new = data_new.replace(trecho_ocultar, '\n')

    return data_new


def marp_remove_slides_vazios(data):
    data_new = data

    # procura por quebras de slides sem conteúdo entre eles
    slides_vazios = re.findall(r'---[ \t\n]*---', data, re.DOTALL)

    # substitui as ocorrencias por uma única quebra de slides
    for slide_vazio in slides_vazios:
        data_new = data_new.replace(slide_vazio, slide_break)

    return data_new


def marp_adminitions_slides(data):
    data_new = ''

    # texto a ser incluído antes e depois do título da admonition
    title_pre = '**'
    title_pos = '**'

    for linha in data.split('\n'):
        if ':::' in linha:
            linha_strip = linha.strip()
            if linha_strip == ':::':
                # admonition fechando
                data_new += slide_break + '\n'
            else:
                # admonition abrindo
                pos = linha_strip.find(' ')
                if pos >= 0:
                    data_new += slide_break + '\n'
                    data_new += f'{title_pre}{linha[pos+1:]}{title_pos}' + '\n'
                else:
                    data_new += slide_break + '\n'
                    data_new += f'{title_pre}{linha[3:]}{title_pos}' + '\n'

        else:
            data_new += linha + '\n'

    return data_new


def marp_quebra_slides(data):
    data_new = ''
    slide_break = '\n---\n'

    for linha in data.split('\n'):
        if marp_tag_slide_break in linha:
            data_new += slide_break + '\n'
        else:
            data_new += linha + '\n'

    return data_new


def marp_get_slide_inicial(data, titulo, linguagem_label):

    subtitulo = ''
    slide = ''

    # Procura pelo primeiro tópico e o define como substitulo
    linhas = data.split('\n')
    for linha in linhas:
        tokens = re.findall(r'^# .*?$', linha)
        if tokens:
            subtitulo = tokens[0][2:]
            break

    slide += f'\n\n'
    slide += f'# {titulo}\n'
    slide += f'## {subtitulo}\n'
    slide += f'### {linguagem_label}\n\n'

    return slide


def marp_inclui_cabecalho(data, configs):
    data = f'{configs["marp_header"]}\n\n{data}'


def marp_separa_topicos_slides(data):

    data_new = ''
    token_slide = '\n---\n'

    codigo_dentro = False

    linhas = data.split('\n')
    for linha in linhas:
        # print(linhas)
        # match_codigo = re.match(r'^```.*$', linha)

        # verifica se está em uma área de código
        if '```' in linha:
            codigo_dentro = not codigo_dentro

        # se não estiver em uma área de código,
        #  verifica se deve haver quebra de slide
        if not codigo_dentro:
            m = re.match(r'^#{1,3} [^#]*$', linha.strip())
            if m or \
                '**Exemplo**' in linha or \
                '**Exercício**' in linha or \
                '**Exercícios**' in linha or \
                '**Atividade**' in linha or \
                    '**Atividades**' in linha:
                # print(linha)
                # print(m.group())
                data_new += token_slide

        data_new += '\n' + linha
    # for it in re.finditer(r'^##?[^#]*?\n', data, re.DOTALL):
    #     topic = it.group()
    #     re.sub(topic, f'---\n{topic}', data, re.DOTALL)
    #     print(it.group())

    return data_new


def marp_prepara_cabecalho(data, titulo, header, linguagem_label):
    data_new = ''
    # tag_header = '<!-- marp-header -->'

    copiar_linha = False

    data_new += f'{header}\n'

    # conteudo = re.search(r'#.*', data, re.DOTALL).group()

    # print('+', conteudo.group(), '+')

    # prepara o slide inicial
    slide_inicial = marp_get_slide_inicial(data, titulo, linguagem_label)
    data_new += slide_inicial
    data_new += slide_break

    # incluir o conteúdo dos slides
    data_new += re.search(r'#.*', data, re.DOTALL).group()

    # for linha in data.split('\n'):
    #     if marp_tag_slide_header in linha:
    #         copiar_linha = True
    #         continue

    #     if copiar_linha:
    #         data_new += f'{linha}\n'

    return data_new


def marp_filtra_linguagem(data, language, language_label):
    substituir = []

    regex_outer = r'<Tabs.*?</Tabs>'
    regex_inner = r'<TabItem value="'+language+r'".*?</TabItem>'

    for it_outer in re.finditer(regex_outer, data, re.DOTALL):
        text_outer = it_outer.group()

        for it_inner in re.finditer(regex_inner, text_outer, re.DOTALL):
            text_inner = it_inner.group()

            # remove o inicio da tag <TabItem
            text_inner = re.sub(r'<TabItem.*?>', language_label, text_inner)

            # remove o final da tag </TabItem>
            text_inner = re.sub(r'</TabItem>', '', text_inner)

            # print(text_inner)

            substituir.append((text_outer, text_inner))

    for s in substituir:
        data = data.replace(s[0], s[1])

    # print(data)
    return data


def carrega_arquivo(filename):
    # Carrega o arquivo
    # filename = "02-Entrada_saida.md"
    file = open(filename)
    data = file.read()
    file.close()

    return data


# Carrega o cabeçalho
# file = open("./marp_header.txt")
# marp_header = file.read()
# file.close()


# print(sys.argv)

# arquivos = ["01-Estrutura_basica.md"]

def printa_arquivos(arquivos):
    for arquivo in arquivos:
        print(f'+++ {arquivo} +++')


def default_configs():
    configs = dict()

    # cabeçalho marp
    configs['marp_header'] = default_header

    # Título prinicpal do slide
    configs['main_title'] = default_title

    configs['generate'] = {'PDF': default_generate_pdf,
                           'HTML': default_generate_html}

    configs['languages'] = default_languages

    return configs


def prepara_header_str(marp_header):
    marp_header_str = '---\n'
    for item in marp_header:
        marp_header_str += f'{item}: {marp_header[item]}\n'
    marp_header_str += '---\n'
    return marp_header_str


def carrega_configs(config_file):
    if os.path.isfile(config_file):
        print('Hash de arquivos carregado.')
        with open(config_file) as json_file:
            configs = json.load(json_file)
            configs['marp_header'] = prepara_header_str(configs['marp_header'])
            return configs

    return default_configs()


def converte_arquivos(arquivos):

    # Carrega configurações
    configs = carrega_configs(config_file)

    # if True:
    for filename in arquivos:
        # for filename in arquivos:
        print(f'Processando {filename}...')

        texto_original = carrega_arquivo(filename)

        for linguagem, linguagem_label in configs['languages'].items():
            texto = texto_original

            # Remove a área de slides, caso haja
            # texto = marp_remove_area_slides(texto)

            # Prepara cada tópico e subtópico como um slide
            texto = marp_separa_topicos_slides(texto)

            # Prepara o cabecalho
            texto = marp_prepara_cabecalho(
                texto, configs['main_title'], configs['marp_header'], linguagem_label)

            # Filtra pela linguagem
            #   "": sem texto antes do trecho de código
            texto = marp_filtra_linguagem(texto, linguagem, "")

            # Inclui quebra de slides onde sinalizado
            texto = marp_quebra_slides(texto)

            # Coloca admonitions em um único slide
            texto = marp_adminitions_slides(texto)

            # Verifica se há slides sem conteúdo
            texto = marp_remove_slides_vazios(texto)

            # Remove trechos marcados para ocultar
            #
            texto = marp_remove_trechos_marcados(texto)

            # Inclui slide em branco no final
            texto = marp_inclui_slide_branco_final(texto)

            # Salva em novo arquivo
            filename_out = f"{filename}.slides.md"
            if linguagem:
                filename_out = f"{filename}.{linguagem}.slides.md"
            file = open(filename_out, 'w')
            file.write(texto)
            file.close()

            # print(texto)


if __name__ == '__main__':
    if len(sys.argv) > 1:
        converte_arquivos(sys.argv[1:])
    else:
        print("Argumento faltando: arquivo a ser convertido")
