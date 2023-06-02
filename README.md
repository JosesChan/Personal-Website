# Personal Website
Currently still in development. 

Website developed using tailwind and react. Recently added implementation of MERN (MongoDB, Expressjs, Reactjs, Nodejs) stack and dockerised.

Before attempting to startup. Set up your own mongo database.
Create your own config.env file in the back_end. Copy paste the following:

"ATLAS_URI = mongodb+srv://username:password@cluster0.example.mongodb.net/?retryWrites=true&w=majority 
PORT=5000"

Replace ATLAS_URI input with your connection string. Add "/?retryWrites=true&w=majority" to the end after ".net"

Dockerless instructions
1. Install dependecies nodejs etc.
2. Open project in visual studio code 
3. Enter "npm start" in the terminal.

Docker instructions
1. Launch terminal and Docker
2. Navigate to the Personal Website folder
3. docker-compose up --build

Notes to self for later:
Check possible implementation of lazy load
Consider adding type checking to components