import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Expressões

- Faça um programa que pergunta um número ao usuário, e em seguida mostra o antecessor e o sucessor desse número.  

<!-- marp hide -->
<details>
  <summary>Resposta</summary>
<Tabs groupId='language'>
  <TabItem value="portugol" label="Portugol" default>

  ```c
inicio;
//variaveis
inteiro valor;
inteiro antecessor, sucessor;

//entrada
escreva("Digite um número: ");
leia(valor);

//processamento
antecessor = valor -1;
sucessor   = valor +1

//saida
escreva("O antecessor de ", valor, " é: ", antecessor);
escreva("O sucessor de ", valor, " é:", sucessor);

fim;
  ```

  </TabItem>
  <TabItem value="java" label="Java">

  ```c
//Variáveis
int valor;
int antecessor, sucessor;
Scanner entrada;

//Entrada
System.out.println("Digite um número: ");
entrada = new Scanner(System.in);
valor = entrada.nextInt();
entrada.close();

//Processamento
antecessor = valor -1;
sucessor = valor +1;

//Saída
System.out.printf("O antecessor de %d é %d\n", valor, antecessor);
System.out.printf("O sucessor de %d é %d\n", valor, sucessor);
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ```python
#Entrada
print('Digite um número')
valor = input()
valor = int(valor)

#Processamento
antecessor = valor -1
sucessor = valor +1

#Saída
print(f'O antecessor de {valor} é {antecessor}', )
print(f'O sucessor de {valor} é {sucessor}', )
  ```

  </TabItem>
</Tabs>
</details>

<!-- marp /hide -->

<!-- marp --- -->
1. Faça um programa que pergunta o nome do usuário, e em seguida mostra a frase "Boa tarde" seguida do nome do usuário.  
<!-- marp --- -->
1. Pergunte um número ao usuário, e mostre o valor desse número ao cubo.
<!-- marp --- -->
1. Pergunte três valores ao usuário, que correspondem às horas, minutos e segundos do horário atual. Calcule quantos segundos se passaram desde 00:00 horas.  
(Adaptado de MENEZES 2019, pg. 72)
<!-- marp --- -->
1. Pergunte um número ao usuário, e em seguida mostre a raiz quadrada e a raiz cúbica desse número.
<!-- marp --- -->
1. Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, assim como a quantidade de dias pelos quais o carro foi alugado. Calcule o preço a pagar, sabendo que o carro custa R\$ 60,00 por dia e R\$ 0,15 por km rodado.  
(Fonte: MENEZES 2019, pg. 72)
<!-- marp --- -->
1. Escreva um programa para ler as dimensões de um retângulo, com o tamanho da base ($b$) e da altura ($h$). Calcule o mostre o perímetro ($p$) e área ($a$) desse retângulo.
$$
p = 2(b+h)\\
a = bh
$$  
<!-- marp --- -->
1. Pergunte ao usuário o valor do raio ($r$) de um círculo, e em seguida mostre o perímetro ($p$) e a área ($a$) desse círculo.
$$
p = 2\pi r\\
a = \pi r^2
$$
<!-- marp --- -->
1. Faça  um  algoritmo  que  leia  três  notas ($N_1$, $N_2$ e $N_3$)  de  um  aluno,  calcule  e  escreva  a  média  final  deste  aluno. Considerar que a média ($M$) é ponderada e que o peso das notas é 2, 3 e 5. A equação para o cálculo da média final é: 
$$
M = \frac{N_1 \times 2 + N_2 \times 3 + N_3 \times 5}{2+3+5}
$$  
(Fonte: CARVALHO, 2007)
<!-- marp --- -->
1. Faça um programa que solicite o preço de uma mercadoria e o percentual de desconto. Exiba o valor do desconto e o preço a pagar.  
(Fonte: MENEZES 2019, pg. 72)
<!-- marp --- -->
1. Faça um programa que calcule o aumento de um salário. Ele deve solicitar o valor do salário e a porcentagem de aumento. Exiba o valor do aumento e do novo salário.  
(Fonte: MENEZES 2019, pg. 72)
<!-- marp --- -->
1. Peça ao usuário que informe o valor de um boleto, o percentual de juros cobrado e o número de dias em atraso. O programa deve calcular o valor total a ser pago, utilizando a fórmula  
$$
Total = Valor + Valor \times \frac{Juros}{100} \times Dias
$$  
(Adaptado de LOPES, 2011)
<!-- marp --- -->
1. Considere que houve uma eleição, na qual três candidatos concorreram ($C_a$, $C_b$ e $C_c$). O usuário deve informar quantos votos cada candidato recebeu e quantidade de votos brancos e nulos. O programa deve calcular e mostrar a quantidade total de eleitores, o percentual de votos que cada candidato recebeu, o percentual de votos brancos e o percentual de votos nulos. O cálculo dos percentuais é dado em relação ao total de votos da eleição.  
(Adaptado de LOPES, 2011)
<!-- marp --- -->
1. O  custo  de  um  carro  novo  ao  consumidor  é  a  soma  do  custo  de  fábrica  com a  porcentagem  do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja  de  28%  e  os  impostos  de  45%,  desenvolva  um  algoritmo que receba como entrada o valor do custo  de  fábrica  de  um  carro, e partir de disso calcule e mostre o custo final do carro ao consumidor.  
(Adaptado de CARVALHO, 2007)
<!-- marp --- -->
1. Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, mais  uma  comissão  fixa  de 5% sobre o valor de todos os carros vendidos pelo funcionário. Escreva um algoritmo que receba como entrada o valor total de suas vendas e seu salário fixo, e em seguida calcula e apresenta o salário final do vendedor.  
  (Adaptado de CARVALHO, 2007).

1. Suponha que `A`, `B` e `C` são variáveis de tipo inteiro, com valores iguais a $5$, $10$ e $-8$, respectivamente, e uma variável real `D`, com valor de $1.5$. Quais serão os resultados das expressões aritméticas a seguir?  
<Tabs groupId='language'>
  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

  `2 * A % 3 - C`  
  `(sqrt(-2 * C) / 4)`  
  `((20 / 3) / 3) + pow(2, 8) / 2`  
  `(30 % 4 * pow(3, 3)) * (-1)`  
  `pow(-C, 2) + (D * 10) / A`  
  `sqrt(pow(A, B/A)) + C * D`  

  </TabItem>
  <TabItem value="java" label="Java">

  `2 * A % 3 - C`  
  `Math.sqrt(-2 * C) / 4`  
  `((20 / 3) / 3) + Math.pow(2, 8) / 2`  
  `(30 % 4 * Math.pow(3, 3)) * (-1)`  
  `Math.pow(-C, 2) + (D * 10) / A`  
  `Math.sqrt(Math.pow(A, B/A)) + C * D`  

  </TabItem>
  <TabItem value="python" label="Python">

  `2 * A % 3 - C`  
  `sqrt(-2 * C) / 4`  
  `((20 / 3) / 3) + 2**8 / 2`  
  `(30 % 4 * 3**3) * (-1)`  
  `-C**2 + (D * 10) / A`  
  `sqrt(A**(B/A)) + C * D`  

  </TabItem>

  <TabItem value="c" label="C">

  `2 * A % 3 - C`  
  `sqrt(-2 * C) / 4`  
  `((20.0 / 3) / 3) + 2**8 / 2`  
  `(30 % 4 * 3**3) * (-1)`  
  `pow(-C, 2) + (d * 10) / A`  
  `sqrt(pow(A, B / A)) + C * D`  

  </TabItem>
</Tabs>
1. Sendo P, Q e R variáveis de tipo inteiro, com valores iguais a 2, 3 e 12, respectivamente, e
uma variável real S, com valor de 4.5, quais os valores fornecidos por cada uma das expressões
aritméticas abaixo?
<Tabs groupId='language'>
  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

  `((100 * Q) / P + R)`  
  `S % (P - 1) - Q * R`  
  `(P * R) % 5 - Q / 2`  
  `1 + rad( pot(P, 3) + 3 * R + 5)`  
  `1 + ((R + P) / pot (Q, 2))`  
  `rad(rad(16)) * pot(2, 3)` 

  </TabItem>
  <TabItem value="java" label="Java">

  `(int) ((100 * Q) / P + R)`  
  `(int) S % (P - 1) - Q * R`  
  `(P * R) % 5 - Q / 2`  
  `1 + Math.sqrt( Math.pow(P, 3) + 3 * R + 5)`  
  `1 + (int)((R + P) / Math.pow (Q, 2))`  
  `Math.sqrt(Math.sqrt(16)) * Math.pow(2, 3)` 

  </TabItem>
  <TabItem value="python" label="Python">

  `(int) ((100 * Q) / P + R)`  
  `(int) S % (P - 1) - Q * R`  
  `(P * R) % 5 - Q / 2`  
  `1 + sqrt( P**3 + 3 * R + 5)`  
  `1 + (int)((R + P) / Q**2)`  
  `sqrt(sqrt(16)) * 2**3` 

  </TabItem>

  <TabItem value="c" label="C">

  `(int) ((100 * Q) / P + R)`  
  `(int) S % (P - 1) - Q * R`  
  `(P * R) % 5 - Q / 2`  
  `1 + sqrt( pow(P, 3) + 3 * R + 5)`  
  `1 + (int)((R + P) / pow (Q, 2))`  
  `sqrt(sqrt(16)) * pow(2, 3)`  

  </TabItem>
</Tabs>

1. Considere as seguintes atribuições, R = 2, S = 5, T = -1, X = - 3, Y = -1 e Z = 0, resolver as
expressões abaixo:
<Tabs groupId='language'>
  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

  `(R >=5) ou (T > Z) e (X - Y + R > 3 * Z)`  
  `(T + 3 >= 4) e !(3 * R/2 < S * 3)`  
  `(X == 2) ou (Y = 1) e ((Z == 0) ou (R > 3) e (S < 10))`  
  `(R != S) ou !(sqrt(R) < sqrt(X)) e (8327 * X * S * Z == 0)` 

  </TabItem>
  <TabItem value="java" label="Java">

  `(R >=5) || (T > Z) && (X - Y + R > 3 * Z)`  
  `(T + 3 >= 4) && !(3 * R/2 < S * 3)`  
  `(X == 2) || (Y = 1) && ((Z == 0) || (R > 3) && (S < 10))`  
  `(R != S) || !(sqrt(R) < sqrt(X)) && (8327 * X * S * Z == 0)` 

  </TabItem>
  <TabItem value="python" label="Python">

  `(R >=5) or (T > Z) and (X - Y + R > 3 * Z)`  
  `(T + 3 >= 4) and not(3 * R/2 < S * 3)`  
  `(X == 2) or (Y == 1) and ((Z == 0) or (R > 3) and (S < 10))`  
  `(R != S) or not sqrt(R) < sqrt(X) and (8327 * X * S * Z == 0)`  

  </TabItem>

  <TabItem value="c" label="C">

  `(R >=5) || (T > Z) && (X - Y + R > 3 * Z)`  
  `(T + 3 >= 4) && !(3 * R/2 < S * 3)`  
  `(X == 2) || (Y = 1) && ((Z == 0) || (R > 3) && (S < 10))`  
  `(R != S) || !(sqrt(R) < sqrt(X)) && (8327 * X * S * Z == 0)`  

  </TabItem>
</Tabs>

1. Resolva as expressões abaixo, apresentando o resultado final. Considere o valor de `PI` como $3,14$:
<Tabs groupId='language'>
  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

  `(18 / 3 / 2 - 1) * 5 - 4 - (2 + 3 + 5) / 2`  
  `26.0 / 6.0 / 2.0`  
  `7 % 4 - 8 / (3 + 1)`  
  `(5 != 2) ou não(7 > 4) e (4 <= PI)`  
  `((18 / 3) == 5) e sqrt(100) == 11`  
  `(12 >= 5 * 2) e (4 * 5 > 24 / 6)`  
  `(2 >= 5) e não(6 <= 2 * 3) ou (10 != 10)`  

  </TabItem>
  <TabItem value="java" label="Java">

  `(18 / 3 / 2 - 1) * 5 - 4 - (2 + 3 + 5) / 2`  
  `26.0 / 6.0 / 2.0`  
  `7 % 4 - 8 / (3 + 1)`  
  `(5 != 2) || !(7 > 4) && (4 <= PI)`  
  `((18 / 3) == 5) && sqrt(100) == 11`  
  `(12 >= 5 * 2) && (4 * 5 > 24 / 6)`  
  `(2 >= 5) && !(6 <= 2 * 3) || (10 != 10)`  

  </TabItem>
  <TabItem value="python" label="Python">

  `(18 / 3 / 2 - 1) * 5 - 4 - (2 + 3 + 5) / 2`  
  `26.0 / 6.0 / 2.0`  
  `7 % 4 - 8 / (3 + 1)`  
  `(5 != 2) or not(7 > 4) and (4 <= PI)`  
  `((18 / 3) == 5) and sqrt(100) == 11`  
  `(12 >= 5 * 2) and (4 * 5 > 24 / 6)`  
  `(2 >= 5) and not(6 <= 2 * 3) or (10 != 10)`   

  </TabItem>

  <TabItem value="c" label="C">

  `(18 / 3 / 2 - 1) * 5 - 4 - (2 + 3 + 5) / 2`  
  `26.0 / 6.0 / 2.0`  
  `7 % 4 - 8 / (3 + 1)`  
  `(5 != 2) || !(7 > 4) && (4 <= PI)`  
  `((18 / 3) == 5) && sqrt(100) == 11`  
  `(12 >= 5 * 2) && (4 * 5 > 24 / 6)`  
  `(2 >= 5) && !(6 <= 2 * 3) || (10 != 10)`  

  </TabItem>
</Tabs>

1. Resolva as expressões a seguir, quanto a seu valor lógico.
<Tabs groupId='language'>
  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

  `2 * 4 == 24 / 3`  
  `15 % 4 < 19 % 6`  
  `3 * 5 <= pot(3, 2) / 0.5`  
  `2 + 8 % 7 >= 3 * 6 - 15`  

  </TabItem>
  <TabItem value="java" label="Java">

  `2 * 4 == 24 / 3`  
  `15 % 4 < 19 % 6`  
  `3 * 5 <= Math.pow(3, 2) / 0.5`  
  `2 + 8 % 7 >= 3 * 6 - 15`   

  </TabItem>
  <TabItem value="python" label="Python">

  `2 * 4 == 24 / 3`  
  `15 % 4 < 19 % 6`  
  `3 * 5 <= 3**2 / 0.5`  
  `2 + 8 % 7 >= 3 * 6 - 15`   

  </TabItem>

  <TabItem value="c" label="C">

  `2 * 4 == 24 / 3`  
  `15 % 4 < 19 % 6`  
  `3 * 5 <= pow(3, 2) / 0.5`  
  `2 + 8 % 7 >= 3 * 6 - 15`  

  </TabItem>
</Tabs>

1. Resolva as expressões a seguir, quanto a seu valor lógico.
<Tabs groupId='language'>
  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

  `2 < 5 ou 15 / 3 == 5`  
  `falso ou 20 / (18 / 3) != (21 / 3) / 2`  

  </TabItem>
  <TabItem value="java" label="Java">

  `2 < 5 || 15 / 3 == 5`  
  `false || 20.0 / (18.0 / 3) != (21.0 / 3) / 2`  

  </TabItem>
  <TabItem value="python" label="Python">

  `2 < 5 or 15 / 3 == 5`  
  `False or 20 / (18 / 3) != (21 / 3) / 2`   

  </TabItem>

  <TabItem value="c" label="C">

  `2 < 5 || 15 / 3 == 5`  
  `0 || 20.0 / (18.0 / 3) != (21.0 / 3) / 2`  

  </TabItem>
</Tabs>

1. Considerando as variáveis numéricas X, Y e Z, contendo os valores 2, 5 e 9, respectivamente, a
variável literal NOME, contendo o literal "MARIA"; e a variável lógica SIM, contendo o valor
lógico Verdadeiro (V), observar os resultados obtidos das expressões lógicas a seguir.
<Tabs groupId='language'>
  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

  `X + Y > Z e NOME=="MARIA"`  
  `SIM e Y >= X`  
  `não SIM e Z / Y + 1 == X`  
  `NOME=="JORGE" e SIM ou X**2 < Z + 10`  

  </TabItem>
  <TabItem value="java" label="Java">

  `X + Y > Z && NOME=="MARIA"`  
  `SIM || Y >= X`  
  `!SIM && Z / Y + 1 == X`  
  `NOME=="JORGE" && SIM || Math.pow(X, 2) < Z + 10` 

  </TabItem>
  <TabItem value="python" label="Python">

  `X + Y > Z and NOME=="MARIA"`  
  `SIM or Y >= X`  
  `not SIM and Z / Y + 1 == X`  
  `NOME=="JORGE" and SIM or X**2 < Z + 10`  

  </TabItem>

  <TabItem value="c" label="C">

  `X + Y > Z && strcmp(NOME,"MARIA")`  
  `SIM || Y >= X`  
  `!SIM && (int) Z / Y + 1 == X`  
  `strcmp(NOME,"JORGE") && SIM || pow(X, 2) < Z + 10`  

  </TabItem>
</Tabs>

1. Considerando A e C variáveis inteiras, contendo os valores, 1 e 8 e, B como uma variável real, com
o valor 4.5; e TESTE variável lógica contendo o valor verdadeiro (V), determinar os resultados
obtidos da avaliação das seguintes expressões:
   1. `A = = 1 && TESTE`
   1. `A + C = = sqrt(81) || TESTE != F`
   1. `!TESTE || C % 2 = = 0.5`
   1. `C < 10 || TESTE`
   1. `TESTE && !TESTE`
   1. `pow(A, 2) + sqrt(A + C) = = 3 && (A + B > 13)`

1. Determine os resultados na avaliação das expressões lógicas seguintes, sabendo que A, B, C
contêm, respectivamente, 2, 7, 3.5, e que existe uma variável lógica L cujo valor é F.
   1. `B = = A * C && (L || V)`
   1. `B > A || B = = pow(A, A)`
   1. `L && (int) B / A >= C || !(A <=C)`
   1. `!L || V && sqrt(A + B) >= C`
   1. `B / A = = C || B / A != C`
   1. `L || pow(B, A) <= C * 10 + A * B`
   1. `!V || pow(3, 2) / 3 < 15 - 35 % 7`
   1. `!(5 != 10 / 2) || V && 2 - 5 > 5 - 2 || V`
   1. `pow(2, 4) != 4 + 2 || 2 + 3 * 5 / 3 % 5 > 0`

1. Sabendo que A = 5, B = 4, C = 3 e D = 6, informe se as expressões abaixo são verdadeiras ou
falsas.
   1. `(A > C) && (C <= D)`
   1. `(A + B) > 10 || (A + B) = (C + D)`
   1. `(A - C) = 0 || !(D >= 99) && (B + 2) = 6`
   1. `(A >= C) && (B >= C)`

1. Sabendo que A = 3, B = 7 e C = 4, informe se as expressões abaixo são verdadeiras ou falsas.
   1. `(A + C) > B`
   1. `B >= (A + 2)`
   1. `C = (B - A)`
   1. `(B + A) <= C`
   1. `(C + A) > B`

<!-- marp hide -->

## Exercícios externos

### Beecrowd
1. [Beecrowd 1003 - Soma Simples](https://www.beecrowd.com.br/judge/pt/problems/view/1003)
1. [Beecrowd 1004 - Produto Simples](https://www.beecrowd.com.br/judge/pt/problems/view/1004)
1. [Beecrowd 1007 - Diferença](https://www.beecrowd.com.br/judge/pt/problems/view/1007)
1. [Beecrowd 3055 - Nota Esquecida ](https://www.beecrowd.com.br/judge/pt/problems/view/3055)
1. [Beecrowd 2786 - Piso da Escola ](https://www.beecrowd.com.br/judge/pt/problems/view/2786)
1. [Beecrowd 1021 - Notas e Moedas ](https://www.beecrowd.com.br/judge/pt/problems/view/1021)

<!-- marp /hide -->

## Referências
MENEZES, N. N. C. Introdução à programação com Python: algoritmos e lógica de programação para iniciantes. 3.ed. São Paulo: Novatec, 2019.

**Outras referências**  

[CARVALHO, F.P. Lógica de programação - Algoritmos: Notas de aula. FIT. Taquara, 2007 ](https://fit.faccat.br/~fpereira/apostilas/exerc_resp_alg_mar2007.pdf)  
[LOPES, A. Algoritmos: Notas de aula. Mossoró: IFRN, 2011](http://docente.ifrn.edu.br/abrahaolopes/semestre-2012.1/1.2411.1v-fundamentos-de-logica-e-algoritmos/lista-de-exercicios-2-operadores-matematicos/at_download/file)

  

