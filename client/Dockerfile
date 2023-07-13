# Stage 1: Build the React application
FROM node:14-alpine as build

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the app's dependencies
RUN npm install

# Copy the rest of the app's files to the container
COPY . .

# Build the app for production
RUN npm run build

# Stage 2: Serve the React application using Nginx
FROM nginx:stable-alpine

# Copy the build artifacts from the first stage to the Nginx container
COPY --from=build /app/build /usr/share/nginx/html

# Copy the nginx.conf file to the Nginx container's configuration directory
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
