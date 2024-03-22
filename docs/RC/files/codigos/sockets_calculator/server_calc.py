
#Biblioteca sockets
import socket

import json

#Porta do servidor
port = 10110

def processaCalc(operacao):
    resultado = dict()
    if operacao["operacao"] == "+":
        resultado['resultado'] = operacao["operandos"][0] + operacao["operandos"][1]
    if operacao["operacao"] == "*":
        resultado['resultado'] = operacao["operandos"][0] * operacao["operandos"][1]
    
    return resultado


#Objeto socket
serv  = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
serv.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEPORT, 1)

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
    msg_recv = data.decode()
    op_recv = json.loads(msg_recv)
    print(op_recv)

    #Trata os dados recebidos
    dict_resposta = processaCalc(op_recv)
    print(dict_resposta)
    msg_resposta = json.dumps(dict_resposta)
    conn.send(msg_resposta.encode())
    
    #Fecha a conexao
    conn.close()
    print('== Cliente desconectado ==')

#encerra o socket
serv.shutdown(socket.SHUT_RDWR)