FROM node:12-alpine as build
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL ${REACT_APP_API_URL}
WORKDIR /app
COPY package.json /app/package.json
RUN npm install --only=prod
COPY . /app
RUN npm run build
FROM nginx:1.16.0-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]