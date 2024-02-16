import re


def marp_filtra_linguagem(data, linguagem):
    return data


# Linguagem a ser extraída
linguagem = "java"

# Carrega o cabeçalho
file = open("./marp_header.txt")
marp_header = file.read()
file.close()


# Carrega o arquivo
filename = "./02-Entrada_saida.md"
file = open(filename)
data = file.read()
file.close()

# Filtra pela linguagem
data = marp_filtra_linguagem(data, linguagem)
