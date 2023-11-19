# Build Stage
FROM node:20.9.0 AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --production=false
COPY . .
RUN npm run build

# Production Stage
FROM node:20.9.0-alpine
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/dist ./dist
COPY package*.json ./
RUN npm install --production
EXPOSE 3000
CMD ["node", "./dist/main"]
