FROM node:18.16.0

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

RUN mpn install -g @angular/cli@16.0.2

COPY . /usr/src/app

CMD ng serve --host 0.0.0.0 --port 4500