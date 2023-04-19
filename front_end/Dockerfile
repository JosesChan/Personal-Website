# Official node image
FROM node:17

# Setting the working directory to "/front_end/"
WORKDIR /front_end

ENV NODE_OPTIONS --openssl-legacy-provider

# Copies the package.json file into "/front_end/" 
COPY package.json /front_end/

# install dependencies
RUN npm install -D tailwindcss@latest postcss@latest autoprefixer@latest

RUN npm install -g @craco/craco

# Copies the entire react source code into "/front_end"
COPY . /front_end/

EXPOSE 3000

# Starting the react app
CMD ["npm", "start"]


