FROM node:20.11.0

WORKDIR /documentation

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start"]