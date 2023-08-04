# Use the official Node.js 14 image as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend source code to the container
COPY . .

# Build the frontend application
RUN npm run build

# Expose the port your frontend server is listening on (e.g., 3000)
EXPOSE 3000

# Start the frontend server
CMD ["npm", "start"]
