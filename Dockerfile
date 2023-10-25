FROM node:alpine

WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

EXPOSE 3000
EXPOSE 5555

RUN npx prisma generate

CMD [ "npm","run", "dev"]