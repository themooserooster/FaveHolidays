# Use the official Node.js LTS image for building the React app
FROM node:lts AS build
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . ./

# Build the React app for production
RUN npm run build

# Use the official Nginx image to serve the React app
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Remove the default Nginx static files
RUN rm -rf ./*

# Copy the built React app from the build stage
COPY --from=build /app/build .

# Expose port 80
EXPOSE 80
EXPOSE 5173

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]