sigla_estado = input("Entre com a sigla do estado: ")

#Processamento e saída
match sigla_estado: #<- Variável a ser observada
    case "PR": #<- Verifica se o estado é Paraná
        print("Estado: Paraná - Sigla: PR - Código: 41 - Região: Sul")
    case "SC": #<- Verifica se o estado é Santa Catarina
        print("Estado: Santa Catarina - Sigla: Sc - Código: 42 - Região: Sul")
    case "RS": #<- Verifica se o estado é Rio Grande do Sul
        print("Estado: Rio Grande do Sul - Sigla: RS - Código: 43 - Região: Sul")
    case _: #<- Não restou outra opção
        print("Estado ainda não cadastrado no sistema.")