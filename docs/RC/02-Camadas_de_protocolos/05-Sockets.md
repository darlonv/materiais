import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Sockets

## App v1

Nesta versão, temos uma aplicação simples cliente/servidor, em que o cliente envia uma mensagem ao servidor e o servidor responde com outra mensagem.

<Tabs groupId='language'>
<TabItem value="python" label="Python">

<Tabs groupId='cliente-servidor'>
<TabItem value="cliente" label="Cliente">

- `sockets_client_v1.py`

```python
import socket

#Porta do servidor
port = 10110

#Endereço do servidor
dest = '127.0.0.1'

#Mensagem que o cliente envia
msg = 'Olá. Sou o cliente.'

#Objeto socket
client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

#Conecta ao servidor
print(f'== Conectando a {dest}:{port}==')
client.connect((dest, port))

#Envia mensagem ao servidor
print('== Enviando mensagem ==')
client.send(msg.encode())

#Recebe mensagem do servidor
print('==Recebendo mensagem do servidor ==')
from_server = client.recv(4096)
print(from_server.decode())

#Fecha a conexão
client.close()
```

</TabItem>
<TabItem value="servidor" label="Servidor">

- `sockets_server_v1.py`:

```python
#Biblioteca sockets
import socket

#Porta do servidor
port = 10110

#Mensagem que o servidor envia
msg = '** Olá. Sou o servidor. **'

#Objeto socket
serv  = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
serv.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEPORT, 1)

#Associa o socket a uma porta local
serv.bind(('0.0.0.0',port))
serv.listen()

#Servidor aguarda conexão

print(f'== Servidor aguardando conexão na porta {port} ==')
conn, addr = serv.accept()
print(f'== Conexao recebida de {addr} ==')

#Recebe os dados
data = conn.recv(4096)

#Trata os dados recebidos
from_client = data
print('== Dados recebidos: ==')
print(from_client.decode())

#Envia uma mensagem
print('== Enviando mensagem ==')
conn.send(msg.encode())
print('== Mensagem enviada ==')

#Fecha a conexao
conn.close()
print('== Cliente desconectado ==')

#encerra o socket
serv.shutdown(socket.SHUT_RDWR)
```

</TabItem>
</Tabs>
</TabItem>

</Tabs>


## App v2

Nesta versão, temos uma aplicação cliente/servidor, em que o cliente envia uma mensagem ao servidor e o servidor responde com outra mensagem. 
- Cliente: envia uma mensagem ao servidor
- Servidor: responde uma mensagem ao cliente. Após responder, aguarda por uma nova conexão.

<Tabs groupId='language'>
<TabItem value="python" label="Python">

<Tabs groupId='cliente-servidor'>
<TabItem value="cliente" label="Cliente">

- `sockets_client_v2.py`

```python
import socket

#Porta do servidor
port = 10110

#Endereço do servidor
dest = '127.0.0.1'

#Mensagem que o cliente envia
msg = 'Olá. Sou o cliente.'

#Objeto socket
client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

#Conecta ao servidor
print(f'== Conectando a {dest}:{port}==')
client.connect((dest, port))

#Envia mensagem ao servidor
print('== Enviando mensagem ==')
client.send(msg.encode())

#Recebe mensagem do servidor
print('==Recebendo mensagem do servidor ==')
from_server = client.recv(4096)
print(from_server.decode())

#Fecha a conexão
client.close()
```

</TabItem>
<TabItem value="servidor" label="Servidor">

- `sockets_server_v2.py`:

```python
#Biblioteca sockets
import socket

#Porta do servidor
port = 10110

#Mensagem que o servidor envia
msg = '** Olá. Sou o servidor. **'

#Objeto socket
serv  = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

#Associa o socket a uma porta local
serv.bind(('0.0.0.0',port))
serv.listen()

#Servidor fica aguardando conexões
while True:
    print(f'== Servidor aguardando conexões na porta {port} ==')
    conn, addr = serv.accept()
    print(f'== Conexao recebida de {addr} ==')
 
    #Recebe os dados
    data = conn.recv(4096)

    #Trata os dados recebidos
    from_client = data
    print('== Dados recebidos: ==')
    print(from_client.decode())

    #Envia uma mensagem
    print('== Enviando mensagem ==')
    conn.send(msg.encode())
    print('== Mensagem enviada ==')

    #Fecha a conexao
    conn.close()
    print('== Cliente desconectado ==')
```

</TabItem>
</Tabs>
</TabItem>

</Tabs>

## App v3

Nesta versão, temos uma aplicação cliente/servidor, em que o cliente envia uma mensagem ao servidor e o servidor responde com outra mensagem. 
- Cliente: envia uma mensagem ao servidor
- Servidor: responde uma mensagem ao cliente. Após responder, aguarda por uma nova conexão. Caso a porta não esteja liberada, servidor aguarda até que a porta esteja disponível, por um número limitado de vezes.