

# Endereçamento

Cada interface deve possui um endereço único para identificação, o *Internet address* (IP).

O endereçamento é parte do cabeçalho do protocolo IP, que possui duas versões, IPv4 e IPv6. Ressalta-se que são **protocolos** diferentes da camada de rede.

## IPv4 

No IPv4, o endereço é composto por um valor de 32 bits.

Para representar um endereço IP, a notação utilizada é a *dotted-decimal*, que consiste em utilizar 4 valores decimais separados por ponto. Cada valor consiste em um número de 8 bits (octeto), ou seja, pertence ao intervalo de valores 0 a 255.

**Exemplos**

|Endereço|
|---|
|192.168.1.12|
|10.0.1.50|
|192.128.122.1|
|192.168.0.100|
|179.154.41.4|

 Apesar de serem representados em decimal, sempre são considerados e processados em binário. O endereço é organizado em 4 octetos, onde 1 octeto corresponde a 8 bits.


**Exemplos**  

|  |1º octeto | 2º octeto | 3º octeto| 4º octeto |
|-|---------|----------|---------|----------|
|decimal|192|168|1|12|
|binário|11000000|10101000|00000001|00001100|

## IPv6

O IPv6 será apresentado em detalhes mais adiante.