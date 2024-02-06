

# Classes

## Tipos de transmissão

Antes de discutirmos sobre as classes, convém observarmos os diferentes tipos de transmissão.

- *Unicast*: destino único
- *Multicast*: vários destinos
- *Broadcast*: todos os destinos da mesma rede
- *Anycast*: qualquer destino

## Classes de IP

Inicialmente, os endereçamento utilizado no protocolo IP foi planejado para que parte dele representasse a rede e parte representasse máquinas dessa rede.

De forma a saber quantas máquinas são possíveis de incluir em tais redes, foram criadas as **classes** de IP.

Parte do endereço contém a identificação da rede (*netid*) e parte contém a identificação da máquina (*hostid*).

Os bits iniciais do endereço (1º octeto) servem para identificar a classe à qual aquele endereço corresponde.

|Classe| Bits iniciais|intervalo|
|------|-----|-------|
|A|`0`|`0`-`127`|
|B|`10`|`128`-`191`|
|C|`110`|`192`-`223`|
|D|`1110`|`224`-`239`|
|E|`1111`|`240`-`255`|

As classes **A**, **B** e **C** foram projetadas para endereços *unicast*, ou seja, endereçam *hosts*. As classes **D** e **E** são especiais, em que a classe **D** serve para endereços *multicast*, e a classe **E** é destinada para experimentação.

As classes indicam quantos bits devem ser utilizados para *net* e *host*, sendo 8, 16 e 24 para *net* nas classes A, B e C, respectivamente.

|Classe|*netid* total|*netid* ocupado| *netid* livre| *hostid*|Quantidade de endereços por rede|
|------|-------------|---------------|--------------|---------|-----------------------|
|A     |8            |1              |7             |24       |16777216|
|B     |16           |2              |14            |16       |65356|
|C     |24           |3              |21            |8        |256|

Com isto, a quantidade total de endereços para cada classe:

|Classe|End. inicial |End. final       |#*nets*|#*hosts*|
|------|-------------|-----------------|-------|--------|
|A     |`0.0.0.0`    |`127.255.255.255`|128    |16777216|
|B     |`128.0.0.0`  |`191.255.255.255`|16384  |65536   |
|C     |`192.168.0.0`|`223.255.255.255`|2097152|256     |

**Atividade**  
- Preencha a tabela abaixo, informando à qual classe pertence cada end. IP.

|Endereço         |Classe| |Endereço         |Classe|
|:----------------|:-----|-|:----------------|:-----|
|`10.5.2.17`      |      | |`169.106.156.8`  |      |
|`236.147.206.200`|      | |`74.106.81.8`    |      |
|`90.66.96.231`   |      | |`152.30.195.12`  |      |
|`139.167.1.197`  |      | |`80.71.155.218`  |      |
|`59.140.114.24`  |      | |`114.125.143.163`|      |
|`173.250.194.252`|      | |`93.220.139.123` |      |
|`21.67.1.128`    |      | |`178.144.87.213` |      |
|`94.195.201.148` |      | |`15.100.46.149`  |      |
|`155.131.56.190` |      | |`108.85.25.122`  |      |
|`152.176.16.26`  |      | |`218.200.125.215`|      |
|`4.123.228.20`   |      | |`197.156.146.104`|      |
|`181.234.77.174` |      | |`20.221.76.80`   |      |
|`12.31.41.173`   |      | |`49.218.142.228` |      |
|`128.108.254.246`|      | |`130.113.129.90` |      |
|`95.197.130.213` |      | |`22.47.119.201`  |      |
|`80.251.52.150`  |      | |`48.175.151.19`  |      |
|`72.30.67.96`    |      | |`142.29.208.77`  |      |
|`31.35.127.50`   |      | |`137.176.67.109` |      |
|`95.45.99.118`   |      | |`169.21.96.152`  |      |
|`224.143.80.115` |      | |`186.152.105.19` |      |
|`61.224.1.12`    |      | |`13.15.11.184`   |      |

**Exercício**
- Desenvolva uma função que a  partir do end. IP, retorna a classe à qual o endereço pertence.

## Endereços restritos e privados

Os endereços restritos ou privados existem apenas em redes internas, ou seja, não são retransmitidos por roteadores. Estes são definidos pela [RFC1918](https://datatracker.ietf.org/doc/html/rfc1918).

|Rede | Faixa |
|-----|-------|
|10.0.0.0/8    | de 10.0.0.0  a 10.255.255.255 |
|172.16.0.0/12  | de 172.16.0.0 a 172.31.255.255 |
|192.168.0.0/16 | de 192.168.0.0 a 192.168.255.255 |

### Endereços reservados

Alguns endereços são reservados para finalidades pontuais.

|Endereço|Finalidade|
|--------|----------|
|172.0.0.0 / 8 |*loopback* (localhost)|
|169.254.0.0 / 16 |APIPA ( *Automatic Private IP Addressing* - Endereço autoatribuído)|
|0.0.0.0/8 |Endereço de inicialização|
|255.255.255.255 |Broadcast|


### Classe D



### Classe E

Os endereços da classe **E** são destinados para testes utilizando novas tecnologias, e por isso não são atribuídos na Internet. 

## Referências

- STEVENS, W. Richard. TCP/IP illustrated, vol. I: the protocols. Addison Wesley, 1994.

**Outros materiais**  
- [FERNANDEZ, F.L., DUARTE, O.C.M.B. Roteamento IP. Universidade Federal do Rio de Janeiro.](https://www.gta.ufrj.br/grad/99_1/fernando/roteamento/index.htm)  


 

