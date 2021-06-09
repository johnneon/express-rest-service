FROM node:14

LABEL Name=express-rest-server Version=1.0.0

RUN mkdir -p /usr/src/app/
WORKDIR /usr/src/app/

RUN npm i

COPY . /usr/src/app/

EXPOSE 8080

CMD npm run start
