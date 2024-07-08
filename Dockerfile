# Frontend build stage
FROM node:16 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Skift bruger til root for at undgå tilladelsesproblemer
USER root

RUN npm run build

# Nginx stage to serve the build
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]