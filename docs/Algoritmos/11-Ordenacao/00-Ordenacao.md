# Ordenação

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