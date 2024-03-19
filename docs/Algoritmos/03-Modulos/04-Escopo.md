import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Escopo de variáveis

Chamamos de **escopo** ao espaço em que determinada variável pode ser utilizada. Comumente, o escopo pode ser **local** ou **global**.

## Variáveis locais

Uma variável é considerada **local** quando esta existe apenas em um módulo específico.

**Exemplo**

<Tabs groupId='language'>
<TabItem value="pseudocodigo" label="Pseudocódigo" default>

```c
escreva("Olá Mundo");
```

</TabItem>
<TabItem value="java" label="Java">

```javascript
public static void funcaoA(){
    //variáveis declaradas dentro da função
    int valor; 
    valor = 10;
    System.out.println("Valor na funcao A (antes)  : " + valor);
    funcaoB();
    System.out.println("Valor na funcao A (depois) :" + valor);
}

public static void funcaoB(){
    //variáveis declaradas dentro da função
    int valor;
    valor = 20;
    System.out.println("Valor na funcao B: " + valor);
}

public static void main(String[] args){
    funcaoA();
}
```

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

Observe que dentro das funções as variáveis possuem o mesmo identificador. Porém, como cada variável pertence ao módulo, estas são variáveis **diferentes**, ou seja, ocupam locais diferentes na memória.  

Chamamos de **escopo** à área em que a variável existem. Em escopos diferentes, variáveis locais podem utilizar os mesmos nomes. Como estão em escopos diferentes são **variáveis diferentes**.

**Exemplo**

<Tabs groupId='language'>
  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

  ```c
  inicio
    modulo media3Valores(inteiro: a, real: b, real: c)
        //variáveis
        inteiro soma;
        real media;

        //processamento
        soma = a+b+c;
        media = soma/3;

        //retorno
        retorne media;
    fimmodulo;

    //variáveis e entrada
    inteiro: x, y, z;
    escreva("Entre com três valores: ");
    leia(x); leia(y); leia(z);

    escreva("A média é ", media3Valores(x,y,z))

  fim.
  ```

  </TabItem>
  <TabItem value="java" label="Java">

```javascript
public static float media3Valores(int a, int b, int c){
  //variáveis
  int soma;
  float media;

  //processamento
  soma = a+b+c;
  media = (float) soma/3;

  //retorno
  return media;
}
  
public static void main(String[] args){
  //variáveis e entrada
  int x,y,z;

  entradaAbrir();
  System.out.println("Entre com três valores: ");
  x = lerInt("X: ");
  y = lerInt("Y: ");
  z = lerInt("Z: ");
  entradaFechar();

  //chamada ao método e saída
  System.out.println("A média é " + media3Valores(x,y,z));
}
```

  </TabItem>
  <TabItem value="python" label="Python">

  ```python
    def media3Valores(a, b, c)
        #processamento
        soma = a+b+c
        media = soma/3

        #retorno
        return media

    #variáveis e entrada
    print("Entre com três valores: ")
    x, y, z = lerInt("X: "), lerInt("Y: "), lerInt("Z: ")

    print("A média é ", media3Valores(x,y,z))
  ```

  </TabItem>
</Tabs>

Observe que as variáveis `a`, `b`, `c`, `soma` e `media` existem **apenas** dentro do módulo `media3valores`. Com isto, dizemos que o **escopo** destas variáveis é **local** à função `media3Valores`.

Acessar estas variáveis fora de seu escopo ocasiona em um erro.

**Exemplo**
<Tabs groupId='language'>
  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

  ```c
  inicio
    modulo media3Valores(inteiro: a, real: b, real: c)
        //variáveis
        inteiro soma;
        real media;

        //processamento
        soma = a+b+c;
        media = soma/3;

        //retorno
        retorne media;
    fimmodulo;

    //variáveis
    inteiro: x, y, z;
    escreva("Entre com três valores: ");
    leia(x); leia(y); leia(z);

    escreva("A média é ", media3Valores(x,y,z));

    //erro aqui
    //highlight-next-line
    escreva("A soma dos valores é ", soma);//soma não existe neste escopo

  fim.
  ```

  </TabItem>
  <TabItem value="java" label="Java">

```javascript
public static float media3Valores(int a, int b, int c){
  //variáveis
  int soma;
  float media;

  //processamento
  soma = a+b+c;
  media = (float) soma/3;

  //retorno
  return media;
}

public static void main(String[] args){
  //variáveis e entrada
  int x,y,z;

  entradaAbrir();
  System.out.println("Entre com três valores: ");
  x = lerInt("X: ");
  y = lerInt("Y: ");
  z = lerInt("Z: ");
  entradaFechar();

  //chamada à função e saída
  System.out.println("A média é " + media3Valores(x,y,z));

  //erro aqui
  //highlight-next-line
  System.out.println("A soma dos valores é " + soma);//soma não existe neste escopo
}
```

  </TabItem>
  <TabItem value="python" label="Python">

  ```python
  print("Olá Mundo")
  ```

  </TabItem>
</Tabs>

### Parâmetros de funções

Os parâmetros de funções são também variáveis locais.

**Exemplo**  

<Tabs groupId='language'>
<TabItem value="pseudocodigo" label="Pseudocódigo" default>

```c
escreva("Olá Mundo");
```

</TabItem>
<TabItem value="java" label="Java">

```javascript
public static void funcaoA(int valor){ //Parâmetros de funções são variáveis locais
        System.out.println("Valor na funcao A (antes)  : " + valor);
        funcaoB(valor +1);
        System.out.println("Valor na funcao A (depois) :" + valor);
    }

    public static void funcaoB(int valor){ //Parâmetros de funções são variáveis locais
        System.out.println("Valor na funcao B (antes)  : " + valor);
        valor++;
        System.out.println("Valor na funcao B (depois) : " + valor);
    }

    public static void main(String[] args){
        funcaoA(10);
    }
```

</TabItem>
<TabItem value="python" label="Python">

```python
print("Olá Mundo")
```

</TabItem>
</Tabs>



## Variáveis globais

Aa variáveis **globais** são aquelas que podem ser acessadas por todos, e portanto, são **acessíveis** pelos diversos módulos.

Para definir uma variável como global, basta declará-la fora do módulo.

<Tabs groupId='language'>
<TabItem value="pseudocodigo" label="Pseudocódigo" default>

```c
escreva("Olá Mundo");
```

</TabItem>
<TabItem value="java" label="Java">

```javascript
//variáveis globais
static int var_global; //<- A variável é definida fora das funções

public static void varGlobalSetar(int valor){
    var_global = valor;
}

public static void varGlobalIncrementar(){
    var_global++;
}

public static void varGlobalMostrar(){
    System.out.println(var_global);
}

public static void main(String[] args){

    varGlobalSetar(10);
    varGlobalIncrementar();
    varGlobalMostrar();
    varGlobalIncrementar();
    varGlobalMostrar();
}
```

</TabItem>
<TabItem value="python" label="Python">

```python
print("Olá Mundo")
```

</TabItem>
</Tabs>

:::caution Variáveis globais
Variáveis globais são um recurso muito poderoso no desenvolvimento de algoritmos. Porém, devem ser utilizados com cautela. O uso de variáveis globais pode dificultar a leitura do código, bem como levar a inconsistências de estados de variáveis.
:::

O ideal de programação é a organização em módulos de forma que as variáveis sejam sempre pertences ao módulo, ou seja, variáveis locais. Uma boa prática é sempre realizar a interação com funções utilizando parâmetros e retornos.

