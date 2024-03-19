import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Seleção encadeada

A seleção encadeada ou *aninhada* consiste em tratar situações em que não ocorrem apenas duas possibilidades. Nestes casos, o emprego da estrutura `se` ocorre em diversos níveis.
<!-- --- -->

Voltemos ao nosso exemplo dos números positivos, negativos e nulos.

<Tabs groupId='language'>
  <TabItem value="portugol" label="Portugol" default>

  ```c showLineNumbers
  início
  //variáveis
  inteiro: valor;
  escreva("Valor: ");
  leia(valor);

  //processamento e saída
  se(valor > 0) //<-- Verifica se o valor é positivo
    então 
      início
        escreva("Positivo");
      fim;
  se(valor < 0) //<-- Verifica se o valor é negativo
    senão
      início
        escreva("Negativo");
      fim;
  se(valor == 0) //<-- Verifica se o valor é nulo
    senão
      início
        escreva("Nulo");
      fim;
  fimse;
  ```

  </TabItem>
  <TabItem value="java" label="Java">

  ```c showLineNumbers
  //variáveis e entrada
  int valor;
  Scanner entrada;
  entrada = new Scanner(System.in);
  System.out.println("Valor: ");
  valor = entrada.nextInt();
  entrada.close();

  //processamento e saída
  if( valor > 0 )
  { 
    System.out.println("Positivo");
  }
  if( valor < 0 )
  { 
    System.out.println("Negativo");
  }
  if( valor == 0 )
  { 
    System.out.println("Nulo");
  }

  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ```python showLineNumbers
  #variáveis e entrada
  valor = int(input("Valor: "))

  #processamento e saída
  if x>0:
    print("Positivo")
  # highlight-start
  if x<0:
    print("Negativo")
  if x==0:
    print("Nulo")
  # highlight-end
  ```

  </TabItem>
</Tabs>
<!-- --- -->

Neste caso, todas as condições são testadas. Isto pode ser melhorado aninhando estruturas `se`. 

Utilizando estruturas de seleção encadeadas, apenas duas das condições são executas.

<Tabs groupId='language'>
  <TabItem value="portugol" label="Portugol" default>

  ```c showLineNumbers
  início
  //variáveis
  inteiro: valor;
  escreva("Valor: ");
  leia(valor);

  //processamento e saída
  se(valor > 0) //<-- Verifica se o valor é positivo
    então 
      início
        escreva("Positivo");
      fim;
    senão
      início
        se(valor < 0) //<-- Verifica se o valor é negativo apenas se não for positivo
          início
            escreva("Negativo");
          fim;
        senão //<-- O valor é nulo. Não há outra possibilidade
          início
            escreva("Nulo");
          fim;
      fim;
  fimse;
  ```

  </TabItem>
  <TabItem value="java" label="Java">

  ```c showLineNumbers
  //variáveis e entrada
  int valor;
  Scanner entrada;
  entrada = new Scanner(System.in);
  System.out.println("Valor: ");
  valor = entrada.nextInt();
  entrada.close();

  //processamento e saída
  if( valor > 0 )
  { 
    System.out.println("Positivo");
  }
  else
  {
    if( valor < 0 ) //<-- Verifica se o valor é negativo apenas se não for positivo
    { 
        System.out.println("Negativo");
    }
    else //<-- O valor é nulo. Não há outra possibilidade
    { 
        System.out.println("Nulo");
    }
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ```python showLineNumbers
  #variáveis e entrada
  valor = int(input("Valor: "))

  #processamento e saída
  if x>0:
    print("Positivo")
  # highlight-start
  else:
    if x<0: #<-- Verifica se o valor é negativo apenas se não for positivo
        print("Negativo")
    else: #<-- O valor é nulo. Não há outra possibilidade
        print("Nulo")
  # highlight-end
  ```

  </TabItem>
</Tabs>
<!-- --- -->


## Referências
::: {#refs}
:::

