import os
import sys
import re
import json
import hashlib

import subprocess
import shutil

import convert_docusaurus2marp

OUTPUT_DIR_SLIDES = f"../../static/slides/{os.getcwd().split('/')[-1]}"

FILES_HASH = './files_hash.json'
config_file = '_slides_.json'

# subprocess.run("ls", shell=True, executable="/bin/bash")
# subprocess.run("docker run hello-world", shell=True, executable="/bin/bash")

# Variáveis globais
# Hashes dos arquivos
files_hash = None


# Flags
default_generate_pdf = True
default_generate_html = False


def default_configs():
    configs = dict()

    configs['generate'] = {'PDF': default_generate_pdf,
                           'HTML': default_generate_html}

    return configs


def carrega_configs(config_file):
    if os.path.isfile(config_file):
        print('Arquivo de configurações carregado.')
        with open(config_file) as json_file:
            configs = json.load(json_file)
            return configs

    return default_configs()


def load_files_hash():
    if os.path.isfile(FILES_HASH):
        print('Hash de arquivos carregado.')
        with open(FILES_HASH) as json_file:
            return json.load(json_file)
    else:
        print('Hash de arquivos não encontrado. Atualizando todos os arquivos...')
    return dict()


def save_files_hash(files_hash):
    with open(FILES_HASH, 'w') as json_file:
        json.dump(files_hash, json_file, indent=4)


def get_file_hash(filename):
    with open(filename, 'rb') as file:
        content = file.read()

        hash = hashlib.md5(content).hexdigest()
        return hash


def file_need_update(filename):
    
    # Calcula o hash do arquivo
    hash = get_file_hash(filename)

    # Verifica se o arquivo está na lista de hash
    if filename not in files_hash:
        # inclui na lista de hashes
        files_hash[filename] = hash
        return True

    if files_hash[filename] != hash:
        # atualiza o hash na lista de hashes
        files_hash[filename] = hash
        return True

    return False


def main():

    # Carrega as configurações
    configs = carrega_configs(config_file)

    # Carrega hash de arquivos
    global files_hash
    files_hash = load_files_hash()
    
    # print(configs)
    # print(files_hash)

    re_filename_markdown = re.compile(r'^[^_].*\.md$')

    for (dirpath, dirnames, filenames) in os.walk('.'):
        if '/_' not in dirpath:
            print('DIRPATH: ', dirpath)
            # print(dirnames)
            # print(filenames)

            for filename in filenames:
                filepath = f'{dirpath}/{filename}'
                if re_filename_markdown.match(filename):
                    # Verifica se não é um arquivo de slides
                    if not filename.endswith('.slides.md'):

                        # Verifica se o arquivo foi modificado
                        if file_need_update(filepath):
                            # Converte markdown para marp
                            convert_docusaurus2marp.converte_arquivos(
                                [filepath])

                            # Convertendo arquivos para slides marp
                            local_files = os.listdir(dirpath)
                            for local_file in local_files:
                                if local_file.endswith('.slides.md'):
                                    print(f'---> {local_file}')
                                    docker_marp_command = f'echo OS não reconhecido.'
                                    if sys.platform == 'linux':
                                        # marp_command = 'docker run --rm -v ${PWD}/' + dirpath + ':/home/marp/app/ -e MARP_USER="$(id -u):$(id -g)" -e LANG=$LANG marpteam/marp-cli ' + f'{local_file}'

                                        # Gera slide html - marp não gera link para as figuras locais
                                        # if SLIDES_HTML:
                                        #     marp_command = f'marp {dirpath}/{local_file}'
                                        #     subprocess.run(
                                        #         marp_command, shell=True, executable="/bin/bash")
                                        # Gera slide pdf
                                        if configs['generate']['PDF']:
                                            if configs["use_docker"]:
                                                pass
                                                # marp_command = 'docker run --rm -v ${PWD}/' + dirpath + ':/home/marp/app/ -e LANG=$LANG marpteam/marp-cli ' + \
                                            else:
                                                marp_command = f'marp --pdf --allow-local-files {dirpath}/{local_file}'
                                                subprocess.run(
                                                    f'{marp_command}', shell=True, executable="/bin/bash")
                                                
                                        if configs['generate']['HTML']:
                                            if configs["use_docker"]:
                                                pass
                                                # marp_command = 'docker run --rm -v ${PWD}/' + dirpath + ':/home/marp/app/ -e LANG=$LANG marpteam/marp-cli ' + \
                                            else:
                                                marp_command = f'marp --allow-local-files {dirpath}/{local_file}'
                                                subprocess.run(
                                                    f'{marp_command}', shell=True, executable="/bin/bash")
                                    if sys.platform == 'darwin':
                                        # Gera slide pdf
                                        if configs['generate']['PDF']:
                                            if configs["use_docker"]:
                                                marp_command = 'docker run --rm -v ${PWD}/' + dirpath + ':/home/marp/app/ -e LANG=$LANG marpteam/marp-cli ' + f'{local_file} --pdf'
                                                subprocess.run(marp_command, shell=True, executable="/bin/bash")
                                            else:
                                                pass

                                        # Gera slide html
                                        if configs['generate']['HTML']:
                                            if configs["use_docker"]:
                                                pass
                                                # marp_command = 'docker run --rm -v ${PWD}/' + dirpath + ':/home/marp/app/ -e LANG=$LANG marpteam/marp-cli ' + \
                                            else:
                                                pass
                                            
                                    # subprocess.run(
                                        # marp_command, shell=True, executable="/bin/bash")
                                    # Gera slide pdf
                                    # subprocess.run(
                                    # f'{marp_command} --pdf', shell=True, executable="/bin/bash")

                                    # Movendo slide gerado para diretório static
                                    # Verifica se o diretório de saída já existe
                                    output_slides_path = f'{OUTPUT_DIR_SLIDES}/{dirpath}'
                                    os.makedirs(output_slides_path,
                                                exist_ok=True)
                                    slides_files = os.listdir(dirpath)
                                    for slide_file in slides_files:
                                        if slide_file.endswith(".slides.html") or slide_file.endswith(".slides.pdf"):

                                            print(
                                                f'Renomeando: {dirpath}/{slide_file} -> {f"{output_slides_path}/{slide_file}"}')
                                            os.rename(
                                                f'{dirpath}/{slide_file}', f'{output_slides_path}/{slide_file}')

                                    # Remove o arquivo de slides marp
                                    print('Removendo local file:',
                                          f'{dirpath}/{local_file}')
                                    os.remove(f'{dirpath}/{local_file}')

                        else:
                            print(f'Arquivo {filename} não modificado.')

    # Atualiza hash de arquivos
    save_files_hash(files_hash)

if __name__ == '__main__':
    main()