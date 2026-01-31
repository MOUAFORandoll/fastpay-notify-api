# Base Image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application source
COPY . .

# Set environment variables
ENV PORT=8083

# Expose port
EXPOSE 8083

# Start application
CMD ["node", "index.js"]
