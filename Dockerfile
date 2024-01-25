FROM node:18-alpine as build
RUN mkdir -p /app
COPY package*.json ./app/
WORKDIR /app/
RUN npm install
COPY . .
RUN npm run build --prod
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/www/ /usr/share/nginx/html/
EXPOSE 80