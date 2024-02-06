from http.server import BaseHTTPRequestHandler, HTTPServer
from socketserver import ThreadingMixIn

from random import randint

sessions = {}

address = '0.0.0.0'
port= 8088

SESSION_ID_LEN = 10


class SessionHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        print(self.path)
        
        self.cookie = None
        try:
            response = 200
            cookies = self.parse_cookies(self.headers["Cookie"])

            if cookies:
                if "session_id" in cookies:
                    sid = cookies['session_id']
                    print(f'Cookie encontrado. session_id: {sid}.')

                    sessions[sid] += 1
                    content = f'Esta e sua visita de numero {sessions[sid]}.'

            else:
                content = "Esta e a sua primeira visita."
                sid = self.generate_sid()
                sessions[sid] = 1
                self.cookie = f'session_id={sid}'
            
        except:
            response = 404
            content = "Erro ao ler ou processar os cookies. <br> Que tal remover os cookies do seu navegador?"

            # content = "Esta e a sua primeira visita."
            # sid = self.generate_sid()
            # sessions[sid] = 1
            # self.cookie = f'session_id={sid}'

        self.send_response(response)
        self.send_header('Content-type','text/html')

        if self.cookie:
            self.send_header('Set-Cookie', self.cookie)

        self.end_headers()
        print(f'content: {content}')
        self.wfile.write(bytes(content, "utf-8"))
        return

    
    def generate_sid(self):
        return "".join(str(randint(0,9)) for _ in range(SESSION_ID_LEN) )
    
    def parse_cookies(self, cookie_list):
        return dict(((c.split("=")) for c in cookie_list.split(";"))) if cookie_list else {}

class ThreadedHTTPServer(ThreadingMixIn, HTTPServer):
    #Handle requests in a separate thread
    pass

def main():
    try:
        
        # server = HTTPServer((address, port), SessionHandler)          #Single thread server
        server = ThreadedHTTPServer((address, port), SessionHandler)    #Multithread server
        print('Server running. <Ctrl-C> to stop!')
        server.serve_forever()

    except KeyboardInterrupt:
        print('Exiting server')
        server.socket.close()

if __name__ == '__main__':
    main()