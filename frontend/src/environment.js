let IS_PROD = true;
const server = IS_PROD ?
    "https://callconnect-9c88.onrender.com" :
    "http://localhost:8000"


export default server;