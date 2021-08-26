## Alpine + GCC docker image
https://hub.docker.com/r/frolvlad/alpine-gcc/

## M1 Silicon Issues
https://stackoverflow.com/questions/66662820/m1-docker-preview-and-keycloak-images-platform-linux-amd64-does-not-match-th


## Workflow
### run in container

```bash
docker run -it --rm -v `pwd`:/usr/src/c -w /usr/src/c frolvlad/alpine-gcc /bin/sh
gcc -Wall ds/dynamic-array/dynamicArray.c -o main && clear && ./main
```