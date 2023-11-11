FROM node:21

WORKDIR /app

WORKDIR /usr/src

COPY . .

RUN npm install && \
    npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
