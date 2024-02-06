from http.server import BaseHTTPRequestHandler, HTTPServer
from socketserver import ThreadingMixIn
import threading
from time import sleep

address = '0.0.0.0'
port= 8088



class Handler(BaseHTTPRequestHandler):
    def do_GET(self):

        self.send_response(200)
        self.send_header('Content-type','text/html')
        self.end_headers()

        content = '<html><body>Hello world</body></html>'

        self.wfile.write(bytes(content, 'utf-8'))
        return

class ThreadedHTTPServer(ThreadingMixIn, HTTPServer):
    #Handle requests in a separate thread
    pass

def main():
    try:
        server = ThreadedHTTPServer((address, port), Handler)
        print('Servidor executando. <Ctrl-C> para parar.')
        server.serve_forever()

    except KeyboardInterrupt:
        print('Exiting server')
        server.socket.close()

if __name__ == '__main__':
    main()