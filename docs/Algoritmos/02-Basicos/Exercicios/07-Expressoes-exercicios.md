import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Expressões

- Faça um programa que pergunta um número ao usuário, e em seguida mostra o antecessor e o sucessor desse número.  

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
System.out.println("O antecessor de " + valor + " é " + antecessor);
System.out.println("O sucessor de "   + valor + " é " + sucessor);
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

1. Faça um programa que pergunta o nome do usuário, e em seguida mostra a frase "Boa tarde" seguida do nome do usuário.  

1. Pergunte um número ao usuário, e mostre o valor desse número ao cubo.  

1. Pergunte três valores ao usuário, que correspondem às horas, minutos e segundos do horário atual. Calcule quantos segundos se passaram desde 00:00 horas.  
(Adaptado de MENEZES 2019, pg. 72)  

1. Pergunte um número ao usuário, e em seguida mostre a raiz quadrada e a raiz cúbica desse número.  

1. Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, assim como a quantidade de dias pelos quais o carro foi alugado. Calcule o preço a pagar, sabendo que o carro custa R\$ 60,00 por dia e R\$ 0,15 por km rodado.  
(Fonte: MENEZES 2019, pg. 72)

1. Escreva um programa para ler as dimensões de um retângulo, com o tamanho da base ($b$) e da altura ($h$). Calcule o mostre o perímetro ($p$) e área ($a$) desse retângulo.
$$
p = 2(b+h)\\
a = bh
$$  

1. Pergunte ao usuário o valor do raio ($r$) de um círculo, e em seguida mostre o perímetro ($p$) e a área ($a$) desse círculo.
$$
p = 2\pi r\\
a = \pi r^2
$$

1. Faça  um  algoritmo  que  leia  três  notas ($N_1$, $N_2$ e $N_3$)  de  um  aluno,  calcule  e  escreva  a  média  final  deste  aluno. Considerar que a média ($M$) é ponderada e que o peso das notas é 2, 3 e 5. A equação para o cálculo da média final é: 
$$
M = \frac{N_1 \times 2 + N_2 \times 3 + N_3 \times 5}{2+3+5}
$$  
(Fonte: CARVALHO, 2007)

1. Faça um programa que solicite o preço de uma mercadoria e o percentual de desconto. Exiba o valor do desconto e o preço a pagar.  
(Fonte: MENEZES 2019, pg. 72)
  
1. Faça um programa que calcule o aumento de um salário. Ele deve solicitar o valor do salário e a porcentagem de aumento. Exiba o valor do aumento e do novo salário.  
(Fonte: MENEZES 2019, pg. 72)

1. Peça ao usuário que informe o valor de um boleto, o percentual de juros cobrado e o número de dias em atraso. O programa deve calcular o valor total a ser pago, utilizando a fórmula  
$$
Total = Valor + Valor \times \frac{Juros}{100} \times Dias
$$  
(Adaptado de LOPES, 2011)

1. Considere que houve uma eleição, na qual três candidatos concorreram ($C_a$, $C_b$ e $C_c$). O usuário deve informar quantos votos cada candidato recebeu e quantidade de votos brancos e nulos. O programa deve calcular e mostrar a quantidade total de eleitores, o percentual de votos que cada candidato recebeu, o percentual de votos brancos e o percentual de votos nulos. O cálculo dos percentuais é dado em relação ao total de votos da eleição.  
(Adaptado de LOPES, 2011)

1. O  custo  de  um  carro  novo  ao  consumidor  é  a  soma  do  custo  de  fábrica  com a  porcentagem  do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja  de  28%  e  os  impostos  de  45%,  desenvolva  um  algoritmo que receba como entrada o valor do custo  de  fábrica  de  um  carro, e partir de disso calcule e mostre o custo final do carro ao consumidor.  
(Adaptado de CARVALHO, 2007)

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

  `((100 * Q) / P + R)`  
  `S % (P - 1) - Q * R`  
  `(P * R) % 5 - Q / 2`  
  `1 + Math.sqrt( Math.pow(P, 3) + 3 * R + 5)`  
  `1 + (int)((R + P) / Math.pow (Q, 2))`  
  `Math.sqrt(Math.sqrt(16)) * Math.pow(2, 3)` 

  </TabItem>
  <TabItem value="python" label="Python">

  `((100 * Q) / P + R)`  
  `S % (P - 1) - Q * R`  
  `(P * R) % 5 - Q / 2`  
  `1 + sqrt( P**3 + 3 * R + 5)`  
  `1 + ((R + P) / Q**2)`  
  `sqrt(sqrt(16)) * 2**3` 

  </TabItem>

  <TabItem value="c" label="C">

  `((100 * Q) / P + R)`  
  `S % (P - 1) - Q * R`  
  `(P * R) % 5 - Q / 2`  
  `1 + sqrt( pow(P, 3) + 3 * R + 5)`  
  `1 + ((R + P) / pow (Q, 2))`  
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
  `(X == 2) || (Y == 1) && ((Z == 0) || (R > 3) && (S < 10))`  
  `(R != S) || !(Math.sqrt(R) < Math.sqrt(X)) && (8327 * X * S * Z == 0)` 

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
  `((18 / 3) == 5) && Math.sqrt(100) == 11`  
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

1. Considerando A e C variáveis inteiras, contendo os valores, $1$ e $8$ e, B como uma variável real, com o valor $4.5$ e TESTE variável lógica contendo o valor verdadeiro (V), determinar os resultados obtidos da avaliação das seguintes expressões:
<Tabs groupId='language'>
  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

  `A == 1 e TESTE`  
  `A + C == rad(81) ou TESTE != falso`  
  `não TESTE ou C % 2 == 0.5`  
  `C < 10 ou TESTE`  
  `TESTE e não TESTE`  
  `pot(A, 2) + rad(A + C) == 3 e (A + B > 13)` 

  </TabItem>
  <TabItem value="java" label="Java">

  `A == 1 && TESTE`  
  `A + C == Math.sqrt(81) || TESTE != false`  
  `!TESTE || C % 2 == 0.5`  
  `C < 10 || TESTE`  
  `TESTE && !TESTE`  
  `Math.pow(A, 2) + Math.sqrt(A + C) == 3 && (A + B > 13)`  

  </TabItem>
  <TabItem value="python" label="Python">

  `A == 1 and TESTE`  
  `A + C == sqrt(81) or TESTE != False`  
  `not TESTE or C % 2 == 0.5`  
  `C < 10 or TESTE`  
  `TESTE and not TESTE`  
  `pow(A, 2) + sqrt(A + C) == 3 and (A + B > 13)`  

  </TabItem>

  <TabItem value="c" label="C">

  `A == 1 && TESTE`  
  `A + C == sqrt(81) || TESTE != 0`  
  `!TESTE || C % 2 == 0.5`  
  `C < 10 || TESTE`  
  `TESTE && !TESTE`  
  `pow(A, 2) + sqrt(A + C) == 3 && (A + B > 13)`  

  </TabItem>
</Tabs>

1. Determine os resultados na avaliação das expressões lógicas seguintes, sabendo que A, B, C
contêm, respectivamente, 2, 7, 3.5, e que existe uma variável lógica L cujo valor é F.
<Tabs groupId='language'>
  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

  `B == A * C e (L or verdadeiro)`  
  `B > A ou B == pot(A, A)`  
  `L e B / A >= C ou não(A <=C)`  
  `não L ou verdadeiro e rad(A + B) >= C`  
  `B / A == C ou B / A != C`  
  `L ou pot(B, A) <= C * 10 + A * B`  
  `não verdadeiro ou pot(3, 2) / 3 < 15 - 35 % 7`  
  `não (5 != 10 / 2) or 1 e 2 - 5 > 5 - 2 ou verdadeiro`  
  `pot(2, 4) != 4 + 2 or 2 + 3 * 5 / 3 % 5 > 0`

  </TabItem>
  <TabItem value="java" label="Java">

  `B == A * C && (L || true)`  
  `B > A || B == Math.pow(A, A)`  
  `L && (int) B / A >= C || !(A <=C)`  
  `!L || true && Math.sqrt(A + B) >= C`  
  `B / A == C || B / A != C`  
  `L || Math.pow(B, A) <= C * 10 + A * B`  
  `!true || Math.pow(3, 2) / 3 < 15 - 35 % 7`  
  `!(5 != 10 / 2) || true && 2 - 5 > 5 - 2 || true`  
  `Math.pow(2, 4) != 4 + 2 || 2 + 3 * 5 / 3 % 5 > 0` 

  </TabItem>
  <TabItem value="python" label="Python">

  `B == A * C and (L or True)`  
  `B > A or B == pow(A, A)`  
  `L and B / A >= C or not(A <=C)`  
  `not L or True and sqrt(A + B) >= C`  
  `B / A == C or B / A != C`  
  `L or pow(B, A) <= C * 10 + A * B`  
  `not True or pow(3, 2) / 3 < 15 - 35 % 7`  
  `not (5 != 10 / 2) or True and 2 - 5 > 5 - 2 or True`  
  `pow(2, 4) != 4 + 2 or 2 + 3 * 5 / 3 % 5 > 0` 

  </TabItem>

  <TabItem value="c" label="C">

  `B == A * C && (L || true)`  
  `B > A || B == pow(A, A)`  
  `L && (int) B / A >= C || !(A <=C)`  
  `!L || true && sqrt(A + B) >= C`  
  `B / A == C || B / A != C`  
  `L || pow(B, A) <= C * 10 + A * B`  
  `!true || pow(3, 2) / 3 < 15 - 35 % 7`  
  `!(5 != 10 / 2) || true && 2 - 5 > 5 - 2 || true`  
  `pow(2, 4) != 4 + 2 || 2 + 3 * 5 / 3 % 5 > 0`  

  </TabItem>
</Tabs>

1. Sabendo que A = 5, B = 4, C = 3 e D = 6, informe se as expressões abaixo são verdadeiras ou
falsas.
<Tabs groupId='language'>
  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

  `(A > C) e (C <= D)`  
  `(A + B) > 10 ou (A + B) == (C + D)`  
  `(A - C) == 0 ou não (D >= 99) e (B + 2) == 6`  
  `(A >= C) e (B >= C)` 

  </TabItem>
  <TabItem value="java" label="Java">

  `(A > C) && (C <= D)`  
  `(A + B) > 10 || (A + B) == (C + D)`  
  `(A - C) == 0 || !(D >= 99) && (B + 2) == 6`  
  `(A >= C) && (B >= C)` 

  </TabItem>
  <TabItem value="python" label="Python">

  `(A > C) and (C <= D)`  
  `(A + B) > 10 or (A + B) == (C + D)`  
  `(A - C) == 0 or not (D >= 99) and (B + 2) == 6`  
  `(A >= C) and (B >= C)`  

  </TabItem>

  <TabItem value="c" label="C">

  `(A > C) && (C <= D)`  
  `(A + B) > 10 || (A + B) == (C + D))`  
  `(A - C) == 0 || !(D >= 99) && (B + 2) == 6)`  
  `(A >= C) && (B >= C))`  

  </TabItem>
</Tabs>

1. Sabendo que A = 3, B = 7 e C = 4, informe se as expressões abaixo são verdadeiras ou falsas.
<Tabs groupId='language'>
  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

  `(A + C) > B`  
  `B >= (A + 2)`  
  `C == (B - A)`  
  `(B + A) <= C`  
  `(C + A) > B`  

  </TabItem>
  <TabItem value="java" label="Java">

  `(A + C) > B`  
  `B >= (A + 2)`  
  `C == (B - A)`  
  `(B + A) <= C`  
  `(C + A) > B`  

  </TabItem>
  <TabItem value="python" label="Python">

  `(A + C) > B`  
  `B >= (A + 2)`  
  `C == (B - A)`  
  `(B + A) <= C`  
  `(C + A) > B`  

  </TabItem>

  <TabItem value="c" label="C">

  `(A + C) > B`  
  `B >= (A + 2)`  
  `C == (B - A)`  
  `(B + A) <= C`  
  `(C + A) > B`  

  </TabItem>
</Tabs>


1. Elabore um programa que leia a altura de um andar do prédio e quantos andares o prédio possui. Calcule e mostre a altura do prédio.

1. Desenvolva um programa que leia um valor. Em seguida, deve ser mostrada a parte inteira da raiz quadrada do número lido.

1. Faça um programa que calcule a médio do peso de uma família que possui 5 pessoas.

### Testes de mesa

1. Analise os valores que estão armazenados em cada uma das variáveis, após a execução de cada instrução. Prencha com "?" nos lugares em que o valor da variável não é conhecido.

<Tabs groupId='language'>
  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

```c
```

  </TabItem>
  <TabItem value="java" label="Java">

```javascript
public class Main{
  public static void main () {
                          //  a   |    b   |    c   |    x   |
      float a , b ;       //      |        |        |        | 
      int c , x ;         //      |        |        |        | 
      a = 6.0;            //      |        |        |        | 
      b = a / 2;          //      |        |        |        | 
      c = 11;             //      |        |        |        | 
      x = (int) c / 4;    //      |        |        |        | 
      c = c % 2;          //      |        |        |        | 
      b = 5.4;            //      |        |        |        | 
      c = c + 1;          //      |        |        |        | 
      a = b + 2;          //      |        |        |        | 
  }
}
``` 

  </TabItem>
  <TabItem value="python" label="Python">

```python
if __name__ == "__main__":
                        #  a   |    b   |    c   |    x   |
    a = 6.0             #      |        |        |        | 
    b = a / 2           #      |        |        |        | 
    c = 11              #      |        |        |        | 
    x = int(c/4)        #      |        |        |        | 
    c = c % 2           #      |        |        |        | 
    b = 5.4             #      |        |        |        | 
    c = c + 1           #      |        |        |        | 
    a = b + 2           #      |        |        |        | 

``` 

  </TabItem>

  <TabItem value="c" label="C">

```c
# include < stdio .h > 

int main () {           //   a  |    b   |    c   |    x   |
    float a , b ;       //      |        |        |        | 
    int c , x ;         //      |        |        |        | 
    a = 6.0;            //      |        |        |        | 
    b = a / 2;          //      |        |        |        | 
    c = 11;             //      |        |        |        | 
    x = ( int ) c / 4;  //      |        |        |        | 
    c = c % 2;          //      |        |        |        | 
    b = 5.4;            //      |        |        |        | 
    c = c + 1;          //      |        |        |        | 
    a = b + 2;          //      |        |        |        | 

    return 0;
}
``` 

  </TabItem>
</Tabs>

1. Indique os valores armazenados em cada variável, após executar cada uma das instruções

<Tabs groupId='language'>
  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

```c
```

  </TabItem>
  <TabItem value="java" label="Java">

```javascript
public class Main{
  public static void main () {
                        //   q  |    w   |    r   |    ex  |
    float q, w, r ;     //      |        |        |        | 
    int ex ;            //      |        |        |        | 
    q = 10;             //      |        |        |        | 
    q = 10 + 30;        //      |        |        |        | 
    w = -1;             //      |        |        |        | 
    w = w + q;          //      |        |        |        | 
    q = q % w;          //      |        |        |        | 
    ex = 2 * q / w;     //      |        |        |        | 
    r = 0;              //      |        |        |        | 
    r = r + 1;          //      |        |        |        | 
    r = r + 1;          //      |        |        |        | 

  }
}
``` 

  </TabItem>
  <TabItem value="python" label="Python">

```python
if __name__ == "__main__":
                        #   q  |    w   |    r   |    ex  |
    q = 10;             #      |        |        |        | 
    q = 10 + 30;        #      |        |        |        | 
    w = -1;             #      |        |        |        | 
    w = w + q;          #      |        |        |        | 
    q = q % w;          #      |        |        |        | 
    ex = 2 * q / w;     #      |        |        |        | 
    r = 0;              #      |        |        |        | 
    r = r + 1;          #      |        |        |        | 
    r = r + 1;          #      |        |        |        | 
``` 

  </TabItem>

  <TabItem value="c" label="C">

```c
# include < stdio .h > 

int main () {           //   q  |    w   |    r   |    ex  |
    float q, w, r ;     //      |        |        |        | 
    int ex ;            //      |        |        |        | 
    q = 10;             //      |        |        |        | 
    q = 10 + 30;        //      |        |        |        | 
    w = -1;             //      |        |        |        | 
    w = w + q;          //      |        |        |        | 
    q = q % w;          //      |        |        |        | 
    ex = 2 * q / w;     //      |        |        |        | 
    r = 0;              //      |        |        |        | 
    r = r + 1;          //      |        |        |        | 
    r = r + 1;          //      |        |        |        | 

    return 0;
}
``` 

  </TabItem>
</Tabs>

### Matemática

1. Elabore um programa para calcular o valor de $y$ em uma equação e segundo grau. O usuário deve informar quais são os valores para $a$, $b$, $c$ e $x$. Uma equação de segundo grau é definida pela fórmula:
$$
y = ax^2 + bx + c
$$

1. Desenvolva um programa para calcular as raízes de uma equação de segundo grau. As raízes de uma equação do segundo grau podem ser obtidas por meio da fórmula de [Bháskara](https://pt.wikipedia.org/wiki/Bhaskara_II):
$$
x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}
$$

1. Faça um algoritmo para calcular a distância entre dois pontos $A$ e $B$ em um plano cartesiano. O ponto $A$ possui as coordenadas $(x_1, y_1)$ e o ponto $B$ possui as coordenadas $(x_1, y_2)$. A distância $d$ entre os pontos $A$ e $B$ é dada pela seguinte fórmula:
$$
d = \sqrt{(x_2-x_2)^2+(y_2-y_2)^2}
$$

1. A partir de um ângulo expresso em graus ($\degree$), converta o valor do ângulo de graus para radianos ($rad$). Sabe-se que $\pi\ rad = 180\degree$ ([Vídeo: Convertendo de graus para radianos](https://www.youtube.com/watch?v=41S62_F5fl8)).

1. Calcule as médias definidas a seguir para os valores reais $a$, $b$, $c$ e $d$, e o inteiro $n=4$ .
  - Média Aritmética:
    $$
    m_a = \frac{a+b+c+d}{n}
    $$
  - Média Harmônica:
    $$
    m_h = \frac{n}{\frac{1}{a}+\frac{1}{b}+\frac{1}{c}+\frac{1}{d}}
    $$
  - Média Geométrica:
    $$
    m_g = \sqrt[n]{a*b*c*d}
    $$
  - Média Quadrática:
    $$
    m_q = \sqrt{\frac{a^2+b^2+c^2+d^2}{n}}
    $$
1. Desenvolva um programa para converter o valor de uma temperatura em graus Celsius ($C$) para graus Fahrenheit ($F$). Para essa conversão, temos a seguinte fórmula:
$$
F = \frac{9}{5}*C + 32
$$

1. Elabore um algorimo para converter o valor de uma temperatura expressa em graus Celsius ($C$) para Kelvin ($K$). Para tal, utilize a seguinte fórmula:
$$
K = C + 273.15
$$

## Desafios

1. Desenvolva um algoritmo que recebe como entrada informações da hora e minuto inicial e final da partida de um determinado jogo. Com esses dados, informe a duração total do jogo, em horas e minutos (Obs: Para simplificação do problema, você pode considerar que o jogo sempre começa e termina no mesmo dia).

1. Desenvolva um algoritmo que recebe como entrada informações da hora e minuto inicial e final da partida de um determinado jogo. Com esses dados, informe a duração total do jogo, em horas e minutos. Considere que a duração de uma partida nunca será maior ou igual que 24 horas.



## Exercícios externos

### Beecrowd
1. [Beecrowd 1003 - Soma Simples](https://www.beecrowd.com.br/judge/pt/problems/view/1003)
1. [Beecrowd 1004 - Produto Simples](https://www.beecrowd.com.br/judge/pt/problems/view/1004)
1. [Beecrowd 1007 - Diferença](https://www.beecrowd.com.br/judge/pt/problems/view/1007)
1. [Beecrowd 3055 - Nota Esquecida ](https://www.beecrowd.com.br/judge/pt/problems/view/3055)
1. [Beecrowd 2786 - Piso da Escola ](https://www.beecrowd.com.br/judge/pt/problems/view/2786)
1. [Beecrowd 1021 - Notas e Moedas ](https://www.beecrowd.com.br/judge/pt/problems/view/1021)



## Referências
MENEZES, N. N. C. Introdução à programação com Python: algoritmos e lógica de programação para iniciantes. 3.ed. São Paulo: Novatec, 2019.

**Outras referências**  

[CARVALHO, F.P. Lógica de programação - Algoritmos: Notas de aula. FIT. Taquara, 2007 ](https://fit.faccat.br/~fpereira/apostilas/exerc_resp_alg_mar2007.pdf)  
[LOPES, A. Algoritmos: Notas de aula. Mossoró: IFRN, 2011](http://docente.ifrn.edu.br/abrahaolopes/semestre-2012.1/1.2411.1v-fundamentos-de-logica-e-algoritmos/lista-de-exercicios-2-operadores-matematicos/at_download/file)

  

