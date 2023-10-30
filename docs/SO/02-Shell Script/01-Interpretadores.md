import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Interpretadores

Um *shell* é uma interface de comunicação com o sistema operacional, e para que possa ser utilizado é necessário a utilização de um **interpretador**. Os interpretadores definirão qual sintaxe será utilizada, bem como o uso de variáveis ou recursos auxiliares, como autocomplete, cores, dentre outros.

Interpretadores bastante conhecidos são bash, bsh, ksh, e diversos outros.

Neste material, utilizaremos o interpretador GNU Bourne-Again SHell (`bash`)

### Comandos e parâmetros

Cada interpretador pode possuir comandos específicos dele, sem a necessidade de nenhum *sofware* externo. Ou seja, comandos internos a ele que não dependem de instalação ou configuração do ambiente.

A sintaxe para execução de um comando é 

```
<comando> <parâmetros>
```

O separador de parâmetros é o ` ` (espaço). 

**Exemplos**
```
ls-l #sem espaço, resultado em erro
ls -l #com espaço, executando o comando ls com o parâmetro -l
ls         -l #múltiplos espaços são convertidos em um único espaço.
```

Há diversos parâmetros padrão, e incluídos na grande maioria dos comandos, como ajuda (`-h`) ou versão (`-v`).

Grande parte dos parâmetros segue o padrão de um hífen (`-`) é seguido de um caractere, enquanto dois hífens (`--`) são seguidos de mais de um caractere.

**Exemplos**
```
wget -h
wget --help
java --version
```



