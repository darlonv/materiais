from http.server import BaseHTTPRequestHandler, HTTPServer

class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type','text/html')
        self.end_headers()

        content = '<html><body>Hello world</body></html>'
        self.wfile.write(bytes(content, 'utf-8'))

def main():
    try:
        server = HTTPServer(('localhost', 8088), handler)
        server.serve_forever()
    except KeyboardInterrupt:
        print('Exiting server')
        server.socket.close()

if __name__ == '__main__':
    main()