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
      date: {
        type: String,
        default: Date.now(),
      },

})


const RegisterDetailSchemaData = mongoose.model('qrcodedb', RegisterDetailsSchema)

export default RegisterDetailSchemaData