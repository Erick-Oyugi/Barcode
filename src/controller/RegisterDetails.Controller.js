
import qrCodeGenerator from 'qrcode'
import RegisterDetailsSchemaData from '../model/RegisterDetail/RegisterDetail.model.js'
import crypto from 'crypto'
import { v4 as uuidv4 } from 'uuid';
import DateTime from 'node-datetime';
import axios from 'axios'
import speakeasy from 'speakeasy'


const RegisterDetails = async (req, res) => {

let Id = uuidv4();

var dt = DateTime.create();
var formatted = dt.format('Y-m-d H:M:S');
console.log(formatted);
const secret = speakeasy.generateSecret({ length: 20 });

const code = speakeasy.totp({
  
  // Use the Base32 encoding of the secret key 
  secret: secret.base32,

  // Tell Speakeasy to use the Base32  
  // encoding format for the secret key 
  encoding: 'base32'
}); 


console.log(Id)

const { FirstName, SecondName, PhoneNumber, IdNumber, Floor, registerDate} = req.body

const value = new RegisterDetailsSchemaData({
        Id: Id,
        FirstName: FirstName,
        SecondName: SecondName,
        PhoneNumber : PhoneNumber,
        IdNumber : IdNumber,
        Date: registerDate
      
})

console.log(value);

if (Id == null) {
  res.status(400).json({
    "Validation Error": "Id is required"
  })

} 
if(FirstName == null){
  res.status(400).json({
    "Validation Error": "FirstName is required"
  })

}

if(SecondName == null){
  res.status(400).json({
    "Validation Error": "SecondName is required"
  })
  console.log("SecondName is Required")

}

if(PhoneNumber == null){
  res.status(400).json({
    "Validation Error": "PhoneNumber is required"
  })

}

// if(Floor == null){
//   res.status(400).json({
//     "Validation Error": "Floor is required"
//   })

// }

if(Date == null){
  res.status(400).json({
    "Validation Error": "Date is required"
  })

}

else {

try {
qrCodeGenerator.toString( `${value}`, {
    errorCorrectionLevel: 'H',
    type: 'svg'
  }, function(err, data) {
    if (err) throw err;

    res.json({"Qrcode":data})
    console.log(data);

  });


//send sms infobip
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
                 "destinations": `${PhoneNumber}`,
                 "from": "SecureGo",
                 "text": `Hello,\n\nYour OTP Code is ${code} !`
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

}

export default RegisterDetails