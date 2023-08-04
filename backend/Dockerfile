# Use the official Node.js 14 image as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the backend source code to the container
COPY . .

# Expose the port your backend server is listening on (e.g., 3000)
EXPOSE 3003

# Start the backend server
CMD ["npm", "start"]
