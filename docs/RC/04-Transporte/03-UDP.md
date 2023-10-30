
# UDP

O UDP (*User Datagram Protocol*) é um protocolo **não** orientado a conexão. Seu funcionamento é bastante simples, quando comparado ao TCP. Basicamente, realiza multiplexação/demultiplexação de pacotes e  veficações de erros simles, entregando os pacotes à camada de rede.

O UDP não é um protocolo confiável, visto que não há qualquer garantia de entrega do pacote ao destino.


## Estrutura

Figura: Cabeçalho do segmento UDP
![UDP_header](https://upload.wikimedia.org/wikipedia/commons/0/0c/UDP_header.png)  
Fonte: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:UDP_header.png)

- Porta de origem
- Porta de destino
- Tamanho do segmento (incluindo cabeçalho), em bytes
- Soma de verificação (*checksum*)
- Dados

**Atividade**  
1. Qual é o tamanho do cabeçalho UDP?
    1. Qual é o tamanho do cabeçalho TCP?
1. Qual é o tamanho máximo de um pacote UDP?


**Exemplo**  
Captura de pacotes de uma conexão UDP, utilizando Netcat e TShark. Observe a *flag* `-u`, indicando que o protocolo UDP deve ser utilizado.
- *Server*:
    ```shell
    nc -u -l 10100
    ```
- *Client*:
    ```shell
    echo 'Aula de redes de computadores' > msg.txt
    nc -u 127.0.0.1 10100 < msg.txt
    ```
- *Sniffer*:
    ```shell
    tshark -i lo host 127.0.0.1 and port 10100 
    ```
    Saída:
    ```
    1 0.000000000    127.0.0.1 → 127.0.0.1    UDP 72 34772 → 10100 Len=30
    ```

- Observe:
    - Portas:
        - 10100: servidor
        - 54519: cliente
    - Tamanho do pacote: 30
    - Quantos pacotes foram capturados?
    
**Observação**  
Na execução do exemplo, utilize diferentes números de portas caso esteja utilizando um ambiente de execução compartilhado.


**Atividade**
- Utilize o cliente Netcat para enviar pacotes TCP e UDP, e compare os resultados.
    - TCP:
    ```shell
    nc 18.228.77.124 10100 < msg.txt
    echo $?
    ```  
    
    - UDP:  
    ```shell
    nc -u 18.228.77.124 10100 < msg.txt
    echo $?
    ```  
    
Quais foram as respostas, e o que elas significam?

**Atividade**  
1. Envie arquivos com diferentes tamanhos, e observe a quantidade de pacotes trafegados
    1. 1 MiB
    1. 10 MiB
    1. 20 MiB
1. Compare a quantidade de pacotes trafegados utilizando TCP e UDP.

# Referências
[POSTEL, J. RFC 768. IETF, 1980](https://tools.ietf.org/html/rfc768)  



