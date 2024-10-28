# # Base image
# FROM node:18-alpine

# # Create app directory
# WORKDIR /app

# # Copy package files
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy source files
# COPY . .

# # Build the Next.js application
# RUN npm run build

# # Expose the port the app runs on
# EXPOSE 3001

# # Start the application
# CMD ["npm", "start"]

# Base image
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Set build argument for port
ARG PORT=3001
ENV PORT=$PORT

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source files
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port the app runs on
EXPOSE $PORT

# Create a start script that uses the correct port
RUN echo "#!/bin/sh\nnpm start -- -p \$PORT" > start.sh && chmod +x start.sh

# Start the application using the script
CMD ["./start.sh"]