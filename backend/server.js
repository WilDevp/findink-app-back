
const app = require("./app");
const cloudinary = require("cloudinary");
const { connectDatabase } = require("./config/database");


connectDatabase();

cloudinary.config({ 
    cloud_name: 'dcnybakmv', 
    api_key: '675976569971678', 
    api_secret: 'lgdaWTja4Dqf9NSLvJTYAgl6ksc' 
  });
  

app.listen (process.env.PORT, () => {
console.log(`Server is running on port ${process.env.PORT}`);
});