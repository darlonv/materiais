

# Endereçamento

O endereçamento nas redes de computadores serve para identificar de forma única cada dispositivo conectado à rede. Ele permite que os dispositivos comuniquem entre si e troquem dados de forma eficiente. 

## Endereço IP

Um endereço IP (*Internet Protocol* - Protocolo de Internet) é um identificador numérico atribuído a cada dispositivo em uma rede que utiliza o protocolo de Internet para comunicação. Ele permite que os dispositivos se comuniquem entre si em uma rede, identificando de forma exclusiva a localização de cada dispositivo. 

Existem dois tipos principais de endereços IP: IPv4 (Internet Protocol version 4) e IPv6 (Internet Protocol version 6).

Os endereços IP podem ser atribuídos dinamicamente por meio de um servidor DHCP (*Dynamic Host Configuration Protocol*) ou podem ser configurados estática e manualmente.

### IPv4

Um endereço IPv4 é composto por 32 bits divididos em quatro grupos de 8 bits cada. Esses grupos são frequentemente representados em notação decimal separados por pontos. Por exemplo, um endereço IPv4 típico tem o formato "xxx.xxx.xxx.xxx", onde cada "xxx" representa um número decimal entre 0 e 255.

**Exemplo**
- o endereço IPv4 `192.168.0.1` é dividido em quatro grupos de 8 bits. Observe:

| Decimal | Binário      |
|---------|--------------|
| `192`     | `11000000`     |
| `168`     | `10101000`     |
| `0`       | `00000000`     |
| `1`       | `00000001`     |

**Exemplo**
- Endereços IPv4
    - `192.168.0.1`
    - `10.0.0.1`
    - `172.16.0.1`
    - `192.0.2.1`
    - `198.51.100.1`
    - `203.0.113.1`
    - `172.31.255.1`
    - `169.254.0.1`
    - `100.64.0.1`
    - `192.88.99.1`

Os endereços IPv4 são limitados em número devido à sua estrutura de 32 bits, resultando em cerca de 4,3 bilhões de possíveis endereços únicos.

**Exercício**
- Indique se os endereços abaixo são representações corretas ou incorretas de endereços IPv4:
    - `192.168.1.1`
    - `256.0.0.1`
    - `172.16.256.1`
    - `10.10.10.10`
    - `300.200.100.50`
    - `169.254.0.1`
    - `192.168.0.256`
    - `8.8.8.8`
    - `172.31.0.1`
    - `0.0.0.0`
    - `192.168.0.1.1`
    - `172.16.0.1.1`
    - `10.0.0.1.1`
    - `192.168.1.1.1`
    - `172.31.0.1.1`

<!-- marp hide -->

<details>
  <summary>Resposta</summary>

| Endereço IPv4        | Validade  | Motivo da Invalidade                |
|----------------------|-----------|-------------------------------------|
| `192.168.1.1`        | Correto   |                                     |
| `256.0.0.1`          | Incorreto | Valor no primeiro octeto excede 255 |
| `172.16.256.1`       | Incorreto | Valor no terceiro octeto excede 255 |
| `10.10.10.10`        | Correto   |                                     |
| `300.200.100.50`     | Incorreto | Valor no primeiro octeto excede 255 |
| `169.254.0.1`        | Correto   |                                     |
| `192.168.0.256`      | Incorreto | Valor no último octeto excede 255   |
| `8.8.8.8`            | Correto   |                                     |
| `172.31.0.1`         | Correto   |                                     |
| `0.0.0.0`            | Correto   |                                     |
| `192.168.0.1.1`      | Incorreto | Representação possui octeto extra   |
| `172.16.0.1.1`       | Incorreto | Representação possui octeto extra   |
| `10.0.0.1.1`         | Incorreto | Representação possui octeto extra   |
| `192.168.1.1.1`      | Incorreto | Representação possui octeto extra   |
| `172.31.0.1.1`       | Incorreto | Representação possui octeto extra   |
</details>

<!-- marp /hide -->

### IPv6

Um endereço IPv6 é composto por 128 bits, o que permite uma quantidade muito maior de endereços do que o IPv4. Um endereço IPv6 é frequentemente representado em notação hexadecimal, dividido em oito grupos de 16 bits cada, separados por dois pontos. Cada grupo é representado por quatro dígitos hexadecimais, resultando em um endereço IPv6 típico com o formato `xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx`.



**Exemplo**
-  um endereço IPv6 válido pode ser:

```
2001:0db8:85a3:0000:0000:8a2e:0370:7334
```

Onde cada grupo de quatro dígitos hexadecimais representa 16 bits. O IPv6 também permite algumas simplificações, como remover zeros à esquerda em cada grupo e substituir sequências de zeros consecutivos por `::`. Por exemplo, o endereço acima pode ser simplificado para:

```
2001:db8:85a3::8a2e:370:7334
```

**Exemplo**
- Endereços IPv6
    - `2001:0db8:85a3:0000:0000:8a2e:0370:7334`
    - `2001:0db8:0:0:0:0:1428:57ab`
    - `2001:0db8:0000:0042:0000:8a2e:0370:7334`
    - `2001:0db8:0:1:1:1:1:1`
    - `2001:0db8:1234:ffff:ffff:ffff:ffff:ffff`
    - `2001:0db8::1`
    - `2001:db8:abcd:0012:0000:0000:0000:0001`
    - `2001:db8::1`
    - `2001:0db8:ffff:ffff:ffff:ffff:ffff:ffff`
    - `2001:0db8:85a3::8a2e:0370:7334`

## Portas

As portas são essenciais para o funcionamento da comunicação entre diferentes serviços e aplicativos em uma rede de computadores. Elas ajudam a garantir que os dados sejam direcionados corretamente para os processos e serviços apropriados em um dispositivo de rede.


Em redes de computadores, uma **porta** é um mecanismo usado para identificar processos e serviços em um dispositivo de rede. Elas possibilitam que vários serviços e aplicações possam operar em um mesmo dispositivo, sendo acessados de forma distinta.

Cada porta é associada a um número de 16 bits (variando de `0` a `65535`) e é usado para direcionar o tráfego de dados para um serviço específico ou processo em um computador ou outro dispositivo de rede. Quando um dispositivo envia dados para outro dispositivo em uma rede, ele especifica não apenas o endereço IP do destino, mas também a porta à qual deseja se conectar.

Por exemplo, quando você acessa um site através de um navegador da web, o navegador estabelece uma conexão com o servidor web do site usando a porta padrão para HTTP, que é a porta 80. Da mesma forma, serviços como e-mail, FTP, SSH, entre outros, têm portas específicas associadas a eles.


## Endereço MAC

O endereço MAC (*Media Access Control* - Controle de Acesso à Mídia) é uma identificação única e fixa atribuída a cada placa de rede de um dispositivo, utilizada para comunicação em uma rede local (LAN).

Sua representação consiste em seis pares de caracteres separados por dois pontos, hífens ou nada. Cada par de caracteres representa um byte (8 bits) do endereço MAC.

**Exemplo**
- Representação de endereços MAC
    - `01:23:45:67:89:ab`
    - `01-23-45-67-89-ab`
    - `0123456789ab`

É um identificador exclusivo atribuído a cada interface de rede de um dispositivo de rede. Essa identificação é gravada na placa de rede durante a fabricação e não pode ser alterada, sendo única para cada dispositivo.

**Exemplo**
- Endereços MAC
    - `00:1A:2B:3C:4D:5E`
    - `08:00:27:AB:CD:EF`
    - `2C:33:7A:9F:BE:56`
    - `A1:B2:C3:D4:E5:F6`
    - `5C:D9:8A:71:23:4B`
    - `F0:9C:76:58:21:3D`
    - `3E:6F:8D:2A:BC:59`
    - `D8:5E:BA:04:17:9F`
    - `7A:FF:2D:68:E1:40`
    - `9B:24:06:13:87:A5`


## Referências

