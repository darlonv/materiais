from http.server import BaseHTTPRequestHandler, HTTPServer
from socketserver import ThreadingMixIn
from http.cookies import SimpleCookie, BaseCookie

from time import sleep
from random import randint

sessions = {}

address = '0.0.0.0'
port= 8088


class SessionHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        print(self.path)
        routes = {
            "/login"  : self.login,
            "/logout" : self.logout,
            "/"       : self.home
        }

        self.cookie = None
        try:
            response = 200
            cookies = self.parse_cookies(self.headers["Cookie"])
            if "sid" in cookies:
                # self.user = cookies["sid"] if (cookies["sid"] in sessions) else False
                if cookies["sid"] in sessions:
                    self.user = cookies["sid"]
                else:
                    self.user = False

            print(f'*** {self.path}')
            content = routes[self.path]()
            
        except:
            print(f'*** EXCEPT {self.path}')
            response = 404
            content = "Not Found."

        self.send_response(response)
        self.send_header('Content-type','text/html')

        if self.cookie:
            self.send_header('Set-Cookie', self.cookie)

        self.end_headers()
        print(f'content: {content}')
        self.wfile.write(bytes(content, "utf-8"))
        return

    def home(self):
        # return "Welcome home."
        if self.user:
            return "Welcome User"
        else:
            return "Welcome, Stranger"
        
    def login(self):
        # return "Logged in"
        sid = self.generate_sid()
        self.cookie = f"sid={sid}"
        sessions[sid] = {"username", "useragent", "ip address", "expiry"}

        return "Logged in"
    
    def logout(self):
        # return "Logged out"
        if not self.user:
            return "Can't log out. User not logged in."
        else:
            self.cookie = "sid="
            del sessions[self.user]
            return "Logged out."
        
    def generate_sid(self):
        return "".join(str(randint(1,9)) for _ in range(100) ) 
    
    def parse_cookies(self, cookie_list):
        return dict(((c.split("=")) for c in cookie_list.split(";"))) if cookie_list else {}

class ThreadedHTTPServer(ThreadingMixIn, HTTPServer):
    #Handle requests in a separate thread
    pass

def main():
    try:
        server = ThreadedHTTPServer((address, port), SessionHandler)
        print('Servidor executando. <Ctrl-C> para parar.')
        server.serve_forever()

    except KeyboardInterrupt:
        print('Exiting server')
        server.socket.close()

if __name__ == '__main__':
    main()