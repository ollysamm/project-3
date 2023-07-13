# Use an official lightweight Node.js runtime as the base image
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

# Use an official lightweight Nginx runtime as the base image for the second stage
FROM nginx:stable-alpine

# Copy the build artifacts from the first stage to the Nginx container
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
