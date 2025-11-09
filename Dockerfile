# Use official Node.js image
FROM node:18-alpine AS build

WORKDIR /app

# Copy package.json and lock file
COPY package*.json ./

RUN npm install

# Copy the entire project into the container
COPY . .

# Verify files before building
RUN echo "Contents of /app/public:" && ls -l /app/public

# Build the app
RUN npm run build

# Use nginx to serve the production build
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
