

# VLSM

O VLSM (*Variable Length Subnet Masking*) possibilita que no espaço de endereçamento destinado a uma rede de uma determinada classe, é possível que sejam definidos sub-redes com diferentes quantidades de máquinas.


Tomemos como exemplo uma rede classe C, que possui 24 bits dedicados à definição da rede. Poderíamos dividir o espaço de máquinas em 8 sub-redes, utilizando a máscara /27. Desta forma, cada sub-rede poderia ter 30 *hosts*.

A utilização do VLSM possibilita que ao invés de todo o espaço disponível a *hosts* da classe C seja dividido de maneira igual, é permitido que as sub-redes sejam divididas. Com isto, dentro da rede classe C poderia haver a sub-rede /25 (126 *hosts*), /26 (62 *hosts*), /28 (14 *hosts*) e assim sucessivamente.

## Referências


**Outros materiais**  

