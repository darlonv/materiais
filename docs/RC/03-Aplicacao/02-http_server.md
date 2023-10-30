import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# HTTP Server


## HTTP com sockets

Podemos implementar um servidor HTTP simples utilizando sockets.


<Tabs>
  <TabItem value="servidor" label="Servidor">

  Código `server_http.py`:

```py
#Bibliotecas
import socket
from datetime import datetime

#Porta do servidor
port = 8084

def get_http_response(addr):

    now = datetime.now().strftime('%a, %d %b %Y %H:%M:%S GMT-3')
    
    #Mensagem que o servidor envia
    http_response = f'''
HTTP/1.0 200 OK
Date: {now}
Server: AulaRedes/1.0
Content-Type: text/HTML

<html>
    <h1>Aula De Redes de Computadores - IFPR Cascavel</h1>
    IP   : {addr[0]}<br>
    Porta: {addr[1]}<br>
    {now}<br>
</html>
'''
    
    return http_response

def main():
    #Objeto socket
    serv  = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

    #Associa o socket a uma porta local
    serv.bind(('0.0.0.0',port))
    serv.listen()

    #Servidor fica aguardando conexões
    while True:
        print(f'== Servidor aguardando conexões na porta {port} ==')

        conn, addr = serv.accept()

        #Prepara a resposta HTTP
        http_response = get_http_response(addr)

        #Envia uma mensagem
        conn.send(http_response.encode())

        #Fecha a conexao
        conn.close()
    
    
if __name__ == '__main__':
    main()
```

  </TabItem>
</Tabs>

- Execute o servidor

```bash
python3 server_http.py
```

- Acesse o servidor utilizando um navegador *web*
  - [http://localhost:8084](http://localhost:8084)

- Responda:
  - Quais são as limitações deste servidor?


## HTTP com sockets e threads

Para resolver o problema do acesso por diversos cliente ao "mesmo" tempo, podemos incrementar o servidor HTTP desenvolvido anteriormente utilizando *threads*. Nesta abordagem, cada conexão é tratada separadamente.

<Tabs>
  <TabItem value="servidor" label="Servidor">

  Código `server_http_threads.py`:

```py
#Bibliotecas
import socket
from datetime import datetime
from threading import Thread

#Porta do servidor
port = 8084

def get_http_response(addr):

    now = datetime.now().strftime('%a, %d %b %Y %H:%M:%S GMT-3')
    
    #Mensagem que o servidor envia
    http_response = f'''
HTTP/1.0 200 OK
Date: {now}
Server: AulaRedes/1.0
Content-Type: text/HTML

<html>
    <h1>Aula De Redes de Computadores - IFPR Cascavel</h1>
    <h2>Servidor Multithread</h2>
    IP   : {addr[0]}<br>
    Porta: {addr[1]}<br>
    {now}<br>
</html>
'''
    
    return http_response

class ThreadServer(Thread):

    def __init__ (self, addr, conn):
        Thread.__init__(self)
        self.addr = addr
        self.conn = conn

    def run(self):
        #Recebe os dados
        data = self.conn.recv(4096)

        #Prepara a resposta HTTP e responde ao cliente
        http_response = get_http_response(self.addr)
        self.conn.send(http_response.encode())

        #Fecha a conexao
        self.conn.close()



def main():
    #Objeto socket
    serv  = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

    #Associa o socket a uma porta local
    serv.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1) #Possibilita reusar portas
    serv.bind(('0.0.0.0',port))
    serv.listen()

    #Servidor fica aguardando conexões. 
    #Quando receber uma conexão, repassa para um thread processar a conexão
    while True:
        conn, addr = serv.accept()
        ThreadServer(addr,conn).start()


if __name__ == '__main__':
    main()
```

  </TabItem>
</Tabs>