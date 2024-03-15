
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Modelo de caixa-preta

Para que exista a interação do algoritmo desenvolvido com agentes externos a ele como o usuário, monitor, teclado, internet, mouse, arquivos, etc., é necessário que algumas funções específicas sejam utilizadas.

<!-- marp --- -->

Algoritmos tratam da transformação da informação. Podemos entender um algoritmo como uma [caixa preta](https://pt.wikipedia.org/wiki/Caixa_preta_(teoria_dos_sistemas)), ou seja, um sistema que recebe dados de **entrada** e apresenta dados de **saída** sem que possamos conhecer o que está ocorrendo internamente na caixa.

![Algoritmo_caixa_preta](./images/entrada_saida.png)

<!-- marp --- -->

A entrada de dados consiste nas informações a serem trabalhadas, e a saída consiste no resultado das operações realizadas sobre a entrada.

**Exemplo**

- Cálculo da área de um quadrado.

![Exemplo de algoritmo como caixa preta, mostrando o cálculo da área de um quadrado. A entrada é o lado do quadrado, o processamento é área = lado x lado, e a saída é área](./images/entrada_saida_02_area_quadrado.png)

<!-- marp --- -->

## Referências

[WIKIPEDIA. Caixa-preta (teoria dos sistemas)](https://pt.wikipedia.org/wiki/Caixa_preta_(teoria_dos_sistemas))

### Outros materiais

