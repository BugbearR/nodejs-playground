FROM mcr.microsoft.com/devcontainers/typescript-node:20

USER root
RUN apt-get update -y \
    && DEBIAN_FRONTEND=noninteractive apt-get upgrade -y \
    && apt-get clean \
    && rm -rf /var/cache/apt/* /var/lib/apt/lists/

CMD [ "/bin/bash" ]
