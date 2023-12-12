# Quick Sort

O Quick Sort é um algoritmo de ordenação que pode ser desenvolvido em duas fases.

## Particionamento

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

