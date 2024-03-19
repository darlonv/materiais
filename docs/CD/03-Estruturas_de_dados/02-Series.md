# Series e Dataframes

## Pandas

Pandas é uma biblioteca para análise e manipulação de dados amplamente utilizada. Com ela, é possível operar sobre dados de maneira organizada.

Na API da biblioteca é possível acessar todas as operações disponíveis.  
[API](https://pandas.pydata.org/pandas-docs/stable/reference/index.html)


Para importar a biblioteca:

```python
import pandas as pd
```

A bibioteca Pandas é composta por dois tipos de dados principais, as **Series** e os **Dataframes**.

## Series

Uma Series opera da mesma maneira que um *array* unidimensional. Cada elemento presente na Series possui um *index* (índice), que funciona como um rótulo para cada elemento.

**Exemplo**

Utilizaremos como exemplo uma Series para armazenar as alturas de um determinado grupo de pessoas.

```python
alturas = pd.Series([175,182,160,156])
```

Observe também o tipo de dado utilizado, utilizando a função `type()`
```python
type(alturas)
```

Observe os valores armazenados na Series, com a função `print()`
```python
print(alturas)
```

Repare na saída do comando que a primeira coluna apresenta o *index*, e a segunda coluna os valores inseridos.

Na Series `alturas`, não foi especificado qual seria o *index* utilizado. Por padrão, é utilizado uma sequência de números inteiros positivos crescente, iniciada pelo valor `0`.

Podemos obter essas informações de maneira separada. Para acessar os **valores**, pode-se utilizar o atributo `values`.

**Exemplo**

```python
alturas.values
```

E para obter os **índices**, pode-se utilizar o atributo `index`.

**Exemplo**

```python
alturas.index
```

Supondo que gostaríamos de adicionar como índice o nome das pessoas a que cada altura corresponde, pode ser utilizado o parâmetro `index` na criação da Series.

```python
alturas = pd.Series([175, 182,160,156], index=["Maria", "José", "Eduarda", "Sergio"])
```

Agora, observe os **valores** da Series `altura` e os **índices** utilizados.

Utilizando as Series, é possível que os dados sejam acessados a partir de seu índice.

```python
alturas["Eduarda"]
```

Uma Series possibilita que dados estatísticos básicos sejam calculados a partir de seus dados, diretamente com a chamada de métodos.

**Exemplo**

Para mostrar o número de elementos
```python
alturas.count()
```

Alguns métodos que também podem ser utilizados:
- `.count()` - número de elementos
- `.mean()` - média
- `.std()` - desvio padrão
- `.min()` - valor mínimo
- `.max()` - valor máximo
- `.value_counts()` - mostra quantas vezes aparece cada um dos elementos
- `.unique()` - mostra os elementos existentes, sem repetições


**Atividade**

- Qual é a altura média das pessoas?


É possível observar todos esses valores de uma única vez, utilizando o método `.describe()`


## Operações sobre todos os valores
Em uma Series, é possível aplicar operações matemáticas sobre todos os valores de uma única vez.

**Exemplo**

Para converter a altura de centímetros para metros, basta dividir os valores por 100.
```python
alturas/100
```

A series não é afetada. Para tornar o resultado permamente, é necessário salvar o valor.  

**Exemplo**  

```python
alturasMetros = alturas/100

print('Alturas em metros:')
print(alturasMetros)
print('\nAlturas em centímetros:')
print(alturas)
```

**Atividade**

Crie a Series apresentada abaixo:
```python
conceitos = pd.Series(
    ['A','B','B','A','C','D','A','B','B','C','C','A'],
    index=
    ['Maria', 'José', 'Eduarda', 'Sofia', 'Sergio', 'Baltazar', 'Oswaldo', 'Joana', 'Felisberto', 'Brigite', 'Filomena', 'Natalicio'])
```

Sobre a Series `conceitos`, responda:
- Quantos conceitos existem?  
- Quais são os conceitos diferentes que estão armazenados?  
- Quantos valores existem de cada conceito?  
- Qual é o conceito da aluna 'Sofia'?  


## DataFrame

O DataFrame é uma das principais estruturas do Pandas. É composto por uma estrutura bidimensional, que em sua apresentação se assemelha a uma planilha. Um Dataframe é formado por diversas Series, que compartilham um mesmo índice.

**Exemplo**

```python
pessoas = pd.DataFrame({'Nome': ["Maria", "José", "Eduarda", "Sergio", "Julia", 'Baltazar', 'Sofia'],
                        'Altura': [175, 182,160,156, 180, 158, 175],
                        'Idade': [21, 40, 41, 30, 25, 23, 29], 
                        'Sexo': ['f', 'm', 'f', 'm', 'f', 'm', 'f']
                        })
```

Para observar o dataframe:
```python
pessoas
```

É possível observar diversas informações sobre o DataFrame, utilizando o método `.info()`. O número de colunas, número de linhas, quantidades de valores não-nulos presentes em cada coluna e a quantidade de memória utilizada pelo DataFrame podem ser observados com esse método.  

**Exemplo**  

```python
pessoas.info()
```

Cada coluna pode possuir seu tipo de dado, que pode ser visto acessando o atributo `.dtypes`, acrônimo de *data types*.  

**Exemplo**  

```python
pessoas.dtypes
```

As estatísticas de cada coluna, assim como na Series, podem ser obtidas com o método `.describe()`.  

**Exemplo**  

```python
pessoas.describe()
```

**Atividade**

- Para pensar:  
    - Por que não aparecem as colunas com os dados de *Nome* e *Sexo* na saída do método `describe()`?

## Seleção de colunas

A identificação de cada coluna pode ser utilizada para acessar os dados de colunas específicas, como se fosse uma 'posição'.

**Exemplo**

```python
pessoas['Nome']
```

Observe o tipo dado que é retornado:
```python
type(pessoas['Nome'])
```
Perceba que selecionar uma única coluna retorna uma **Series**.

Também é possível observar mais de uma coluna de um dataframe, mostrando apenas as colunas desejadas.  

**Exemplo**  

```python
pessoas[['Nome', 'Altura']]
```
Observe que passar obter mais de uma coluna, como índice para o Dataframe é passado uma **lista** de valores.

Observe o tipo dado que é retornado:
```python
type(pessoas[['Nome', 'Altura']])
```
Perceba que observar várias colunas retorna um **DataFrame**.

**Atividade**

Execute os códigos 1 e 2 abaixo, compare-os e explique as diferenças, respondendo: 
    - os dados são os mesmos?
    - as estruturas retornadas possuem o mesmo tipo de dado?
    - Por quê?
    - Qual é a diferença na escolha de colunas a serem mostradas?

Código 1:
```python
pessoas['Nome']
```

Código 2:
```python
pessoas[['Nome']]
```

## Colunas de DataFrames como Series
Ao selecionar uma única coluna temos uma Series, e seus atributos podem ser aplicados.

**Exemplo**  

Para observar a quantidade de pessoas de cada sexo
```python
pessoas['Sexo'].value_counts()
```

## Seleção de linhas

Uma outra forma de selecionar elementos é utilizando os índices (linhas) como referência, utilizando o método `.loc[]`

**Exemplo**

```python
pessoas.loc[[2]]
pessoas.loc[[2,4]]
pessoas.loc[2:4]
```
Neste caso, utilizou o **conteúdo** do índice como referência.


Pode-se também obter a partir o índice da posição, com o método `.iloc[]`. 

**Exemplo**

```python
pessoas.iloc[[2]]
pessoas.iloc[[2,4]]
pessoas.iloc[2:4]
```

Para este exemplo, como os índices são numéricos, não há diferença nos resultados.

**Atividade**

- Explique cada parâmetro passado no método `.iloc[]` nos exemplos abaixo, em relação com a saída obtida. Compare as diferenças entre eles.  

```python
pessoas.iloc[2]
```

```python
pessoas.iloc[[2]]
```

```python
pessoas.iloc[[2,4]]
```

```python
pessoas.iloc[2:4]
```


## Amostras das linhas do Dataframe
Os métodos `.head()` e `.tail()` servem para obter as linhas iniciais ou finais de um DataFrame. Tais métodos são úteis para observar amostras dos dados, principalmente quando tratamos de DataFrames com muitas linhas.

**Exemplo**

```python
pessoas.head(2)
```



**Atividade**

- Qual é o valor padrão de linhas para o método `.head()`, caso o parâmetro seja omitido?



## Ordenação
É possível ordenar os dados por uma coluna específica, utilizando o método `.sort_values()`.

**Exemplo**

```python
pessoas.sort_values('Idade')
```

Observe novamente o Dataframe `pessoas`, e verifique que se os dados continuam ordenados pelo nome.

Para que a alteração seja permanente, é necessário **sobrescrever** o Datraframe.  

**Exemplo**  

```python
pessoas = pessoas.sort_values('Idade')
pessoas
```

## Utilizando Series como índices

É possível utilizar Series como índices em Dataframes.

**Exemplo**

Observe a saída:
```python
pessoas['Sexo'] == 'm'
```

Nesta saída o resultado é uma Series composta por valores do tipo *boolean*. Esta Series pode ser utilizada como índice, em que determinada operação será aplicada apenas aos elementos nas posições em que o índice possua valor `True`.


**Exemplo**

```python
idx=pessoas['Sexo'] == 'm' # A Series pessoas['Sexo'] == 'm' é armazenada em idx
homens=pessoas[idx]        # A Series idx é utilizada como índice, e o DataFrame resultante é salvo como homens
homens                     # Mostra o DataFrame Homens
```

Para estas operações, diversos operadores relacionais como `<`, `<=`, `>`, `>=` ou `==` podem utilizados. Desta forma, estas operações acabam funcionando como um filtro ou máscara, para as opearações aplicadas.

**Atividade**

- Filtre o DataFrame pessoas, mostrando apenas as mulheres.

**Atividade**

- Qual a altura média dos homens?
- Qual a altura média das mulheres?
- Quem são as pessoas que possuem altura acima da média (do conjunto de dados)?


## Carregando e salvando bases de dados

A biblioteca Pandas possibilita que um DataFrame pode ser carregado a partir de bases já existentes, em diversos formatos, como:
- **csv**
    - *Comma Separated Values*
    - formato em que os dados estão organizados em linha, e cada campo é separado por vírgula
    - método para carregar
        - `.read_csv()`
            - Parâmetro de entrada pode ser um caminho para arquivo csv local ou uma URL para um arquivo csv, disponível online.
    - Exemplo
```python
#Carrega um arquivo csv local
pd.read_csv('bases/alunos.csv')
```
    - [Documentação](https://pandas.pydata.org/pandas-docs/stable/reference/io.html#flat-file)
- **xls**: 
    - planilha do Microsoft Excel
    - método:
        - `.read_excel()`
    - Exemplo
```python
#Carrega um arquivo xls local
pd.read_csv('bases/alunos.xls')
```
    - [Documentação](https://pandas.pydata.org/pandas-docs/stable/reference/io.html#excel)
- **sql**
    - tabelas e resultados de consultas a bancos de dados
    - método para carregar:
        - `.read_sql_table()`
        - `.read_sql_query()`
    - [Documentação](https://pandas.pydata.org/pandas-docs/stable/reference/io.html#sql)
    

Para salvar um DataFrame em arquivo para ser carregado posteriormente:
- **csv**
    - `.to_csv()`
        - Método do DataFrame
    - Exemplo
```python
#salvando o DataFrame pessoas no diretório local
pessoas.to_csv('pessoas.csv')
```

## Exercício

Carregue o DataFrame **rioAptos** com informações sobre apartamentos na cidade do Rio de Janeiro. Para carregar, execute:

```python
rioAptos = pd.read_csv('https://raw.githubusercontent.com/mvinoba/notebooks-for-binder/master/dados.csv')
```



Observe quais são as colunas presentes na base de dados:



Observe os dados presentes nas primeiras linhas:

- Qual é o valor do apartamento mais barato?

- Qual é o valor do apartamento mais caro?

- Qual é o valor do metro quadrado mais barato?

- Qual é o valor do metro quadrado mais caro?

- Em qual bairro está o apartamento mais barato?

- Em qual bairro está o apartamento mais caro?

- Na base de dados, quantos apartamentos há em cada bairro?

- Qual é o tamanho médio dos apartamentos nos seguintes bairros:
    - Copacabana
    - Botafogo
    - Tijuca

- Quais são os apartamentos com preços acima da média?

Qual a porcentagem de apartamentos em Copacabana que possuem valores acima da média dos demais bairros?

## Referências

[MCKINNEY, Wes et al. Data structures for statistical computing in python. In: Proceedings of the 9th Python in Science Conference. 2010. p. 51-56.](http://conference.scipy.org/proceedings/scipy2010/pdfs/mckinney.pdf)  


### Outros materiais
- [Data Hackers: Seus primeiros passos como Data Scientist: Introdução ao Pandas](https://medium.com/data-hackers/uma-introdução-simples-ao-pandas-1e15eea37fa1)  
- [Pandas API Reference](https://pandas.pydata.org/pandas-docs/stable/reference/index.html)


