import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Estrutura básica

A estrutura básica de um algoritmo consiste na delimitação inicial para que um **código** seja executado. Este espaço é importante para para delimitar e informar ao computador qual código deve ser executado inicialmente.

<!-- marp --- -->

<Tabs groupId='language'>
  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

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

  </TabItem>
  <TabItem value="java" label="Java">

  ```javascript
  public class Main{

    public static void main(String[] args){

        //o código deverá ser inserido após { e antes de }.
        //linhas que se iniciam 

        //  com // são consideradas comentários, e 
        //  não são executadas
    }

  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ```python
  if __name__ == "main":
    #o código deverá ser inserido com uma tabulação
    # após a linha com "if __name__ == "main":"

    #linhas que se iniciam 
    #  com # são consideradas comentários, e 
    #  não são executadas
  ```

  </TabItem>
  <TabItem value="c" label="C">

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

  </TabItem>
</Tabs>

## Ambiente de desenvolvimento e execução

A maneira para executar um código que foi desenvolvido utilizando uma linguagem de programação específica, depende das ferramentas utilizadas e do ambiente de desenvolvimento. Neste material, levaremos em conta que o ambiente de desenvolvimento e execução é o Sistema Operacional Linux (Ubuntu) e ambiente de desenvolvimento VSCode com as extensões específicas para a linguagem.

<!-- marp --- -->

<Tabs groupId='language'>
  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

  Extensões VSCode necessárias:
  <ul>
    <li><a>Não são necessárias extensões.</a></li>
  </ul>


  </TabItem>
  <TabItem value="java" label="Java">

  - Ferramentas necessárias:
    - Compilador Java
    - JVM
  - Extensões VSCode necessárias:
    - [Extension Pack for Java (vscjava.vscode-java-pack)](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack)
  - Para compilar e executar:

  ```bash
  javac <nome do arquivo, com .java> #para compilar
  java <nome do arquivo, sem .java> #para executar
  ```


**Exemplo**

- Compilando e executando o arquivo `Hello.java`

```bash
javac Hello.java
java Hello
```



  </TabItem>
  <TabItem value="python" label="Python">

  - Ferramentas necessárias:
    - Python 3
  - Extensões VSCode necessárias:
    - [Python (ms-python.python)](https://marketplace.visualstudio.com/items?itemName=ms-python.python)

  - Para executar:

  ```bash
  python3 <nome do arquivo, com .py>
  ```

    **Exemplo**
    - Executando o arquivo `hello.py`  
    
    ```bash
    python3 hello.py
    ```




  </TabItem>

  <TabItem value="c" label="C">

  - Ferramentas necessárias:
    - Compilador GCC
  - Extensões VSCode necessárias:
  <ul>
    <li><a href="https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools">C/C++ (ms-vscode.cpptools)</a></li>
  </ul>

  - Para compilar e executar:

  ```bash
  gcc <nome do arquivo, com .c> -o <nome do executável> #para compilar
  ./<nome do executável> #para executar
  ```

    **Exemplo**
    - Compilando e executando o arquivo `hello.c`  
    
    ```bash
    gcc hello.c -o hello
    ./hello
    ```


  </TabItem>

</Tabs>

## Referências

### Outros materiais
- [Visual Studio Code](https://code.visualstudio.com)
- [Ubuntu](https://ubuntu.com/download)
- [VSCode Extension Pack for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack)
- [VSCode Python Extension](https://marketplace.visualstudio.com/items?itemName=ms-python.python)
- [VSCode C/C++ Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools)
