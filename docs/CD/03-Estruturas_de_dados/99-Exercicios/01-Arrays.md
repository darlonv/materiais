# Arrays

## Criação de arrays

1. Crie um *array* numpy de uma dimensão, com números de $0$ a $9$.

Saída:
```py
array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
```

2. Crie um *array* numpy de ordem 5x5 somente com valores `True`.

Saída:
```
array([[ True,  True,  True,  True,  True],
       [ True,  True,  True,  True,  True],
       [ True,  True,  True,  True,  True],
       [ True,  True,  True,  True,  True],
       [ True,  True,  True,  True,  True]])
```

3. Crie um *array* numpy com valores aleatórios. Em seguida, mostre apenas os valores ímpares presentes no *array*.

4. Crie um *array* numpy com valores de 1 a 19. Em seguida, substitua todos os valores pares por -1.

5. Crie um *array* com posições de 0 a 9, e transforme-o em um array com os valores organizados em duas colunas.

Saída:
```
array([[0, 1],
       [2, 3],
       [4, 5],
       [6, 7],
       [8, 9]])
```

6. Crie um array com posições de 0 a 9, e transforme-o em um array com os valores organizados em uma única coluna.

Saída:
```
array([[0],
       [1],
       [2],
       [3],
       [4],
       [5],
       [6],
       [7],
       [8],
       [9]])
```

7. Crie um *array* numpy com valores de 100 a 200, de forma que a diferença entre cada elemento seja 10.

**Exemplo** 

- Saída:
```
array([100, 110, 120, 130, 140, 150, 160, 170, 180, 190])




## Transformação de arrays

8. Transforme os arrays `x`e `y`
```python
x = np.array([1, 3, 5, 7, 8, 6, 4, 2, 0, 11])
y = np.array([2, 4, 6, 8, 7, 5, 3, 1, 0, 12])
```

em um array de duas dimensões, concatenando-os verticalmente em duas colunas.

Saída:
```python
array([[1, 2],
       [3, 4],
       [5, 6],
       [7, 8],
       [8, 7],
       [6, 5],
       [4, 3],
       [2, 1],
       [0, 0],
       [11, 12]])
```

## Manipulação de valores

Gere uma matriz 5x5 utilizando *arrays* numpy, com o valor 2 na diagonal principal.

Saída:
```python
array([[2., 0., 0., 0., 0.],
       [0., 2., 0., 0., 0.],
       [0., 0., 2., 0., 0.],
       [0., 0., 0., 2., 0.],
       [0., 0., 0., 0., 2.]])
```


8. Gere uma matriz 10x10 utilizando *arrays* numpy, com o valor -1 na diagonal principal e 2 nas demais posições.

Saída:
```python
array([[1., 2., 2., 2., 2., 2., 2., 2., 2., 2.],
       [2., 1., 2., 2., 2., 2., 2., 2., 2., 2.],
       [2., 2., 1., 2., 2., 2., 2., 2., 2., 2.],
       [2., 2., 2., 1., 2., 2., 2., 2., 2., 2.],
       [2., 2., 2., 2., 1., 2., 2., 2., 2., 2.],
       [2., 2., 2., 2., 2., 1., 2., 2., 2., 2.],
       [2., 2., 2., 2., 2., 2., 1., 2., 2., 2.],
       [2., 2., 2., 2., 2., 2., 2., 1., 2., 2.],
       [2., 2., 2., 2., 2., 2., 2., 2., 1., 2.],
       [2., 2., 2., 2., 2., 2., 2., 2., 2., 1.]])
```



1. Gere uma matriz de ordem 7x7, com valores 0 na diagonal principal e 1 nas demais posições.

Saída:
```python
array([[0., 1., 1., 1., 1., 1., 1.],
       [1., 0., 1., 1., 1., 1., 1.],
       [1., 1., 0., 1., 1., 1., 1.],
       [1., 1., 1., 0., 1., 1., 1.],
       [1., 1., 1., 1., 0., 1., 1.],
       [1., 1., 1., 1., 1., 0., 1.],
       [1., 1., 1., 1., 1., 1., 0.]])
```



1. Gere *arrays* numpy com valores aleatórios, com `n` posições, de forma que `n` deve ser definido em uma variável.  
Os *arrays* gerados devem ser:
- idade: (valores entre 0 e 100 anos)
- peso:  (valores entre 1 e 120 kilos)
- altura (entre 0.5 e 2.0 metros)
- sexo   (f ou m)

Com base nos dados gerados, obtenha:
- A idade média de todas as as pessoas
- O peso médio de todas as pessoas
- A altura média de todas as pessoas
- O peso médio das pessoas menores de 20 anos
- O peso médio das pessoas com idade entre 20 e 60 anos
- O peso médio das pessoas com mais de 60 anos
- O peso médio das pessoas, separadas por sexo
- O IMC das pessoas, separadas por sexo
- A idade da pessoa mais alta, e da mais baixa
- A idade da pessoa com maior peso e da com menor peso
- A maior e menor idade, de acordo com cada sexo.



## Referências

[PRABHAKARAN, S. 101 NumPy Exercises for Data Analysis (Python). Machine Learning Plus, 2018.](https://www.machinelearningplus.com/python/101-numpy-exercises-python/)

[ROUGIER, N. P. 100 numpy exercises.](https://github.com/rougier/numpy-100/blob/master/100_Numpy_exercises.ipynb)