FROM python

RUN pip3 install altair pandas streamlit
COPY ./st_hello.py /src/

CMD ["/usr/local/bin/streamlit", "run", "/src/st_hello.py", "--server.port=8501","--server.address=0.0.0.0"]