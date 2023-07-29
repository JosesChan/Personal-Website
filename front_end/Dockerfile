# Official node image
FROM node:17

# Setting the working directory to "/front_end/"
WORKDIR /front_end

ENV NODE_OPTIONS --openssl-legacy-provider

# Copies the package.json and package-lock.json file into "/front_end/" 
COPY package*.json /front_end/

# Install dependencies
RUN npm install -D tailwindcss@latest postcss@latest autoprefixer@latest cssnano@latest cross-env@latest vite-plugin-html@latest

# Install craco and serve to run the application.
RUN npm install -g @craco/craco

RUN npm install -g serve

# Copy everything to Docker environment
# COPY . .

# Copies the entire front end into "/front_end" Docker environment
COPY . /front_end/

# Build for production.
RUN npm run build

EXPOSE 3000

# CMD [""]
#CMD ["npm", "start"]

CMD serve -s build -l 3000