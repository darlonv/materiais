
# Fast API


## Instalação

```bash
pip3 install fastapi
pip3 install "uvicorn[standard]"
```

Crie um arquivo chamado `main.py` com o seguinte conteúdo:

```python
from typing import Union

from fastapi import FastAPI
from fastapi.responses import HTMLResponse

app = FastAPI()


@app.get("/hello")
def read_hello():
    return {"Hello": "World"}


@app.get("/", response_class=HTMLResponse)
def read_page():
    # return {"Hello": "World"}
    return """
    <html>
        <head>
            <title>Teste webserver</title>
        </head>
        <body>
            <h1>Página de teste</h1>
        </body>
    </html>
    """


@app.get("/items/{item_id}")
def read_item(item_id: str, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

@app.get("/op")
def read_item(a: Union[int, None] = None, b: Union[int, None] = None, op: Union[str, None] = None):
    return {"a": a, "b": b, "operação": op}
```

Em seguida, execute o servidor com:

```bash
uvicorn main:app --reload
```


Com o servidor executando, acesse pelo navegador:

```
http://localhost:8000
http://localhost:8000/hello
http://localhost:8000/items/teste
http://localhost:8000/items/teste?q=oi
http://127.0.0.1:8000/op?a=5&b=9&op=%2B
```