# Use the official Node.js 14 image as the base image
FROM node:18

# Set the working directory in the Docker image
WORKDIR /app

# Copy the package.json and package-lock.json files from the parent directory to the Docker image
COPY ["package*.json","./"]

# Install the app's dependencies using 'npm ci'
RUN npm install

# Copy the rest of the app's source code to the Docker image
COPY . /app/

# Expose the port that Vite is using (default: 3000)
EXPOSE 5173

# Specify the command to start the development server
CMD ["npm", "run", "dev"]
