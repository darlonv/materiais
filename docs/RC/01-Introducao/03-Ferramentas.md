

# Ferramentas básicas

## `ifconfig`

A ferramenta ifconfig é uma utilidade de linha de comando encontrada em sistemas operacionais Unix-like, como Linux e macOS. Ela é usada para configurar e exibir informações sobre interfaces de rede presentes no sistema.

O termo `ifconfig` é uma abreviação de *interface configuration* (configuração de interface). 

<!-- marp --- -->

**Atividade**
- Execute no terminal:
```bash
ifconfig
```

<!-- marp --- -->

Ao ser executada no terminal, a ferramenta `ifconfig` exibe uma lista de todas as interfaces de rede disponíveis no sistema, junto com informações detalhadas sobre cada uma delas, incluindo:

- Endereço IP atribuído à interface
- Máscara de sub-rede
- Endereço MAC da interface
- Estatísticas de transmissão e recebimento de pacotes de rede
- Estado da interface (ativo/inativo)

<!-- marp --- -->

Além de exibir informações, a ferramenta ifconfig também pode ser usada para configurar parâmetros de rede, como atribuir um endereço IP estático a uma interface, ativar ou desativar uma interface, alterar configurações de roteamento, entre outras operações relacionadas à configuração de redes.

<!-- marp --- -->

No entanto, em sistemas mais modernos, como algumas distribuições Linux mais recentes, a ferramenta `ifconfig` está sendo gradualmente substituída pela ferramenta `ip`, que oferece funcionalidades mais avançadas e uma sintaxe mais consistente.

**Atividade**
- Execute no terminal:
```bash
ip addr show
```

## `ping`


O software `ping` é uma ferramenta de diagnóstico de rede amplamente utilizada para verificar a conectividade entre dois dispositivos em uma rede IP. Ele envia mensagens para um *host* específico e aguarda por respostas de retorno. Essas respostas indicam se o *host* de destino está acessível e qual é o tempo de resposta da comunicação.

<!-- marp --- -->

O ping é comumente usado para testar a conectividade da rede e para diagnosticar problemas de conectividade, como latência, perda de pacotes ou falhas de roteamento. É uma ferramenta simples, porém poderosa, que está disponível em quase todos os sistemas operacionais modernos, incluindo Windows, macOS e Linux.

<!-- marp --- -->

Ao executar o comando `ping`, geralmente é especificado o endereço IP ou o nome de *host* do destino que deseja testar. O `ping` então envia pacotes de solicitação para esse destino e exibe as respostas recebidas, junto com informações sobre a latência (geralmente medida em milissegundos) e a perda de pacotes, se houver. Isso permite que os administradores de rede identifiquem problemas de conectividade e possam tomar medidas para corrigi-los.

## `traceroute`

A ferramenta `traceroute` (também conhecida como `tracert` em sistemas Windows), é uma utilidade de linha de comando usada para rastrear a rota que os pacotes de dados levam de um computador para outro em uma rede IP, como a Internet. Ele mostra todas as etapas (também chamados de "saltos") que os pacotes de dados fazem ao viajar de um *host* para outro, exibindo o tempo de resposta (em milissegundos) de cada salto.

<!-- marp --- -->

A principal finalidade do traceroute é ajudar a diagnosticar problemas de conectividade e latência na rede. Ele pode identificar quais roteadores estão envolvidos na rota de comunicação entre dois dispositivos, bem como destacar quaisquer pontos de falha ou congestionamento ao longo do caminho

**Exemplo**

```bash
traceroute google.com
```

```bash
traceroute -n google.com
```

```bash
traceroute 8.8.8.8
```

## `netstat`


A ferramenta `netstat` é uma utilidade de linha de comando usada para exibir informações detalhadas sobre as conexões de rede ativas, tabelas de roteamento, estatísticas de interface e muito mais. É uma ferramenta poderosa para diagnosticar e solucionar problemas de rede em sistemas operacionais Unix-like, como Linux e macOS, bem como em sistemas Windows.

**Exemplo**
- Exibir as interfaces de rede
```bash
netstat -i
```

**Exemplo**
- Para exibir as conexões de rede ativas (TCP)

```bash
netstat -at
```

**Exemplo**
- Exibir tabelas de roteamento
```bash
netstat -r
```
**Exemplo**
- Exibir sockets UNIX
```bash
netstat -lx
```

## `route`

A ferramenta route é uma utilidade de linha de comando usada para exibir, adicionar e manipular tabelas de roteamento em sistemas operacionais Unix-like, como Linux e macOS, bem como em sistemas Windows. Ela permite aos administradores de sistema visualizar e controlar a forma como os pacotes de rede são roteados entre diferentes redes e destinos.

**Exemplo**
- Mostrar a tabela de roteamento atual
```bash
route -n
```

<!-- marp --- -->

Com a ferramenta `route` também é possível modificar a tabela de rotas, alterando ou removendo rotas existentes ou adicionando novas rotas.

## `arp`

O ARP (*Address Resolution Protocol*) é essencial para o funcionamento das redes locais, pois permite que os dispositivos descubram os endereços MAC de outros dispositivos na mesma rede, o que é necessário para encaminhar pacotes de dados corretamente.

<!-- marp --- -->

O comando `arp` é uma utilidade de linha de comando utilizada para exibir e manipular a tabela ARP em sistemas operacionais Unix-like, como Linux e macOS, bem como em sistemas Windows. A tabela ARP é uma tabela de mapeamento que associa endereços IP a endereços MAC em uma rede local.

**Exemplo**
- Exibir a tabela ARP
```bash
arp
```

**Exemplo**
- Exibir a tabela ARP, sempre mostrando endereços IP
```bash
arp -n
```