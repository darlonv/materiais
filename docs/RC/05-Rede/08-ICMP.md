

# ICMP

O Protocolo ICMP (Internet Control Message Protocol) é um protocolo de rede utilizado para enviar mensagens de controle e informações sobre erros em redes IP. Ele faz parte da camada de rede do modelo TCP/IP e é frequentemente utilizado em conjunto com o Protocolo IP (Internet Protocol).

O ICMP é utilizado por dispositivos de rede, como roteadores e *hosts*, para se comunicarem entre si e trocarem informações importantes sobre o *status* da rede. Ele permite que esses dispositivos enviem mensagens de erro ou informações de diagnóstico para outros dispositivos.

Algumas das principais funções do ICMP incluem:

1. Mensagens de erro: O ICMP é usado para relatar erros na comunicação de rede, como pacotes não entregues, tempo de vida expirado, redirecionamentos e outros problemas relacionados.

1. O comando `ping` é uma ferramenta comum que utiliza o protocolo ICMP para verificar a conectividade entre dois dispositivos em uma rede. Ele envia pacotes `ICMP Echo Request` para um destino específico e aguarda por pacotes `ICMP Echo Reply` como resposta. Esta é amplamente utilizada para verificar a latência e a disponibilidade de um *host*.

1. Path MTU Discovery: O ICMP também é usado para descobrir o MTU (*Maximum Transmission Unit*) ao longo de uma rota de rede. Isso permite que os hosts determinem o tamanho máximo de pacote que podem enviar sem fragmentação, garantindo uma melhor eficiência na transmissão de dados.

1. Redirecionamentos: O ICMP pode ser usado para informar a um host que existe uma rota mais eficiente para um destino específico, permitindo que o host atualize suas tabelas de roteamento.

Em resumo, alguns dos tipos de mensagens que o protocolo ICMP transmitir são:

| Código ICMP | Tipo de Mensagem          | Descrição                                            | Responsável pelo Pacote |
|-------------|---------------------------|------------------------------------------------------|-------------------------|
| 0           | *Echo Reply*              | Resposta a um Echo Request (ping)                    | Kernel                  |
| 3           | *Destination Unreachable* | Indica que o destino é inatingível                   | Kernel                  |
| 4           | *Source Quench*           | Solicitação para reduzir o tráfego de pacotes        | Kernel                  |
| 5           | *Redirect*                | Indica uma rota mais eficiente para um destino       | Kernel                  |
| 8           | *Echo Request*            | Solicitação para verificar a conectividade (ping)    | Usuário                 |
| 11          | *Time Exceeded*           | Indica que o tempo de vida do pacote expirou         | Kernel                  |
| 12          | *Parameter Problem*       | Indica um problema nos parâmetros do cabeçalho IP    | Kernel                  |
| 13          | *Timestamp Request*       | Solicitação de carimbo de data/hora                  | Usuário                 |
| 14          | *Timestamp Reply*         | Resposta a uma solicitação de carimbo de data/hora   | Kernel                  |
| 15          | *Information Request*     | Solicitação de informações adicionais                | Usuário                 |
| 16          | *Information Reply*       | Resposta a uma solicitação de informações adicionais | Kernel                  |
| 17          | *Address Mask Request*    | Solicitação de máscara de endereço                   | Usuário                 |
| 18          | *Address Mask Reply*      | Resposta a uma solicitação de máscara de endereço    | Kernel                  |


**Atividades**  
- Utilize a biblioteca Python [ping3](https://github.com/kyan001/ping3) e desenvolva um *software* que verifica quais são as máquinas da rede que estão acessíveis a partir da sua máquina. Utilize como entrada de dados a faixa de endereços IP a serem acessados.
- Modifique o exercício anterior, para indicar o tempo médio de acesso a outras máquinas na rede.

## Referências


**Outros materiais**  

[Ping3](https://github.com/kyan001/ping3)  



 
