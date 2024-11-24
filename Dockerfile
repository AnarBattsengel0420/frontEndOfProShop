FROM node:20-alpine AS builder

# WORKDIR ni docker container dotor bichigdene
WORKDIR /src

COPY package*.json .
COPY yarn.lock .

RUN yarn

COPY . .

RUN NODE_OPTIONS="--max-old-space-size=2048" yarn build

FROM nginx:alpine
# from gedeg ni nodiin neriig helj baigaa 
COPY --from=builder /src/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

