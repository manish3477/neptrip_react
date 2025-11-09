# Use official Node.js image
FROM node:18-alpine AS build

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source files
COPY ./ .app

# Build the app for production
RUN npm run build

# Stage 2 — use a lightweight web server
FROM nginx:alpine

# Copy build files from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 3000 inside container (optional)
EXPOSE 3000

# Run nginx server
CMD ["nginx", "-g", "daemon off;"]
