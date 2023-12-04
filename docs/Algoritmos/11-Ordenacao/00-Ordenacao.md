# Ordenação

Alguns princípios

- Se o vetor possui um único elemento, ele já se encontra ordenado.

- Elementos de qualquer tipo podem ser ordenados. Para tal, é necessário que seja possível comparar esses elementos. É comum nas linguagens de programação que uma função de comparação seja passada.

$n$ é o número total de elementos no vetor.

```c
função troca(vetor de inteiro v, inteiro i, inteiro j)
inicio
    inteiro tmp;
    tmp = v[i];
    v[i] = v[j]
    v[j] = tmp
fim;
```

```javascript
public static void troca(int[] v, int i, int j){
    int tmp = v[i];
    v[i] = v[j];
    v[j] = tmp;
}
```


```python
def troca(v, i, j){
    v[i], v[j] = v[j], v[i]
}
```