
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Redirecionamentos

Em máquinas que não possuem endereço IP acessível publicamente, é possível utilizar serviços de redirecionamento, que expõem para determinado subdomínio

```
docker run -d -p 8081:80 httpd
```

## Serviços de redirecionamento

### Serveo

```bash
ssh -R 80:localhost:8081 serveo.net
```

```bash
ssh -R servertest:80:localhost:8081 serveo.net
```



### Localtunnel

```bash
lt --port 8000
```

```bash
lt --subdomain servertest--port 8000
```

### Teleport

Servidor para redirecionamentos.

### Outras alternativas

Ngrok

## Referências

[Localtunnel](https://localtunnel.me/)  
[Localtunnel Client Github Repository](https://github.com/localtunnel/localtunnel)  
[Localtunnel Server](https://github.com/localtunnel/server)  
[Ngrok](https://ngrok.com)  
[Serveo](https://serveo.net)  
[Teleport](https://goteleport.com)  
[Teleport Github Repository](https://github.com/gravitational/teleport/)  

