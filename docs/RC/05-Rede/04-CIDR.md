

# CIDR

Ao observar as classes de IPs, percebe-se que a forma como elas são projetadas não é possível que cada máquina ligada à internet possua um único endereço. 

Neste ponto, convém observarmos que um endereço IP pode ser das seguintes categorias:

- Endereço de rede: este é o primeiro endereço IP possível em uma determinada rede, e não pode ser atribuído a um *host*. Este também é dito ser o nome da rede.
- Endereço de *host*: endereço de uma máquina em uma rede.
- Endereço de *broadcast*: endereço utilizado para se comunicar com todas as máquinas de uma rede simultaneamente. É o último endereço de IP possível em uma rede.

## Sub-redes

Uma sub-rede é uma ilha de comunicação isolada, um conjuntos de *hosts* que entre si comunicam-se diretamente. Para a comunicação com uma outra sub-rede, é necessário um roteador para interconectar tais redes.

Vale observar que um endereço IP é atribuído a cada **interface** dos dispositivos, e se um roteador interconecta várias sub-redes, ele pode possuir várias interfaces, e consequentemente, vários endereços IP.

## CIDR
Um mecanismo para trabalhar com redes de maneira interna, onde deve ser especificado **quantos bits** do endereço devem ser reservados para a redes e quantos devem ser reservados para *hosts* é o *Classless Inter-Domain Routing* (roteamento inter domínio sem classes), o CIDR, especificado nos RFCs [1517](https://datatracker.ietf.org/doc/html/rfc1517), [1518](https://datatracker.ietf.org/doc/html/rfc1518), [1519](https://datatracker.ietf.org/doc/html/rfc1519) e [1520](https://datatracker.ietf.org/doc/html/rfc1520).

O endereçamento utilizando CIDR, consiste em uma informação adicional chamada **máscara** de sub-rede, que pode ser representada de diferentes maneiras:
- após o endereço, separado por /  

**Exemplo**  
```
10.1.1.1/24
```

Nesta notação o número logo após a / corresponde ao **número de bits** dedicados à rede.

    
- No formato *dotted-decimal*  

**Exemplo**  
```
255.255.255.0
```

Nesta notação, os bits da máscara referentes a cada octeto são convertidos para a base decimal.
    
- No formato binário

**Exemplo**  
```
11111111.11111111.11111111.00000000
```
    
Repare que nos exemplos acima, a máscara de sub-rede é a mesma, o que altera é apenas sua representação.

## *Default gateway*

O *Gateway* é um *host* com função de estabelecer comunicação entre diferentes redes, comumente sendo um roteador.

Em resumo, máquinas que estão na mesma sub-rede conseguem comunicar-se diretamente, sem intermediários. Já a comunicação entre diferentes sub-redes precisa passar por um *gateway*. O *gateway default* é a máquina que deve ser acessada como intermediário, caso o destino não esteja na mesma sub-rede. O endereço IP do *gateway* é uma informação adicional, que faz parte da definição de rotas de comunicação.

```
192      .168    .10      .10 (IP)
255      .255    .255     .0  (MR) /24
11000000.10101000.00001010.00001010 (IP)
11111111.11111111.11111111.00000000 (MR)
```

```
Endereço da rede:
11000000.1010000.00001010.00000000 = 192.168.10.0
```

```
Endereço de broadcast:
11000000.10101000.00001010.00001010 (IP)
11111111.11111111.11111111.00000000 (MR)

11000000.10101000.00001010.00001010 (IP)
00000000.00000000.00000000.11111111 (~MR)

11000000.10101000.00001010.11111111 = 192.168.10.255 (Bcast)
```

```
Endereço da máquina:
00000000.00000000.00000000.00001010   = 0.0.0.10
```

```
192      .168    .10      .10 (IP)
255      .255    .0       .0  (MR) /16
11000000.10101000.00001010.00001010 (IP)
11111111.11111111.00000000.00000000 (MR)
```

```
Endereço IP: 32
192.168.10.10/24

Mascara /24
    Redes possíveis: 2^24 =  16777216
    Endereços na rede: 2^(32-24) = 2^8 = 256
    Endereços de host: 2^(32-24)-2 = 2^8-2
```

## Materiais *online*
[IP Subnet Calculator](http://www.subnet-calculator.com/subnet.php?)  
[Network Calculators](http://www.subnetmask.info)  


## Referências

[KUROSE, Jim; ROSS, Keith W. Redes de computadores e a internet: uma abordagem top-down. 6.ed. São Paulo: Pearson, 2013. ISBN 9788581436777.](https://plataforma.bvirtual.com.br/Leitor/Publicacao/3843/pdf/23?code=opaQM91XXDo3M6f51IIiU5X7T6DUUY4tnUbUN9g9xAn0nY6qeBM0WLTVwycNe9XtrqzhJL34gWxykS9MrPGJQA==) (Link biblioteca online)

STEVENS, W. Richard. TCP/IP illustrated, vol. I: the protocols. Addison Wesley, 1994.

**Outros materiais**  

[IP Subnet Calculator](http://www.subnet-calculator.com/subnet.php?)  
[Network Calculators](http://www.subnetmask.info)  

<!-- **Licenças**

[Ícones. *Designed by Freepik from Flaticon*](https://www.flaticon.com/packs/cloud-computing-network-3?k=1600883307690)   -->



 
