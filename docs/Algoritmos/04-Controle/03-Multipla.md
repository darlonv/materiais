import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Múltipla escolha

Em situações em que precisamos testar diversos valores pontuais, poderíamos utilizar a diversas expressões `se` encadeadas, formando uma seleção encadeada do tipo `se-senão-se`, e testar os possíveis valores.
<!-- --- -->

**Exemplo** 
- A região Sul do Brasil possui três estados. De acordo com o IBGE, cada estado possui uma sigla e um código. Peça ao usuário que digite a sigla do estado, e apresente na tela o nome do estado,  código do estado e em que região do país se encontra. Caso a siga do estado entrada pelo usuário não esteja cadastrada, mostre a mensagem *"Estado ainda não cadastrado no sistema."*.  
<!-- --- -->

:::note Dados

|Sigla do Estado|Código|Estado            |Região|
|---------------|------|------------------|------|
|PR             |41    |Paraná            |Sul   |
|SC             |42    |Santa Catarina    |Sul   |
|RS             |43    |Rio Grande so Sul |Sul   |

Fonte: [IBGE. Códigos dos municípios IBGE.](https://www.ibge.gov.br/explica/codigos-dos-municipios.php)

:::

<!-- --- -->


Uma abordagem para a solução seria testar cada valor de forma encadeada.

<details>
  <summary>Resposta</summary>
<Tabs groupId='language'>

  <TabItem value="pseudocodigo" label="Pseudocódigo">

  ```c
  inicio
  //Variáveis
  inteiro codigo_estado;

  //Entrada
  escreva("Entre com o código do estado: ");
  leia(codigo_estado)

  //Processamento e saída
  se (codigo_estado == 41): //<- Verifica se o estado é Paraná
  então
    início
      escreva("Estado: Paraná - Sigla: PR - Código: 41 - Região: Sul");
    fim;
  senão
    se (codigo_estado == 42): //<- Verifica se o estado é Santa Catarina
    então
      início
        escreva("Estado: Santa Catarina - Sigla: SC - Código: 2 - Região: Sul");
      fim;
    senão
      se (codigo_estado == 43): //<- Verifica se o estado é Paraná
      então
        início
          escreva("Estado: Rio Grande do Sul - Sigla: RS - Código: 43 - Região: Sul");
        fim;
      senão //<- Não restou outra opção
        início
          escreva("Estado ainda não cadastrado no sistema.")
        fim.
  fimse;
fim.
  ```

  </TabItem>
  
  <TabItem value="java" label="Java">

  ```javascript
//Variáveis
int codigo_estado;
Scanner entrada;

//Entrada
System.out.println("Entre com o código do estado: ");
entrada = new Scanner(System.in);
codigo_estado = entrada.nextInt();
entrada.close();

//Processamento e saída
if (codigo_estado == 41 ) //<- Verifica se o estado é Paraná
{
  System.out.println("Estado: Paraná - Sigla: PR - Código: 41 - Região: Sul");
}
else
{
  if (codigo_estado == 42) //<- Verifica se o estado é Santa Catarina
  {
    System.out.println("Estado: Santa Catarina - Sigla: SC - Código: 2 - Região: Sul");
  }
  else
    if (codigo_estado == 43) //<- Verifica se o estado é Paraná
    {
      System.out.println("Estado: Rio Grande do Sul - Sigla: RS - Código: 43 - Região: Sul");
    }
    else //<- Não restou outra opção
    {
      System.out.println("Estado ainda não cadastrado no sistema.");
    }
}
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ```python
  #Variáveis e entrada
  codigo_estado = int(input("Entre com a sigla do estado: "))

  #Processamento e saída
  if codigo_estado == 41: #<- Verifica se o estado é Paraná
      print("Estado: Paraná - Sigla: PR - Código: 41 - Região: Sul")
  else:
    if codigo_estado == 42: #<- Verifica se o estado é Santa Catarina
        print("Estado: Santa Catarina - Sigla: Sc - Código: 42 - Região: Sul")
    else:
      if codigo_estado == 43: #<- Verifica se o estado é Rio Grande do Sul
          print("Estado: Rio Grande do Sul - Sigla: RS - Código: 43 - Região: Sul")
      else: #<- Não restou outra opção
          print("Estado ainda não cadastrado no sistema.")
  ```

  </TabItem>
  <TabItem value="c" label="C">

  ```c
//Variáveis
int codigo_estado;

//Entrada
printf("Entre com o código do estado: ");
scanf("%d", &codigo_estado);

//Processamento e saída
if (codigo_estado == 41 ) //<- Verifica se o estado é Paraná
{
  printf("Estado: Paraná - Sigla: PR - Código: 41 - Região: Sul");
}
else
{
  if (codigo_estado == 42) //<- Verifica se o estado é Santa Catarina
  {
    printf("Estado: Santa Catarina - Sigla: SC - Código: 2 - Região: Sul");
  }
  else
    if (codigo_estado == 43) //<- Verifica se o estado é Paraná
    {
      printf("Estado: Rio Grande do Sul - Sigla: RS - Código: 43 - Região: Sul");
    }
    else //<- Não restou outra opção
    {
      printf("Estado ainda não cadastrado no sistema.");
    }
}
  ```

  </TabItem>
</Tabs>


</details>

<!-- --- -->

Outra forma seria utilizar uma estrutura em que todos os valores fossem testados de uma forma não aninhada, com a estrutura `escolha`.

<!-- --- -->

## Sintaxe

<Tabs groupId='language'>
  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

  ```c
  escolha <variável> //<- variável a ser observada
    caso X: // caso o valor da variável seja X
      //código caso X
    caso Y: // caso o valor da variável seja Y
      //código caso Y
    caso Z: // caso o valor da variável seja Z
      //código caso Z
    caso contrário: //demais casos
      //código demais casos 
  fimescolha;
  ```

  </TabItem>
  <TabItem value="java" label="Java">

  ```js
  switch(<variável>){ //Variável a ser observada
    case X: //Caso o valor da variável seja X
      //Código caso X
      break;
    case Y: //Caso o valor da variável seja Y
      //Código caso Y
      break;
    case Z: //Caso o valor da variável seja Z
      //Código caso Z
      break;
    default: //demais casos
      //Código demais casos
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ```python
  match <variável> : #Variável a ser observada
    #Código caso X
    case X: #Verifica se a variável possui valor X
      #Código caso X
    case Y: #Verifica se a variável possui valor Y
    #Código caso Y
    case X: #Verifica se a variável possui valor Z
      #Código caso Z
    case _: #demais casos
      #Código demais casos
  ```

:::info Informação
A estrutura `match` está disponível em Python a partir da versão 3.10. Em versões anteriores, pode-se obter o mesmo resultado utilizando estruturas `if-elif`.

  ```python
if <variável> == X : #Verifica se a variável possui valor X
  #Código caso X
elif <variável> == Y: #Verifica se a variável possui valor Y
  #Código caso Y
elif <variável> == Z: #Verifica se a variável possui valor Z
  #Código caso Z
else: #demais casos
  #Código demais casos
```

:::

  </TabItem>
  <TabItem value="c" label="C">

  ```c
  switch(<variável>){ //Variável a ser observada (char ou int)
    case X: //Caso o valor da variável seja X
      //Código caso X
      break;
    case Y: //Caso o valor da variável seja Y
      //Código caso Y
      break;
    case Z: //Caso o valor da variável seja Z
      //Código caso Z
      break;
    default: //demais casos
      //Código demais casos
  }
  ```

:::info Informação
Em C, a estrutura `switch-case` opera apenas com dados dos tipos `char` e `int`.
:::

  </TabItem>
</Tabs>

<!-- --- -->

**Exemplo**  
A solução para o exemplo anterior utilizando `escolha` poderia ser da seguinte forma:

<!-- <details>
  <summary>Resposta</summary> -->
<Tabs groupId='language'>

  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

```c
inicio
  //Variáveis
  inteiro codigo_estado;

  //Entrada
  escreva("Entre com o código do estado: ");
  leia(codigo_estado)

  //Processamento e saída
  escolha codigo_estado
    caso 41:
      escreva("Estado: Paraná - Sigla: PR - Código: 41 - Região: Sul");
    caso 42:
      escreva("Estado: Santa Catarina - Sigla: SC - Código: 2 - Região: Sul");
    caso 43:
      escreva("Estado: Rio Grande do Sul - Sigla: RS - Código: 43 - Região: Sul");
    caso contrário:
      escreva("Estado ainda não cadastrado no sistema.");
  fimescolha;
fim.
```

  </TabItem>
  
  <TabItem value="java" label="Java">

```javascript
//Variáveis
int codigo_estado;
Scanner entrada;

//Entrada
System.out.println("Entre com o código do estado: ");
entrada = new Scanner(System.in);
codigo_estado = entrada.nextInt();
entrada.close();

//Processamento e saída
switch(codigo_estado){
  case 41:
    System.out.println("Estado: Paraná - Sigla: PR - Código: 41 - Região: Sul");
    break;
  case 42:
    System.out.println("Estado: Santa Catarina - Sigla: SC - Código: 2 - Região: Sul");
    break;
  case 43:
    System.out.println("Estado: Rio Grande do Sul - Sigla: RS - Código: 43 - Região: Sul");
    break;
  default:
    System.out.println("Estado ainda não cadastrado no sistema.");
}
```

  Em Java, os comandos `break` e `default` são opcionais. Seus significados são:  


  -  `break`: Indica que nenhuma outra opção precisa ser consultada.  
  -  `default`: Esta opção será selecionada caso nenuma das alternativas anteriores seja atingida.  


  </TabItem>
  <TabItem value="python" label="Python">

```python
#Variáveis e entrada
codigo_estado = int(input("Entre com a sigla do estado: "))

#Processamento e saída
match codigo_estado :
  case 41: 
    print("Estado: Paraná - Sigla: PR - Código: 41 - Região: Sul")
  case 42: 
    print("Estado: Santa Catarina - Sigla: Sc - Código: 42 - Região: Sul")
  case 43: 
    print("Estado: Rio Grande do Sul - Sigla: RS - Código: 43 - Região: Sul")
  case _: 
    print("Estado ainda não cadastrado no sistema.")
```

  </TabItem>
  <TabItem value="c" label="C">

  ```c
  //Variáveis
int codigo_estado;

//Entrada
printf("Entre com o código do estado: \n");
scanf("%d", &codigo_estado);

//Processamento e saída
switch(codigo_estado){
  case 41:
    printf("Estado: Paraná - Sigla: PR - Código: 41 - Região: Sul\n");
    break;
  case 42:
    printf("Estado: Santa Catarina - Sigla: SC - Código: 2 - Região: Sul\n");
    break;
  case 43:
    printf("Estado: Rio Grande do Sul - Sigla: RS - Código: 43 - Região: Sul\n");
    break;
  default:
    printf("Estado ainda não cadastrado no sistema.\n");
}
  ```

  Em C, os comandos `break` e `default` são opcionais. Seus significados são:  


  -  `break`: Indica que nenhuma outra opção precisa ser consultada.  
  -  `default`: Esta opção será selecionada caso nenuma das alternativas anteriores seja atingida.  


  </TabItem>
</Tabs>

<!-- --- -->

**Atividades**  
- Amplie a tabela de estados, considerando estados das regiões Sudeste e Centro-Oeste. Além do nome do estado, informe também código do estado, nome da região e código da região.  
- Amplie a tabela de estados, para incluir todos os estados do Brasil. Além do nome do estado, informe também código do estado, nome da região e código da região.  

<!-- --- -->

## Referências
- [Forbellone, André Luiz Villar; Eberspätcher, Henri Frederico. Lógica de programação: a construção de algoritmos e estruturas de dados. 4.ed. São Paulo: Pearson Prentice Hall, 2022.](https://plataforma.bvirtual.com.br/Leitor/Publicacao/323/pdf/)

### Materiais externos
- [IBGE. Códigos dos municípios IBGE.](https://www.ibge.gov.br/explica/codigos-dos-municipios.php)

