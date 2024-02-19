import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Funções de entrada e saída

As funções de entrada e saída realizam a conexão do algoritmo com o ambiente externo, recebendo e enviando dados.

## Saída de dados

A saída de dados que utilizaremos aqui é a tela. Para mostrar uma mensagem na tela, utilizaremos a função abaixo, acompanhada da mensagem que desejamos apresentar na tela.

<Tabs groupId='language'>
  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

  ```c
  escreva();
  ```

  </TabItem>
  <TabItem value="java" label="Java">

  ```javascript
  System.out.println();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ```python
  print()
  ```

  </TabItem>

  <TabItem value="c" label="C">

  ```c
  printf();
  ```

:::caution Atenção
Para que a função de saída `printf()` possa ser utilizada é necessário importar a biblioteca de entrada e saída padrão.

Para tal, basta incluir no início do código a linha
```c
#include <stdio.h>
```
:::

  </TabItem>

</Tabs>

**Exemplo**  
- Para apresentar na tela a mensagem `Olá Mundo`:  

<Tabs groupId='language'>
  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

  ```c
  escreva("Olá Mundo");
  ```

  </TabItem>
  <TabItem value="java" label="Java">

  ```javascript
  System.out.println("Olá Mundo");
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ```python
  print("Olá Mundo")
  ```

  </TabItem>
  <TabItem value="c" label="C">

  ```c
  printf("Olá Mundo");
  ```

  </TabItem>
</Tabs>

Saída na tela:
```
Olá Mundo
```

:::caution Atenção

Perceba que aqui estamos observando apenas a função de saída. Para que ela possa funcionar de maneira correta no algoritmo, é necessário que ela esteja dentro de uma **estrutura básica**.

<Tabs groupId='language'>
  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

  ```c
  início
    módulo Principal
      escreva("Olá Mundo");
    fimmódulo;
  fim.
  ```

  </TabItem>
  <TabItem value="java" label="Java">

  ```javascript
  public class Main{
    public static void main(String args){
      System.out.println("Olá Mundo");
    }
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ```python
  if __name__ == "main":
    print("Olá Mundo")
  ```

  </TabItem>
  <TabItem value="c" label="C">

  ```c
  #include <stdio.h>
  int main(void){
    printf("Olá Mundo\n"); 
    return 0;
  }
  ```

  </TabItem>

  

</Tabs>

Saída na tela:
```
Olá Mundo
```

:::

**Exemplo**  

- Para apresentar a mensagem `Bom dia, José`:


<Tabs groupId="language">
  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

  ```c
  escreva("Bom dia, José");
  ```

  </TabItem>
  <TabItem value="java" label="Java">

  ```javascript
  System.out.println("Bom dia, José");
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ```python
  print("Bom dia, José")
  ```

  </TabItem>
  <TabItem value="c" label="C">

  ```c
  printf("Bom dia, José\n");
  ```

  </TabItem>
</Tabs>

Saída na tela:
```
Bom dia, José
```

**Exercício**
- Desenvolva um algoritmo que apresenta seu nome na saída padrão.

- Para apresentar um valor específico:


<Tabs groupId="language">
<TabItem value="pseudocodigo" label="Pseudocódigo" default>

```c
escreva(18);
```

</TabItem>
<TabItem value="java" label="Java">

```javascript
System.out.println(18);
```

</TabItem>
<TabItem value="python" label="Python">

```python
print(18)
```

</TabItem>
<TabItem value="c" label="C">

```c
printf("%d\n", 18);
```

</TabItem>
</Tabs>

Saída na tela:
```
18
```
<!-- marp --- -->
- Pode-se também apresentar diversos resultados de uma única vez:


<Tabs groupId="language">
<TabItem value="pseudocodigo" label="Pseudocódigo" default>

```c
escreva("A idade mínima deve ser de ", 18, " anos");
```

</TabItem>
<TabItem value="java" label="Java">

```javascript
System.out.println("A idade mínima deve ser de " + 18 + " anos");
```

</TabItem>
<TabItem value="python" label="Python">

```python
print("A idade mínima deve ser de ", 18, " anos")
```

</TabItem>
<TabItem value="c" label="C">

```c
printf("%s %d %s\n", "A idade mínima deve ser de", 18, "anos");
```

</TabItem>
</Tabs>

Saída na tela:
```
A idade mínima deve ser de 18 anos
```

### Uso de armazenamento intermediário

No desenvolvimento de algoritmos, podemos utilizar armazenamento intermediário de valores. Para tal, devemos indicar qual é o **tipo de dado** que deverá ser guardado e um **identificador** desse armazenamento. 

:::info Informação
O uso desse armazenamento é um tópico de grande importância no desenvolvimento de algoritmos. O veremos de forma mais detalhada ao abordarmos tipos primitivos de dados, constantes e variáveis.
:::

**Exemplo**
- Armazenando um valor e apresentando na tela

<Tabs groupId="language">
<TabItem value="pseudocodigo" label="Pseudocódigo" default>

```c
inteiro: altura; //identificador que permite armazenar um número inteiro
altura ← 50;
escreva(altura); //saída: 50
```

</TabItem>
<TabItem value="java" label="Java">

```javascript
int altura;
altura = 50; //identificador que permite armazenar um número inteiro
System.out.println(altura); //saída: 50
```

</TabItem>
<TabItem value="python" label="Python">

```python
altura = 50 #identificador que permite armazenar um número inteiro
print(altura) # saída: 50
```

</TabItem>

<TabItem value="c" label="C">

```c
int altura; //identificador que permite armazenar um número inteiro
altura = 50;
printf("%d", altura); // saída: 50
```

</TabItem>
</Tabs>



Saída na tela:
```
50
```
<!-- marp --- -->
É possível também apresentar diversos valores de uma única vez em uma única saída.

**Exemplo**  

<Tabs groupId="language">
  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

  ```c
  caractere: nome ← "Dunga";
  inteiro: idade ← 35;
  escreva(nome, "tem", idade, "anos de idade.");
  ```

  </TabItem>
  <TabItem value="java" label="Java">

  ```javascript
  String nome = "Dunga";
  int idade = 35;
  System.out.println(nome + " tem " + anos " de idade.");
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ```python
  nome = Dunga
  idade = 35
  print(f"{nome} tem {idade} anos de idade.")
  ```

  </TabItem>

  <TabItem value="c" label="C">

  ```c
  char nome = "Dunga";
  int idade;
  
  idade = 35;
  printf("%s %s %d %s",nome,"tem", idade, "anos de idade.");
  ```

  </TabItem>
</Tabs>

Saída na tela:
```
Dunga tem 35 anos de idade
```

**Exercícios**

1. Desenvolva um algoritmo que mostra na tela a mensagem *Hoje é dia de aula de Algoritmos*.
<!-- marp --- -->
2. Desenvolva um algoritmo que dentro dele possui um armazenamento intermediário de caracteres chamado *mes_ferias_1* e *mes_ferias_2*, onde cada um deve possuir os valores *janeiro* e *julho*. Seu algoritmo deve informar na tela uma mensagem informando que estes são os meses de férias previsto no calendário acadêmico.
<!-- marp --- -->
3. Desenvolva um algoritmo que dentro dele possui os armazenamentos intermediários de caracteres chamado *mes_ferias_1* e *mes_ferias_2*, onde cada um deve possuir os valores *janeiro* e *julho*. Também possui os armazenamentos intermediários *dias_ferias_1* e *dias_ferias_2*, com os conteúdos *30* e *15*, respectivamente. Seu algoritmo deve informar na tela uma mensagem informando que são previstos 30 dias de férias em janeiro e 15 dias de férias em julho.

## Entrada de dados

Para que a entrada de dados possa ser realizado é necessário passar ao algoritmo uma informação adicional, com o identificador em que o valor deverá ser armazenado.

<!-- marp --- -->

Para a entrada de dados pode-se utilizar a seguinte função:

<Tabs groupId='language'>
  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

  ```c
  leia(); //para qualquer tipo de dados
  ```

  </TabItem>
  <TabItem value="java" label="Java">

  Antes de iniciar a leitura de dados, é necessário associar um identificador à entrada.  

  
  ```javascript
  Scanner entrada = new Scanner(System.in); //entrada é um identificador
  ```  

  Em seguida é possível ler o dado desejado utilizando `.next()` ou `.nextInt()`


  ```javascript
  entrada.next(); //para dados do tipo caractere
  ```

  ou 

  ```javascript
  entrada.nextInt(); //para dados do tipo inteiro
  ```


  Finalizada a leitura de dados, deve-se chamar a função `.close()`.

  ```javascript
  entrada.close();
  ```

:::caution Atenção
Para que a função de entrada possa ser utilizada é necessário importar a biblioteca também é necessário importar a biblioteca `Scanner`.

Para tal, é necessário incluir no início do código a linha

```javascript
import java.util.Scanner;
```
:::

:::caution Atenção
O código `Scanner entrada = new Scanner(System.in);` realiza uma associação do identificador `entrada` com a entrada padrão (comumente, o teclado). 

Após a finalização das entradas, é necessário desassociar o identificador, com a função `entrada.close().`

:::


  </TabItem>
  <TabItem value="python" label="Python">

  ```python
  input() # para dados do tipo caractere
  ```
  ou

  ```python
  (int) input() # para dados do tipo inteiro
  ```

  </TabItem>

  <TabItem value="c" label="C">

  ```c
  gets(); // entrada de dados do tipo caractere
  ```
  ou
  ```c
  scanf("%d", &); // entrada de dados do tipo inteiro
  ```

:::caution Atenção
Assim como na função de saída `printf`, para que as funções de entrada `scanf()` e `gets()` possam ser utilizadas também é necessário importar a biblioteca de entrada e saída padrão.
:::

  </TabItem>

</Tabs>

Conhecendo a função que realiza a leitura de dados da entrada padrão, devemos informar qual identificador será responsável por armazenar o dado recebido na entrada.


**Exemplo**
- recebendo valores na entrada e armazenando

<!-- marp --- -->

<Tabs groupId='language'>
  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

  recebendo da entrada um valor do tipo inteiro

  ```c
  inteiro: numero;
  leia(numero); 
  ```

  recebendo da entrada um valor do tipo caractere

  ```c
  caractere: palavra;
  leia(palavra);
  ```

  </TabItem>

  <TabItem value="java" label="Java">

  recebendo da entrada um dado do tipo inteiro:

  ```javascript
  int numero;
  Scanner entrada = new Scanner(System.in);
  numero = entrada.nextInt();
  entrada.close();
  ```

  recebendo da entrada um dado do tipo caractere:
  ```javascript
  String palavra;
  Scanner entrada = new Scanner(System.in);
  palavra = entrada.next();
  entrada.close();
  ```

  </TabItem>

  <TabItem value="python" label="Python">

  recebendo da entrada um dado do tipo inteiro:
  ```python
  numero = (int) input()
  ```

  recebendo da entrada um dado do tipo caractere:
  ```python
  palavra = input()
  ```

  </TabItem>

  <TabItem value="c" label="C">

  recebendo da entrada um dado do tipo inteiro
  ```c
  int numero;
  scanf("%d", &numero); // observe o &
  ```

  recebendo da entrada um dado do tipo caractere
  ```c
  char palavra[100];
  gets(palavra); //perceba que o & não é necessário aqui
  ```

:::caution Atenção
O uso da função `scanf()` requer cuidado ao mencionar o identificador de onde o valor será armazenado. Observe o uso do `&` antes do nome do identificado. Para caracteres com a função `gets()` este sinal não é necessário.

Estas diferenças e porque isto é realizado desta forma será explicado futuramente, quando os conteúdos de vetores e manipulação de cadeias de caracteres forem abordados.
:::


  </TabItem>

</Tabs>

**Exemplo**  
- Solicite ao usuário que digite seu nome

<Tabs groupId='language'>
  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

  ```c showLineNumbers
    //identificadores
    caractere: nome;

    //entrada
    // highlight-next-line
    leia(nome);   //recebe o dado da entrada
  ```

  <details>
  <summary>Código completo</summary>

  ```c showLineNumbers
  inicio;
    //identificadores
    caractere: nome;

    //entrada
    // highlight-next-line
    leia(nome);   //recebe o dado da entrada

  fim.
  ```
  </details>


  </TabItem>
  <TabItem value="java" label="Java">

  ```javascript
  //identificadores
  String nome;

  //entrada
  // highlight-next-line
  nome = entrada.next()   //recebe o dado da entrada
  ```

  <details>
  <summary>Código completo</summary>

  ```javascript
  public class Main{
    public static void main(String args){
      //identificadores
      String nome;
      Scanner entrada;

      //entrada
      entrada = new Scanner(System.in); //associa o objeto à entrada padrão

      // highlight-next-line
      nome = entrada.next()   //recebe o dado da entrada

      entrada.close()         //finaliza a entrada de dados
    }
  }
  ```
  </details>

  
  </TabItem>
  <TabItem value="python" label="Python">

  A entrada de dados é a maneira como o usuário pode inserir dados para dentro do algoritmo. Em Python utilizaremos a função `input()`. 

  ```python showLineNumbers
  nome = input()
  ```

  <details>
  <summary>Código completo</summary>

  ```python
    if __name__ == "main":
      nome = input() #recebe o dado da entrada
  ```
  </details>

  </TabItem>

  <TabItem value="c" label="C">

  ```c
  char nome[100];
  // highlight-next-line
  gets(nome); //recebe o dado da entrada
  ```

  <details>
    <summary>Código completo</summary>

    ```c
    #include <stdio.h>

    int main(){
      char nome[100];
    // highlight-next-line
      gets(nome); //recebe o dado da entrada

      return 0;
    }
    ```
  </details>

  </TabItem>

</Tabs>


**Observação**  

- Perceba que no exemplo, o nome do usuário será armazenado na região de armazenamento identificada como `nome`.

**Exemplo**
- Pergunte ao usuário seu nome e idade. Em seguida, mostre na tela as informações digitadas.

<Tabs groupId="language">
  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

  ```c
  //Identificadores
  caractere nome;
  inteiro idade;

  //Entrada
  escreva("Nome: ");
  leia(nome);
  escreva("Idade: ");
  leia(idade);

  //Saída
  escreva(nome, " tem ", idade, " anos de idade.");

  ```
  <details>
  <summary>Código completo</summary>

  ```c
  inicio

    //Variáveis
    caractere nome;
    inteiro idade;

    //Entrada
    escreva("Nome: ");
    leia(nome);
    escreva("Idade: ");
    leia(idade);

    //Saída
    escreva(nome, " tem ", idade, " anos de idade.");

  fim.
  ```
  </details>
  </TabItem>
  <TabItem value="java" label="Java">

  ```javascript
  //Identificadores
  String nome;
  int idade;

  //Entrada
  System.out.println("Nome: ");
  nome = entrada.next();
  System.out.println("Idade: ");
  idade = entrada.nextInt();

  //Saída
  System.out.prinln(nome + " tem " + idade + " anos de idade.");
  ```

  <details>
  <summary>Código completo</summary>

  ```javascript
  public class Main{
    public static void main(String args){
      //Variáveis
      String nome;
      int idade;

      //Entrada
      Scanner entrada = new Scanner(System.in);

      System.out.println("Nome: ");
      nome = entrada.next();
      System.out.println("Idade: ");
      idade = entrada.nextInt();
      entrada.close()

      //Saída
      System.out.prinln(nome + " tem " + idade + " anos de idade.");
    }
  }
  ```
  </details>


  </TabItem>
  <TabItem value="python" label="Python">

  ```python
  #Entrada
  nome = input("Nome: ")
  idade = input("Idade: ")

  #Saída
  print(f"{nome} tem {idade} anos de idade")
  ```


  <details>
    <summary>Código completo</summary>

    ```python
    if __name__ == "main":
      #Entrada
      nome = input("Nome: ")
      idade = input("Idade: ")

      #Saída
      print(f"{nome} tem {idade} anos de idade")
    ```
  </details>


  </TabItem>

  <TabItem value="c" label="C">

  ```c
  //Variáveis
  char nome[100];
  int idade;

  //Entrada
  gets(nome);
  scanf("%d", &idade)

  //Saída
  printf("%s %s %d %s\n", nome, "tem", idade, "anos de idade")
  ```


  <details>
    <summary>Código completo</summary>

  ```c
  #include<stdio.h>

  int main(void){
    //Variáveis
    char nome[100];
    int idade;

    //Entrada
    gets(nome);
    scanf("%d", &idade)

    //Saída
    printf("%s %s %d %s\n", nome, "tem", idade, "anos de idade")
  }
  ```
  </details>


  </TabItem>
</Tabs>


**Observação**
- No exemplo, o nome do usuário será armazenado no espaço identificado como `nome` e a idade em `idade`.

**Exercícios**  

1. Solicite ao usuário que digite um número. Em seguida, mostre na tela o número digitado.

2. Desenvolva um algoritmo que pergunta ao usuário o nome do usuário, e em seguida responde "Boa noite, `user`", substituindo `user` pelo nome digitado.

3. Faça um algoritmo que pergunta ao usuário a sua idade, e em seguida informa a mensagem "Você tem `X` anos", substituindo `X` pela idade digitada.

