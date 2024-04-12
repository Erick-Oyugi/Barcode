import app from './src/app.js'
import dotenv from 'dotenv'
import https from 'https'
import fs from 'fs'
import connectDB from './src/config/db.js'





dotenv.config()

let port = process.env.PORT
const path_to_key = process.env.KEY_PATH
const path_to_cert = process.env.CERT_PATH


function bootstrap(){
//    const environment = process.env.NODE_ENV;
//    var httpsOptions= {
//    key: fs.readFileSync(`${path_to_key}`),
//    cert: fs.readFileSync(`${path_to_cert}`),
// };



// var server = https.createServer(httpsOptions, app).listen(port, ()=>{
//    console.log(`QRcode Backend running on  port ${port}`)
// })

// connectDB()

app.listen(port, function(err){
   if (err) console.log("Error in server setup")
   console.log("Server listening on Port", port);
})

}

bootstrap()

