import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Seleção

Uma estrutura de **seleção** possibilita que determinadas ações, ou seja, linhas de um algoritmo, sejam executadas em ou não. A **decisão** se essas linhas serão ou não executadas depende uma **condição** [@forbellone2022 p. 50].
<!-- --- -->

A estrutura de seleção é dada pelo uso da estrutura `se`. Com ela é possível definir *se*  determinado trecho de código seja executado de acordo com determinada **condição**. A **condição** é uma expressão que resulta em `verdadeiro` ou `falso`. Caso o resultado da expressão seja `verdadeiro`, o trecho de código é executado.
<!-- --- -->

## Seleção simples

A seleção **simples** consiste em executar determinado trecho de código caso o resultado da expressão seja verdadeiro.
<!-- --- -->

### Sintaxe


Estrutura do código de seleção simples.

<Tabs groupId='language'>
<TabItem value="portugol" label="Portugol" default>

```boo
se(<expressão>)
  então
    //código a ser executado caso o 
    //resultado da <expressão> seja verdadeiro.
fimse;
```

</TabItem>
<TabItem value="java" label="Java">

```javascript
if(<expressão>)
  //código a ser executado caso o resultado da <expressão> seja verdadeiro.
```

</TabItem>
<TabItem value="python" label="Python">

```python
if <expressão>:
  #código a ser executado caso o 
  #resultado da <expressão> seja verdadeiro.
```

</TabItem>
</Tabs>

<!-- --- -->