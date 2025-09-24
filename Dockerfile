# Etapa de construcción
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install -g @angular/cli && npm install

COPY . .

RUN ng build --configuration=production

# Etapa de producción
FROM nginx:alpine

COPY --from=build /app/dist/frontend /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
