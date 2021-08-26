FROM gcc:4.9
COPY . /usr/src/c
WORKDIR /usr/src/c
RUN gcc -o myapp main.c
CMD ["./myapp"]