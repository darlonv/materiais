# Comunicação

Comandos relaciondos à comunicação e redes.

## Rede

### ping

O comando `ping` é utilizado para testar a conexões entre duas máquinas distintas. Em ambientes Linux, os pacotes são enviados indefinidamente, e o comando deve ser interrompido com `ctrl+c`. Para limitar o número de pacotes, pode ser utilizada a opção `-c`.

**Parâmetros**
- `-c x` : envia $x$ pacotes.

**Exemplo**
- Envia 10 pacotes ao servidor DNS do Google (endereço IP `8.8.8.8`)
```
ping -c 10 8.8.8.8
```


:::note Observação
Sistemas que respondem ao `ping` devem ter a resposta ICMP habilita. Em ambientes Windows, esta opção é desabilitada por padrão.
:::

## Web

### wget

O `wget` é um comando que realiza o *download* de páginas *web*. É bastante completo, e possui diversos parâmetros

**Parâmetros**  

- `-c` : (*continue*) continua um download prévio. Esta funcionalidade depende de recursos do servidor.
- `-p` : obtém todos os arquivos do site.
- `-k` : converte os links para arquivos locais. Útil em conjunto com `-p`




**Exemplos**  
- *Download* do site [pudim.com.br](http://www.pudim.com.br). Obtém apenas o arquivo *index.html*.
```
wget www.pudim.com.br
```
- Fazer o *download* do site [pudim.com.br](http://www.pudim.com.br), com todos seus arquivos. Porém, ao abrir a página local, os recursos *online* ainda serão utilizados, visto que a página não foi modificada.
```
wget -p www.pudim.com.br
```
- Fazer o *download* do site [pudim.com.br](http://www.pudim.com.br), com todos seus arquivos. As páginas são alteradas para que os *links* sejam atualizados para os arquivos obtidos.
```
wget -p -k www.pudim.com.br
```
- *Download* do Docker, *software* de conteinerização.


### curl
O `curl` é uma aplicação que possibilita obter recursos remotos, como páginas web e arquivos. É uma ferramenta extremante poderosa, e também permite alterar

**Parâmetros**
- `-o` : (output) salva o recurso obtido com um novo nome.

**Exemplos**  
- *Download* da imagem do site pudim.com.br e salva como foto.jpg
```
curl -o foto.jpg www.pudim.com.br/pudim.jpg
```


## Referências

**Outros materiais**  