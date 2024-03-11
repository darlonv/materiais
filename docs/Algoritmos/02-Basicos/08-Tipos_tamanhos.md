import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Literais, tipos e tamanhos


As diferentes linguagens de programação podem possuir em sua implementação vários tipos de dados primitivos, e os valores que podem ser armazenados em variáveis de cada tipo depende da quantidade de memória que cada tipo utiliza.



<Tabs groupId='language'>
<TabItem value="pseudocodigo" label="Pseudocódigo" default>

```c
escreva("Olá Mundo");
```

</TabItem>
<TabItem value="java" label="Java">

Para inteiros:   

|Tipo de dado| Tamanho | valor mínimo | valor máximo |
|---|---|---|---|
|byte| 1 byte| -128| 127 |
|short| 2 bytes | -32768| 32767 |
|int| 4 bytes |-2147483648| 2147483647 |
|long| 8 bytes |-9223372036854775808| 9223372036854775807 |


Para real:  

|Tipo de dado| Tamanho | descrição |
|---|---|---|
|float| 4 bytes| 6 a 7 casas decimais|
|double| 8 bytes| 15 casas decimais |

para lógico:  

|Tipo de dado| Tamanho | valores |
|---|---|---|
|boolean|1 bit| `true` / `false` |

para caractere:  

|Tipo de dado| Tamanho | descrição |
|---|---|---|
|char|2 bytes| armazena um único caractere|

Fonte: [Oracle. Java Language Specification. Types, Values and Variables: 4.2.1 Integral Types and Values.](https://docs.oracle.com/javase/specs/jls/se21/html/jls-4.html#jls-4.2)

</TabItem>
<TabItem value="python" label="Python">

```python
print("Olá Mundo")
```

</TabItem>

<TabItem value="c" label="C">

```c
printf("Olá Mundo")
```

</TabItem>

</Tabs>


## Referências

[Oracle. Java Language Specification. Types, Values and Variables: 4.2.1 Integral Types and Values.](https://docs.oracle.com/javase/specs/jls/se21/html/jls-4.html#jls-4.2)