# TODO: change for a compatible alpine
FROM node:20.18.0 
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn
COPY . . 
RUN npx prisma db push
RUN yarn build
CMD ["yarn", "start:prod"]
EXPOSE 3000
