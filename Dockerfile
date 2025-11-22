FROM node:18-alpine AS builder

WORKDIR /app

COPY . .

RUN rm -rf package-lock.json node_modules

RUN npm install

RUN npm install -D @nestjs/cli@latest typescript@latest

RUN npm run build

FROM node:18-alpine AS production
WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY .env .

RUN npm install --only=production

CMD ["node", "dist/main.js"]