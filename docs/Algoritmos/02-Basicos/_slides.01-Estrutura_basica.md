---
marp: true
theme: gaia
_class: lead
backgroundColor: #fff
backgroundImage: url('https://marp.app/assets/hero-background.svg')
---

# Algoritmos e Estruturas de Dados
## Estrutura básica

---

# Estrutura básica

A estrutura básica de um algoritmo consiste na delimitação inicial para que um **código** seja executado. Este espaço é importante para para delimitar e informar ao computador qual código deve ser executado inicialmente.

---

  Pseudocódigo
  ```c
  início

    módulo Principal
    //o código deverá ser inserido após início e antes de fim.
    //linhas que se iniciam 
  
    //  com // são consideradas comentários, e 
    //  não são executadas
    fimmódulo;

  fim.
  ```

---

  Java
  ```javascript
  public class Main{

    public static void main(String args){

        //o código deverá ser inserido após { e antes de }.
        //linhas que se iniciam 

        //  com // são consideradas comentários, e 
        //  não são executadas
    }

  }
  ```


---


  Python
  ```python
  if __name__ == "main":
    #o código deverá ser inserido com uma tabulação
    # após a linha com "if __name__ == "main":"

    #linhas que se iniciam 
    #  com # são consideradas comentários, e 
    #  não são executadas
  ```

---

  C
  ```c
  #include<stdio.h>
  
  int main(void){

    //o código deverá ser inserido após { e antes de }.
    //linhas que se iniciam 
    //  com // são consideradas comentários, e 
    //  não são executadas

    return 0;
  }
  ```

---


## Ambiente

A maneira para executar um código que foi desenvolvido utilizando uma linguagem de programação específica, depende das ferramentas utilizadas e do ambiente de desenvolvimento. Neste material, levaremos em conta que o ambiente de desenvolvimento e execução é o Sistema Operacional Linux (Ubuntu) e ambiente de desenvolvimento VSCode com as extensões específicas para a linguagem.

---
## Execução

  Para compilar e executar código Java

  ```bash
  javac <nome do arquivo, com .java> #para compilar
  java <nome do arquivo, sem .java> #para executar
  ```
---

  **Exemplo**
  - Compilando e executando o arquivo `Hello.java`
  ```bash
  javac Hello.java
  java Hello
  ```

---

  - Para executar código Python

  ```bash
  python3 <nome do arquivo, com .py>
  ```

--- 

  **Exemplo**
  - Executando o arquivo `hello.py`  
  
  ```bash
  python3 hello.py
  ```

---

  - Para compilar e executar código C:

  ```bash
  gcc <nome do arquivo, com .c> -o <nome do executável> #para compilar
  ./<nome do executável> #para executar
  ```

---

  **Exemplo**
  - Compilando e executando o arquivo `hello.c`  
  
  ```bash
  gcc hello.c -o hello
  ./hello
  ```

---

### Links
- [Visual Studio Code](https://code.visualstudio.com)
- [Ubuntu](https://ubuntu.com/download)
- [VSCode Extension Pack for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack)
- [VSCode Python Extension](https://marketplace.visualstudio.com/items?itemName=ms-python.python)
- [VSCode C/C++ Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools)

---