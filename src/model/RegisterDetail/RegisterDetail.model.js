
import mongoose from 'mongoose'

const RegisterDetailsSchema = new mongoose.Schema({
    Id: {
        type: String,
        required: true,
      },
      FirstName: {
        type: String,
        required: true,
      },
      SecondName: {
        type: String,
        required: true,
      },
      PhoneNumber: {
        type: Number,
        required: true,
      },

      IdNumber: {
        type: Number,
        required: true,
      },
     
      Floor : {
        type: String,
        required: false,
      },

      SerialNumber :{
        type: String,
        required: false

      },
      CarPlateNumber : {
        type: String,
        required: false
      },

      date: {
        type: String,
        default: Date.now(),
      },

})


const RegisterDetailSchemaData = mongoose.model('qrcodedb', RegisterDetailsSchema)

export default RegisterDetailSchemaData