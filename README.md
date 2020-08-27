## EriDev Connector

This project's aim is to connect software developers across several communities.


`git clone https://github.com/byohannes/EriDevConnector.git` or if you use SSH (recommended):`git@github.com:byohannes/EriDevConnector.git`


#### [Installation and run backend]

- `cd backend`
- Create keys.js file on `./config` and add this code on it
 
   `module.exports={
         mongoURI:"your mongoDB connection string",
         secretOrKey: 'secret'
   };`
- `npm install`
- `npm run dev`
 
 Server will be running on `http://localhost:5000`





