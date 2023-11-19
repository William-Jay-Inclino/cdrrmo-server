# Use an official Node.js runtime as a parent image
FROM node:20.9.0

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and yarn.lock to the working directory
COPY package*.json ./

# Install app dependencies
RUN yarn install

# Copy the rest of the application code to the container
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run your app
CMD ["yarn", "start:prod"]
