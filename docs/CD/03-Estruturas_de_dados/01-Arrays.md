# Arrays

## Numpy

Numpy é uma biblioteca Python voltada para computação científica. Possui implementações bastante otimizadas para utilização de *arrays* ou vetores.

Para que o acesso às estruturas seja possível, é necessário a importação da biblioteca. É comum e uma boa prática renomear a biblioteca para `np`.


**Exemplo**  

```python
import numpy as np
```

**Atividade**
- Importe a biblioteca numpy.



## arrays numpy
O *array* numpy é uma lista de valores, indexada por uma tupla de inteiros não negativos. O número de dimensões do **array** é também chamado de *rank* do **array**. O *shape* de um *array* é uma tupla de inteiros, dado o tamanho do *array* em cada dimensão definida. Nesta atividade, trataremos como sinônimos **array** e **vetor**.

Para criar um *array*, pode-se utilizar o método `.array()`.

**Exemplo**

Crie um vetor de uma dimensão
```python
a = np.array([1, 2, 3])
```


Para observar os tipos dos dados:

**Exemplo**

```python
print(a)
```



**Atividade**
- Observe o tipo do dado do *array* e dos valores armazenados.
```python
print(type(a))
print(type(a[0]), type(a[1]),type(a[2]))
```



**Atividade**
- Observe o formato do vetor.
```python
print (a.shape)
```

Para acessar os elementos individualmente, pode-se utilizar a posição da mesma forma como é feito com sequências.

**Exemplo**

```python
print(a[0], a[1], a[2])
```



**Atividade**
- Execute os códigos a seguir, e observe o resultado.
```python
print(a)
a[0]=100 #Altera o valor armazenado na posição 0
print(a)
```




Todos os dados armazenados devem ser do **mesmo tipo**. Caso não sejam, serão convertidos a um tipo em comum.

**Exemplo**
```python
arr_st = np.array(['a', 5.4, 2]) #todos os dados como string
arr_ft = np.array([1  , 5.4, 2]) #todos os dados como float

print(f'{arr_st}')
print(f'{arr_ft}')
```



**Atividade**

- Crie um outro vetor, com o seguinte formato  
```python
b = np.array([[1,2,3], [4,5,6]])
```

- Compare os *arrays* `a` e `b`. Qual é a diferença?



**Atividade**

- Execute o código abaixo, e o quê é mostrado.  
```python
print(b[1])
print(b[1][1])
```




## *Reshape*
É possível alterar o formato do *array*. Execute os código abaixo passo a passo, observando o resultado:
```python
arr = np.arange(10)
print(arr)
print(arr.shape)
arr.reshape(5,2)
arr.reshape(2,5)
```
**Sintaxe**

`.reshape(l,c)`  
onde:
- `l`: número de linhas
- `c`: número de colunas

O valor `l*c` deve corresponder à quantidade total de elementos no *array*.



É possível definir a ordem do *array* sem conhecer uma de suas dimensões. Para isto, basta substituir o número de linhas ou colunas por `-1`.  

**Exemplo**

```python
arr = np.arange(10)
arr.reshape(5,-1)
arr.reshape(-1,5)
arr.reshape(2,-1)
arr.reshape(-1,2)
```



**Atividade**

- Crie um *array* com 100 elementos contendo inteiros em sequência. Em seguida, organize esses valores em 10 colunas.
    - Organize o mesmo *array* em 25 colunas.



## Tipos de dados

**Exemplo**  
- Observe os tipos de dados armazenados
```python
print(a.dtype)
```



**Atividade**

- Compare o resultado do código anterior com os tipos de dados dos vetores abaixo, e explique o que ocorreu.

```python
x=np.array([1, 2])
y=np.array([1.0, 2.0])
z=np.array([1, 2], dtype=np.int64)
```



## Criação de arrays

**Atividade**  

- Teste as funções abaixo, e observe o vetor retornado por cada função.
```python
np.zeros((2,2))
np.ones((3,3))
np.full((4,4),9)
np.eye(5)
np.random.random((6,6))
```



Outras funções podem ser utilizadas para obter valores igualmente espaçados entre si.

**Exemplo**  

```python
np.linspace(0,10,5)
np.linspace(0,10,3)
np.linspace(0,10,11)
```
**Sintaxe**

```python
.linspace(i,f,n)
```
Onde:
- `i`: valor inicial
- `f`: valor final
- `n`: quantidade de valores
No método `linspace`, os valores de saída são do tipo `float` (`numpy.float64`).



## *Slicing*

Semelhantes às listas em Python, os arrays numpy possibilitam o *slicing*. Como os arrays podem possuir diversas dimensões, é necessário identificar o *slice* para cada dimensão.  
```python
a = np.array([[1,2,3,4], [5,6,7,8], [9,10,11,12]])
b = a[:2, 1:3]
```

Significado:
```python
:2: linhas 0 a 1  
1:3: colunas 1 a 2
```
**Atividade**
- Observe o conteúdo dos vetores `a` e `b`.



**Atividade**
- Como seria para mostrar apenas as colunas `1` e `3` utilizando *slices*?



**Atividade**

- Execute o código abaixo, e observe os resultados.
```python
b = a[[0,2], 2]  
c = a[[0,2,2], [0,2,3]]
```

    - O que ocorreu em `b` e `c`?



## Alterações em *slices*

**Atividade**

- Observe o array `a`
- Execute:
```python
c = a[:2, 1:3]
```
- Observe o array `c`
- Execute:
```python
c[0][0]=20
```
- Observe o array `a` e explique o resultado.



<!-- **Atividade**

- O que ocorre com as operações abaixo?
```python
a = np.array([[1,2,3], [4,5,6], [7,8,9], [10, 11, 12]])
b = np.array(0, 2, 0, 1)
```
- Explique o resultado ocorrido. -->


## Operações sobre *arrays*



**Exemplo**  

- *Arrays*:

```python
x = np.array([ [1, 2],[3, 4] ])  
y = np.array([ [5, 6],[7, 8] ])  
print('x:',x)
print('y:',y)
```



Operações básicas podem ser realizadas sobre o array  

- adição (+)
- subtração (-)
- multiplicação (\*)
- divisão (/)

**Exemplo**

```python
x+y
x-y
x*y
x/y
```









A biblioteca numpy também possui outras operações, acessíveis por métodos:  

```python
.add()
.subtract()
.multiply()
.divide()
.sqrt()
```

**Exemplo**

```python
np.add(x,4)
np.subtract(x,2)
np.multiply(x,5)
np.divide(x,2)
np.sqrt(x)

```











Possui também operações sobre os valores em arrays  
```python
.sum()
.mean()
.min()
.max()
...
```
**Exemplo**

```python
x.sum()
x.mean()
x.min()
x.max()
```











**Atividade**

Realize as seguinte operações:
```python
a = np.array([[1,2,3], [4,5,6], [7,8,9], [10, 11, 12]])  
b = np.array([0, 2, 0, 1])  
a[np.arange(4), b] += 10
```

Observe:
- Quais são os conteúdos dos *arrays* `a` e `b` após a criação deles?
- Qual é o resultado da expressão `np.arange(4)`?
- Ao final, qual é o conteúdo do *array* `a`?
- Quais posições de `a` foram alteradas?
    - Por que apenas essas posições foram alteradas?

## Índices booleanos

Numpy possibilita que sejam aplicadas operações a todos os elementos. Para operadores relacionais, é retornado um *array* booleano.

**Atividade**

Execute:  
```python
a = np.array([[1,2,3,4], [5,6,7,8], [9,10,11,12]])  
idx = a > 6
```

Observe o conteúdo:  
- do array `a`
- do array `idx`

Execute:
```python
a[idx]
```

Observe o resultado.

Execute:  
```python
a[idx] += 100
```

Observe o resultado. O que aconteceu?

**Atividade**

- Qual é a soma dos números com valor maior que $8$ no array `a`?



Qual é a soma dos valores menores que $10$ no array `a`?



## Where

Utilizando a função `where()`, é possível descobrir quais posições do *array* correspondem a uma condição determinada.

**Exemplo**

Extrair valores maiores que 15:
```python
arr = np.arange(10,20)
np.where(arr > 15)
```

Extrair valores pares:

```python
arr = np.arange(10,20)
np.where(arr % 2 == 0)
```

**Atividade**

Obtenha a posição do vetor que possui o maior valor.

## Referências

[HARRIS. C.R. Millman, K.J, van der Walt, S.J. et al. Array programming with NumPy. Nature 585, 357-362, 2020](https://www.nature.com/articles/s41586-020-2649-2) [PDF](https://www.nature.com/articles/s41586-020-2649-2.pdf)

**Outros materiais**



