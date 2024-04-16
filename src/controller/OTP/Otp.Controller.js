import axios from 'axios'
import speakeasy from 'speakeasy'
import GetOTPSchemaData from '../../model/GetOTP/GetOTP.model.js'



const getOTPUser = async( req, res) => {


const value = new GetOTPSchemaData({
  
     PhoneNumber : PhoneNumber,
    
})


try {

const secret = speakeasy.generateSecret({ length: 20 });

const code = speakeasy.totp({ 
  
  // Use the Base32 encoding of the secret key 
  secret: secret.base32, 

  // Tell Speakeasy to use the Base32  
  // encoding format for the secret key 
  encoding: 'base32'
}); 

 
    await axios({
        method : "POST",
        url : process.env.INFO_BIP_URL,
        headers: {
            'Authorization': process.env.AUTHORIZATION_HEADER,
            'Accept': 'application/json'
        },
        data: {
         "messages": [
                    {
                       "destinations": [{"to":`${PhoneNumber}`}],
                       "from": "SecureGo",
                       "text": `Hello,\n\nYour OTP is ${code} !`
                    }
                ]
            
        }
      }).then((response) => {
        console.log(response.data);
        // res.send(response.data)
      });
      
  
}catch(err){
      
    //  res.status(400).json(err)
     console.log(err)
  }


}


export default getOTPUser