# Variáveis

Uso de variáveis.

## Utilização

Em shell, as variáveis não possuem tipo de dados. Existem apenas variáveis locais e variáveis de ambiente. Inicialmente trataremos as variáveis locais e em seguida abordaremos variáveis de ambiente e suas particularidades.

Uma variável em Shell passa a existir a partir da sua atribuição.  

**Exemplo**
- Variável `HELLO`
```
HELLO="boa noite pessoal"
```

Para acessar o conteúdo de uma variável, utilizamos o `$` antes do identificador, ou `${}`.  

**Exemplo**
```
echo ${HELLO}
echo $HELLO
```

:::danger Cuidado
Observe que ao criar uma variável, o sinal de atribuição (`=`) deve estar logo após o identificador, sem o uso de espaço. Lembre que o **espaço é separador de parâmetros**. Caso exista espaço antes da atribuição, é entendido que há um comando a ser executado e `=` é um parâmetro para esse comando.  

**Exemplo**
```
HELLO = "Boa noite pessoal" #Uso incorreto da atribuição
```
:::

# Aspas simples e aspas duplas

Há diferença entre as aspas duplas (`"`) e aspas simples (`'`). Dentro das aspas duplas há a resolução de variáveis, o que não ocorre com as aspas simples.

**Exemplo**
```
echo "${HELLO}, estudantes de Shell Linux" #O identificado é substituído pelo conteúdo da variável
echo '${HELLO}, estudantes de Shell Linux' #O texto é mantido inalterado
```

## Variáveis especiais

|variável|conteúdo|
|--------|--------|
|`$USER` |usuário |
|`$?` |Resultado do último comando executado. 0 indica executado com sucesso |

**Exemplos**

```bash
echo "Crise de identidade? Você é ${USER}"
ls #Comando executado com sucesso
echo $? #0, visto que o ls executou com sucesso
ls /tmp/-- #ls executado com erro
echo $? #valor diferente de 0, visto que ls (último comando) executou com erro
```

## Variáveis de ambiente

As variáveis de ambiente são variáveis que podem ter seu conteúdo disponível a processos filho. Observe o exemplo:

**Exemplo**  
- Variáveis locais não ficam disponíveis a processos filhos.
``` bash
TEMPO=10        #variável é criada
echo ${TEMPO}   #a variável existe no processo pai
bash            #processo filho é criado e assume o terminal
echo ${TEMPO}   #variável não existe no processo filho
exit            #sai do processo filho
echo ${TEMPO}   #a variável ainda existe no processo pai
```

Para que as variáveis possam ser acessadas por processos filho, é necessário que sejam **variáveis de ambiente**. Para tal, podemos utilizar o comando `export`.

**Exemplo**
- Variáveis de ambiente tem seu conteúdo disponível a processos filhos.
```bash
export VALOR=50 #variável é criada e já declarada como variável de ambiente
echo ${VALOR}   #variável existe no processo pai
bash            #processo filho é criado e assume o terminal
echo ${TEMPO}   #variável existe no processo filho
exit            #sai do processo filho
echo ${TEMPO}   #variável continua existindo no processo pai
```
Observe que a única diferença em relação ao exemplo anterior é o uso do comando `export`, que cria a variável de ambiente.

Outro ponto a ser observado é que apenas o **conteúdo** da variável é repassado aos processos filhos. Nenhum processo filho pode alterar o conteúdo de uma variável de ambiente de um processo pai.

**Exemplos**
- Processo pai tenta acessar variável local gerada por processo filho
``` bash
bash            #processo filho é criado e assume o terminal
VARFILHO=100    #variável local é criada no processo filho
echo ${VARFILHO} #variável local existe no processo filho
exit            #sai do processo filho e retorna ao processo pai
echo ${VARFILHO} #variável não existe no processo pai
```

- Processo pai tenta acessar variável de ambiente gerada por processo filho
``` bash
bash            #processo filho é criado e assume o terminal
export VARFILHO=100    #variável de ambiente é criada no processo filho
echo ${VARFILHO} #variável local existe no processo filho
exit            #sai do processo filho e retorna ao processo pai
echo ${VARFILHO} #variável não existe no processo pai
```

- Processo filho tenta modificar variável de ambiente gerada por processo pai
``` bash
export VARPAI=100 #processo pai cria variavel de ambiente
bash            #processo filho é criado e assume o terminal
echo ${VARPAI}  #Variável de ambiente existe no processo filho
VARPAI=200      #variável de ambiente é modificada deplo processo filho
echo ${VARPAI}  #variável existe no processo filho
exit            #sai do processo filho e retorna ao processo pai
echo ${VARPAI}  #variável no processo pai não foi modificada
```

:::info Informação
Em 2014, foi descoberta uma falha de segurança nos sistemas bash. Tal vulnerabilidade permitia que processos filhos alterassem variáveis de ambiente de processos pai. Essa falha foi conhecida como Shellshock ou Bashdoor, reportada na [CVE-2014-6271](https://www.cve.org/CVERecord?id=CVE-2014-6271) ([Shellshock](https://en.wikipedia.org/wiki/Shellshock_(software_bug)) ).
 
<img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Shellshock-bug.svg"
alt="Shellshock logo"
width="100"
height="100"/>  

Figura: Logo do Shellshock.


:::

## Variáveis de ambiente especiais

Algumas variáveis de ambiente são especiais, e seu uso é fundamental para o funcionamento do bash.

### PATH

A variável `PATH` indica ao bash a localização em que deve ser procurado para que determinado comando seja executado. Está organizada em caminhos para diversos diretórios, separados por `:`.

**Exemplo**
- Conteúdo da variável `PATH`
``` bash
echo $PATH
```

A execução de comandos diretamente (sem a necessidade do caminho absoluto ou relativo) se dá pela variável `PATH`.

**Exemplo**
- Variável `PATH` sem conteúdo
``` bash
ls #Execução de um comando
export PATH='' #Deixa a variável PATH sem conteúdo
ls #Comando não encontrado
```
Para restaurar a variável `PATH`, basta sair do terminal e abrí-lo novamente.

Outro comando abordado anteriormente é o comando `which`. Este, consistia em informar a localização da aplicação responsável pelo comando. O que este comando faz na verdade é percorrer os diretórios presentes em `PATH`, procurando pelo nome passado por parâmetro.

**Exemplo**
- Caminho para os arquivos executáveis de `which` e `ls`
```bash
which ls    #obtém o caminho para ls
export PATH='' #PATH sem conteúdo
ls          #comando não encontrado
/usr/bin/ls #ls executado pelo caminho até o comando
```

 ## Resultados de comandos em variáveis

A saída de comandos também pode ser repassada a variáveis, com o uso de `$()`.

**Exemplo**
- Salvando o conteúdo de comandos em uma variável
```bash
ARQUIVOS=$(ls)      #o comando ls é executado, e sua saída é armazenada em variável
echo ${ARQUIVOS}    #conteúdo resultante do comando ls
```

### source

O comando `source` possibilita que comandos existentes em determinado arquivo sejam executados no mesmo processo, sem a criação de um processo filho. Isto permite que variáveis sejam carregadas para o processo atual.

**Exemplo**
- Gerando um arquivo com variáveis
``` bash
echo '
USER=aluno
PASS="1q2!Q@"
VALOR=50
' > .env
cat .env    #visualiza o conteúdo do arquivo
```
- Carregando variáveis armazenadas em arquivo.
``` bash
source .env     #Carrega o conteúdo do arquivo .env
echo ${USER}    #Variáveis existem no processo
echo ${PASS}
echo ${VALOR}
```

:::note Observação
Em ambiente Linux, nomes inicializados com `.` indicam arquivos ocultos. Para visualizar esses arquivos com `ls`, é necessário utilizar o parâmetro `-a`. 
:::

## Scripts especiais

### .bashrc

O `.bashrc` é um arquivo de *script* presente na *home*  do usuário. O que o torna especial é que este arquivo é executado é executado sempre que uma nova instância do interpretador é executada. Com isto, este arquivo é bastante útil para definição de variáveis de ambiente, como o `PATH`, p.ex.


## Referências

**Outros materiais**  

[CVE. CVE-2014-6271](https://www.cve.org/CVERecord?id=CVE-2014-6271)  
[Shellshock. Shellshock (Software bug). Wikipedia.](https://en.wikipedia.org/wiki/Shellshock_(software_bug))  




