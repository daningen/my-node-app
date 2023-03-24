# Base image
FROM node:14-alpine

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json to the app directory
COPY package*.json ./

# Install nodemon globally
# RUN npm install -g nodemon

# Install dependencies
RUN npm install

# Install react-router-dom
# RUN npm install react-router-dom --save

# Copy the rest of the app files to the app directory
COPY . .

# Build the app
RUN npm run build

# Set environment variables


EXPOSE 80
# EXPOSE $PORT - ändra tillbaka till denna när jag inte kör cloudflare
#EXPOSE 3002

# Serve the build folder
CMD ["npx", "serve", "-s", "build", "-l", "tcp://0.0.0.0:80"]
