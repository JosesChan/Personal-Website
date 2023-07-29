# Use a lighter version of Node as a parent image
# FROM mhart/alpine-node:8.11.4

# Set base image to node's official image
FROM node:17

# Set the working directory to /back_end
WORKDIR /back_end/

# copy package.json into the container at /back_end
COPY package.json /back_end/

# install dependencies
RUN npm install

# Copy the current directory contents into the container at /back_end
COPY . /back_end/

# Make port 5000 available to the world outside this container
EXPOSE 5000

# Run the app when the container launches
CMD ["npm", "run", "production"]

