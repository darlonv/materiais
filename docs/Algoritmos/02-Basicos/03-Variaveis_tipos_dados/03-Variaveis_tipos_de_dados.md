# Variáveis e tipos de dados

Aqui abordaremos as maneiras de organizar e utilizar a memória internamente ao algoritmo. Já tivemos uma noção inicial do seu uso em entrada e saída de dados, e agora os observaremos esse ponto mais a fundo.

Os dados compreendem a matéria-prima básica a execução dos sistemas computacionais. Com eles podemos processá-los, transformálos, armazená-los e apresentá-los, ou seja, as tarefas que um computador é capaz de realizar. Com isto, é de fundamental importância compreender seu funcionamento dentro dos algoritmos.

:::info Informação
**Dado** e **informação** são conceitos distintos. Uma informação é um dado com valor. Por exemplo quando observamos a data 19 de abril, temos um dado. Ao sabermos que este é o dia do índio, temos uma informação.
:::

## Variáveis

Para que um código possa ser executado por um processador, é necessário que ele seja alocado pelo sistema operacional na memória RAM. Um código em momento de execução é chamado de **processo**. A alocação, organização e execução de processos em um sistema computacional é uma das tarefas do sistema operacional.

![Memória RAM com demonstração de espaço para código e espaço para variáveis](./img/variaveis_01_processos.png)

Quando falamos sobre variáveis, começamos a observar que estes são espaços na memória RAM em que os dados serão armazenados. Tanto o código como as variáveis são armazenados na memória RAM para serem executados pelo processador.

![Memória RAM com demonstração de espaço para código e espaço para variáveis](./img/variaveis_02_texto-e-dados.png)

No desenvolvimento de algoritmos, há a necessidade de identificar uma característica nos dados. Em específico, se tais dados são **constantes** ou **variáveis** no decorrer da execução do algoritmo.

Um valor **variável** é aquele que pode ser modificado no decorrer da execução do algoritmo.
 
**Exemplos**
- Valores indicados pelo usuário
    - Os valores para A e B são 15 e 50
    - O lado do quadrado
- Resultados intermediários de operações matemáticas
- Estado de alguma operação
    - A janela está aberta
    - A janela está fechada

### Identificadores

Um **identificador** é um nome, que corresponde a um dado a ser utilizado no algoritmo. Podemos dizer que um identificado é o **nome da variável**.

![Memória RAM com indicação de onde as variáveis são armazenadas e seus identificadores](./img/variaveis_03_identificadores.png)

**Exemplos**
- Calcule a área do quadrado que possui lado de tamanho **l**.
- Calcule quantos dias de vida tem uma pessoa com **x** anos. Considere que um ano possui sempre 365 dias.

Para criar um identificador, algumas regras devem sempre ser seguidas.
- Sempre deve começar com caractere alfabético (a-z, A-Z).
- Podem ser seguidos por um ou mais caracteres alfabéticos, numéricos (0-9) ou _underscore_ ( \_ ).
- Caracteres especiais não podem ser utilizados.

**Exemplos**
- Gama
- X
- notas
- soma
- Soma
- SoMA_Total

**Exercício**
- Identifique se os identificadores a seguir são válidos ou inválidos

    - 2tempos

    - verdadeiro-ou-falso

    - janela_aberta

    - nome

    - Tamanho do lado

    - area

    - SomaTotal

    - media/2

#### Convenções

### Declaração de variáveis

Quando falamos de dispositivos computacionais, as variáveis correspondem a uma área do dispositivo responsável pelo armazenamento de informações, a **memória**.

Podemos imaginar a memória como sendo um grande armário, que possui um grande número de gavetas. Cada uma das gavetas pode possui um rótulo (identificador) e dentro de cada gaveta pode ser armazenado um dado.

É fundamental que o **tipo de dado** de cada **variável** seja observado e utilizado sempre de maneira correta.

**Exercício**  
- Identifique se o tipo de dado de cada variável está correto ou incorreto.

    - inteiro: endereço

    - inteiro: nro_gatos

    - inteiro: qtde_itens

    - real: soma_total

    - inteiro: soma_total

    - caractere: idade

    - lógico: idade

**Exercício**  
- Identifique se o tipo de dado de cada variável está correto ou incorreto.

    - inteiro: idade

    - real: nome

    - lógico: janela_aberta

    - real: peso

    - real: tamanho

## Tipos de dados

Um tipo de dado pode ser criado a partir de outros tipos de dados. Os tipos de dados iniciais já presentes em uma linguagem de programação são chamados de **tipos primitivos de dados**. Aqui observaremos os tipos de dados **inteiro**, **real**, **caractere** e **lógico**.

### Inteiro

### Real

### Lógico

### Caractere





## Inteiro

Um **inteiro** é uma informação numérica, que compreende valores que correspondem ao conjunto dos números inteiros (positivos, nulo e negativos)

**Exemplo**  
- O Campus possui 4 construções;
- Estão construindo 22 casas novas no bairro vizinho;
- O cachorro tem 8 anos de idade.

**Observação**  
Nas linguagens de programação, é comum observarmos o tipo inteiro como **int**.

## Real

O tipo de dado **real** é aquele que possui um valor que está compreendido no conjunto dos números reais. São abordados os números negativos, positivos e nulo, considerando as casas decimais.

**Exemplo**  
- A distância do portão até a sala é de 25,7 metros.
- O saldo bancário é de R\$ 357,32.
- O saldo bancário é de R\$ -169,20.

**Observação**  
Nas linguagens de programação, é comum observarmos o tipo real como **float** ou **double**.

## Caractere

Os dado do tipo **caractere** são aqueles que pertencem ao conjunto de valores alfanuméricos (0-9), alfabéticos (a-z, A-Z) e especiais (\!\@\#\$\%\*+-/, dentre outros).

**Exemplo**  
- O professor disse: "Não use o celular durante a aula!".
- Ao final do jornal, ele sempre fala "Boa noite".
- O nome do presidente do clube é "Celso da Silva".

**Observação**  
Nas linguagens de programação, é comum observarmos o tipo caractere como **string** (ou str).

## Lógico

Um dado do tipo **lógico** é aquele em que dois valores podem ser asssumidos: verdadeiro ou falso.

**Exemplo**  
- A janela está aberta.
- O carro está ligado.
- A bicicleta está parada.

**Observação**  
Nas linguagens de programação, é comum observarmos o tipo lógico como **bool** (ou boolean).

**Exercícios**  
Observe qual é o tipo de dado em cada situação ([FORBELLONE, pg. 20](https://plataforma.bvirtual.com.br/Leitor/Publicacao/200078/pdf/44)):

- A placa "Pare!" tinha 2 furos de bala.

- Josefina subiu 5 degraus para pegar uma maçã boa.

- Alberta levou 3,5 horas para chegar ao hospital.

- Astrogilda mandou pintar em um lote de 10 camisetas: "Preserve o meio ambiente", e ficou devendo R\$ 150,00 para a estamparia Pinte e Borde a ser pago em 3 parcelas.

- Felisberto recebeu sua 18ª medalha por ter alcançado a marca de 578,3 segundos nos 100 metros rasos.

## Referências
- [FORBELLONE, André Luiz Villar; EBERSPÄTCHER, Henri Frederico. Lógica de programação: A construção de algoritmoss e estruturas de dados com aplicações em Python. 4.ed. São Paulo: Pearson; Porto Alegre: Bookman, 2022](https://plataforma.bvirtual.com.br/Leitor/Publicacao/200078/pdf)

 
## Apresentações
- [HTML](pathname:///slides/Algoritmos/02-Basicos/04-Tipos_primitivos_de_dados.html)
- [PDF](pathname:///slides/Algoritmos/02-Basicos/04-Tipos_primitivos_de_dados.pdf)