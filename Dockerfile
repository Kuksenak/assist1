# Стадия сборки
FROM node:20 AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Стадия запуска
FROM nginx:alpine

# ❗ Копируем содержимое папки browser, не саму папку
COPY --from=builder /app/dist/assist/browser/ /usr/share/nginx/html/

# Nginx конфиг
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
