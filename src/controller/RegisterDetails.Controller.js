
import qrCodeGenerator from 'qrcode'
import RegisterDetailsSchemaData from '../model/RegisterDetail/RegisterDetail.model.js'
import crypto from 'crypto'
import { v4 as uuidv4 } from 'uuid';
import DateTime from 'node-datetime';


const RegisterDetails = async (req, res) => {

let Id = uuidv4();

var dt = DateTime.create();
var formatted = dt.format('Y-m-d H:M:S');
console.log(formatted);


console.log(Id)

const { FirstName, SecondName, PhoneNumber, IdNumber, Floor, Date} = req.body

const value = new RegisterDetailsSchemaData({
        Id: Id,
        FirstName: FirstName,
        SecondName: SecondName,
        PhoneNumber : PhoneNumber,
        IdNumber : IdNumber,
        Floor : Floor,
        Date: formatted
      
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

}

if(PhoneNumber == null){
  res.status(400).json({
    "Validation Error": "PhoneNumber is required"
  })

}

if(Floor == null){
  res.status(400).json({
    "Validation Error": "Floor is required"
  })

}

if(Date == null){
  res.status(400).json({
    "Validation Error": "SecondName is required"
  })

}

else {

try {

qrCodeGenerator.toString( `${value}`, {
    errorCorrectionLevel: 'H',
    type: 'svg'
  }, function(err, data) {
    if (err) throw err;

    res.send(data)
    console.log(data);

  });

}catch(err){

  //  res.status(400).json(err)
   console.log(err)
}

}

}

export default RegisterDetails