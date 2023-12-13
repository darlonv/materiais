# Quick Sort

O algoritmo do Quick Sort pode ser abordado utilizando divisão e conquista, em que a fase de divisão chamamos de particionamento. Após realizado o particionamento é obtida uma posição chave, em que elementos à esquerda dessa posição são menores que os que estão à direita dessa posição. O elemento que estiver nessa posição chave chamaremos de **pivô**.

De maneira geral, temos o seguinte algoritmo recursivo:

```javascript
public static void quickSort(int[] v){
    quickSort_(v, 0, v.length-1);
}

public static void quickSort_(int[] v, int ini, int fim){
    int pos_pivot = quickSort_particionamento(v, ini, fim);
    quickSort_(v, ini, pos_pivot-1);
    quickSort_(v, pos_pivot+1, fim);
}
```

```python
def quickSort(v):
    quickSort_(v, 0, len(v)-1):

def quickSort_i(v, ini, fim):
    pos_pivot = quickSort_particionamento(v, ini, fim)
    quickSort_(v, ini, pos_pivot-1)
    quickSort_(v, pos_pivot+1, fim)
```

## Particionamento



```javascript
static int quickSort_particionar(int[] v, int ini, int fim) {
        int pivot = v[fim]; //<- pivô é o último elemento
        int pos_menores = ini - 1; //<- menores ou iguais que o pivô

        for (int i = ini; i < fim; i++) {
            if (v[i] <= pivot) {
                pos_menores++;
                troca(v, pos_menores, i);
            }
        }
        pos_menores++;
        troca(v, pos_menores, fim);
        return pos_menores;

    }
```

### Naive

### Hoare

O particionamento de *Hoare* consiste em dois índices, um a partir da esquerda do vetor e outro a partir da direita. O da esquerda é incrementado até que um valor maior que o pivô seja encontrado, e o índice da direita faz o contrário: é decrementado até encontrar um valor menor que o pivô. Quando os dois índices encontram esses valores, os valores são trocados e o processo se repete. Isto é feito até que os dois índices se encontrem. Quando se encontrarem, esta é a posição do pivô.


```javascript
public static int quickSortParticionamentoHoare(int[] v, int lim_esq, int lim_dir){
    int pivot = v[lim_esq]; //Escolha do pivô
    int idx_esq = lim_esq, idx_dir = lim_dir;

    while(true){
        while( v[idx_esq] < pivot){ //incrementa até achar um valor menor
            idx_esq++;
        }

        while( v[idx_dir] > pivot){ //decrementa até achar um valor maior
            idx_dir--;
        }

        if( idx_esq >= idx_dir){
            return idx_dir; //quando os índices se encontrarem, o índice da direita terá o pivô
        }

        troca(v, idx_esq, idx_dir);
        idx_esq++;
        idx_dir++;
    }
}
```

**Para pensar**

- Nas estrutura de repetição internas, poderiam ser utilizadas as comparações $<=$ ou $>=$ em alguma delas?
    - O que poderia acontecer na  com o algoritmo caso fosse alterado?

### Lomuto

### Melhores pivôs

## Chamadas



```python
def partic_lomuto(entrada, idx_esq, idx_dir):
    pos_pivot = idx_esq
    pivot = entrada[pos_pivot]
    
    i = idx_esq
    for j in range(idx_esq+1, idx_dir+1):
        if entrada[j] <= pivot:
            i+=1
            entrada[i], entrada[j] = entrada[j], entrada[i]
        
    entrada[pos_pivot], entrada[i] = entrada[i], entrada[pos_pivot]
    pos_pivot = i
    return pos_pivot

def quick_sort_lomuto_interno(entrada, idx_esq, idx_dir):
    if idx_esq < idx_dir:
        pos_pivot = partic_lomuto(entrada, idx_esq, idx_dir)
        quick_sort_lomuto_interno(entrada, idx_esq, pos_pivot-1)
        quick_sort_lomuto_interno(entrada, pos_pivot+1, idx_dir )
    
def quick_sort_lomuto(entrada):
    entrada = entrada.copy()
    quick_sort_lomuto_interno(entrada, 0, len(entrada)-1)
    return entrada
```

## Variações

## Tipo de dados genéricos

## Iterativo

## Análise

## Referências

[DEMAINE, Erik; LEISERSON, Charles. Introduction to Algorithms: Lecture 4: Quicksort, Randomized Algorithms. MIT OpenCourseWare. Massachussetts Institute of Technology. MIT, 2005.](https://ocw.mit.edu/courses/6-046j-introduction-to-algorithms-sma-5503-fall-2005/resources/lecture-4-quicksort-randomized-algorithms/)