# Redirecionamentos

Em Shell, os redirecionamentos possibilitam que as saídas dos comandos sejam gravadas em arquivo ou utilizadas como entrada para outros comandos.


**Exemplo**  

- Comando:

```bash
seq 5
```

- Saída:
```
1
2
3
4
5
```

## Saída para arquivo

Para o redirecionamento para arquivo, são utilizados os redirecionadores `>` ou `>>`.

**Exemplo**

- Comando:
```bash
seq 5 > numeros.txt
```

- Saída:
```
```
Observe que nenhuma saída apareceu **na tela**, visto que esta saída foi redirecionada para o arquivo `numeros.txt`. Utilizando o comando `cat`, podemos observar que a saída foi gravada no arquivo.

- Comando:
```bash
cat numeros.txt
```

- Saída:
```
1
2
3
4
5
```


:::danger Cuidado

Caso o arquivo que terá a saída redirecionada, o uso do `>` irá substituir esse arquivo, e o conteúdo anterior será perdido.

:::


**Exemplo**

- Comando:
```bash
seq 5 > numeros.txt
echo 1 2 3 > numeros.txt
cat numeros.txt
```

- Saída:
```
1 2 3
```
Observe que o conteúdo anterior do arquivo foi perdido, visto que foi pela nova saída.


Para que o conteúdo seja gravado a partir final do arquivo devemos utilizar o redirecionador `>>`, que ao invés de criar um novo arquivo, incluirá o conteúdo da saída ao **final** do arquivo. 

**Exemplo**

- Comandos:
```bash showLineNumbers
seq 5 > numeros.txt
echo 1 2 3 >> numeros.txt
cat numeros.txt
```

- Saída:
```
1
2
3
4
5
1 2 3
```

Observe na saída que um novo arquivo `numeros` foi criado ao executar o comando da linha 1, e a saída do comando executado na linha 2 foi adicionada ao final do arquivo (*append*).

## Saída padrão e saída de erro

Os comandos possuem duas saídas principais: a saída padrão e a saída de erro.

**Exemplo**
Inicialmente, vamos criar um diretório:
```bash
mkdir conteudo
```

Em seguida, tentaremos criar um novo diretório de mesmo nome.
```bash
mkdir conteudo
```

- Saída:
```
mkdir: não foi possível criar o diretório “conteudo”: Arquivo existe
```

Podemos observar que recebemos uma mensagem de erro, informando a impossibilidade da criação do diretório.

**Exemplo**
Considerando o exemplo anterior, agora tentaremos redirecionar a mensagem de erro para um arquivo chamado `erro.txt`.

```bash
mkdir conteudo > erro.txt
```

- Saída:

```
mkdir: não foi possível criar o diretório “conteudo”: Arquivo existe
```
Observe que a saída **não** foi redirecionada. O arquivo `erro.txt` foi criado, porém é um arquivo vazio.

```bash
cat erro.txt
```

- Saída:
```
cat erro.txt
```

Isto ocorreu porque a saída redirecionada foi a **saída padrão**, e a mensagem que o comando `mkdir` apresentou foi dada na **saída de erro**, a qual não foi redirecionada. Para que a saída de erro possa ser redirecionada, é necessário informar qual saída deverá ser redicionada, neste caso `2>`.

Repetindo o exemplo, porém agora redirecionando a saída de erro:

```bash
mkdir conteudo 2> erro.txt
```
- Saída:

```
```

```bash
cat erro.txt
```

```
mkdir: não foi possível criar o diretório “conteudo”: Arquivo existe
```

## Entrada de arquivo

## Pipe

## tee

## Resumo

## Referências

**Outros materiais**  

