---
marp: true
theme: gaia
_class: lead
backgroundColor: #fff
backgroundImage: url('https://marp.app/assets/hero-background.svg')
---

# Algoritmos e Estruturas de dados
## Linguagem de programação

---

# Linguagem de programação

Uma **linguagem de programação** é um conjunto de funções específicas e bem definidas, com as quais é possível desenvolver um **algoritmo**.

---

# Linguagem de programação

Chamamos de **código** a um algoritmo desenvolvido em uma linguagem de programação.

---

**Atividade**  

- Um homem precisa atravessar um rio com um barco que possui capacidade de transportar apenas ele mesmo e uma de suas três cargas, que são: um lobo, um bode e uma caixa de alfafa. Indique as ações necessárias para que o homem consiga atravessar o rio sem perder suas cargas. Algumas regras devem ser sempre respeitadas: o lobo não pode ficar sozinho com o bode, o bode não pode ficar sozinho com a alfafa. 
    - Desenvolva um algoritmo para a solução desse problema.

---

**Atividade**  

Resolva o problema anterior utilizando apenas a função `atravessar(p)`
    - onde `p`, é o passageiro ou carga do barco, que podem ser `lobo`, `bode`, `alfafa` ou `ninguém`;
    - a função `atravessar(p)` leva o barco de um lado a outro, partindo do lado em que o barco está.

---

**Atividade**  

Elabore um algoritmo que mova três discos de uma Torre de Hanói, que consiste em três hastes (A, B e C), uma das quais serve de suporte para três discos de tamanhos diferentes (1, 2 e 3), os menores sobre os maiores. É possível mover um disco de cada vez para qualquer haste, porém nunca deve ser colocado um disco maior sobre um menor. O objetivo é transferir os três discos para outra haste. No exercício, considere que os discos a serem movimentados estão inicialmente na haste A e devem ser movidos para a haste C.  

---

![Torre de Hanói 3 discos](https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Linalg_towers_of_hanoi_1.png/800px-Linalg_towers_of_hanoi_1.png)  
Imagem: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Linalg_towers_of_hanoi_1.png)  

---

**Atividade**  

Resolva o problema anterior utilizando a função `movimentar(de, para)`, que movimenta o disco que está no topo da haste `de` e o coloca no topo da haste `para`. Apenas o disco que está no topo da haste de origem é movimentado.  

---

Resolva o problema da Torre de Hanói, considerando **4 discos**, utilizando a função `movimentar(de, para)`.  

![Torre de Hanói](https://upload.wikimedia.org/wikipedia/commons/0/07/Tower_of_Hanoi.jpeg)  
Imagem: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Linalg_towers_of_hanoi_1.png)  

---

