import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Parâmetros

Uma das possibilidades com os procedimentos e as funções é a passagem de parâmetros. Os parâmetros consistem nos conteúdos a serem passados para as variáveis que estão dentro das funções.

O uso dos parâmetros permite que o conteúdo da função seja realizado de acordo com os conteúdos das variáveis a ela passados.

**Exemplo**
- Desenvolva uma função que retorna verdadeiro se o valor passado por parâmetro for par.

<Tabs groupId='language'>
  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

  ```c
  inicio
    //módulos
    modulo testarPar(inteiro: numero)
        logico: par;
        par = mod(numero,2) = 0;
        retorne par;
    fimmodulo;
  
    //variáveis
    inteiro: x;
    logico: valor_par;

    //entrada
    escreva("Entre com um número: ");
    leia(x);

    //processamento e saída
    valor_par = testarPar(x);
    escreva("O número ", x , " é par? ", valor_par);

  fim.
  ```

  </TabItem>
  <TabItem value="java" label="Java">

  ```javascript
    //módulos
    public static boolean testarPar(int numero){
        boolean par;
        par = numero % 2 == 0;
        return par;
    }

    //main
    public static void main(String[] args){
        //variáveis
        int x;
        boolean valor_par;

        //entrada
        entradaAbrir();
        System.out.println("Entre com um número: ");
        leia(x);
        entradaFechar();

        //processamento e saída
        valor_par = testarPar(x);
        System.out.println("O número " + x + " é par? " + valor_par);
    }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ```python
    #módulos
    def testarPar(numero):
        par = numero%2 == 0
        return par
  
    #entrada
    x = int(input("Entre com um número: "))

    #processamento e saída
    valor_par = testarPar(x)
    print(f"O número {x} é par? {valor_par}")
    
  ```

  </TabItem>
</Tabs>


**Atividade**
- Desenvolva uma função que retorna se um número é ímpar.
- Desenvolva uma função que calcula a soma entre dois números.
- Desenvolva uma função que calcula a soma entre três números.
