import socket
import json

#Porta do servidor
port = 10110

#Endereço do servidor
dest = '127.0.0.1'

#Mensagem que o cliente envia
operacao = {
    "operacao": "*",
    "operandos": [4,5]
}

#Objeto socket
client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

#Conecta ao servidor
print(f'== Conectando a {dest}:{port}==')
client.connect((dest, port))

#Envia mensagem ao servidor
print('== Enviando mensagem ==')
client.send(json.dumps(operacao).encode())

#Recebe mensagem do servidor
print('==Recebendo mensagem do servidor ==')
from_server = client.recv(4096)
msg = from_server.decode()
print(json.dumps(msg))

#Fecha a conexão
client.close()