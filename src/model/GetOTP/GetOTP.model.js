import mongoose from 'mongoose'

const GetOTPSchema = new mongoose.Schema({

      PhoneNumber: {
        type: Number,
        required: true,
      }

})


const GetOTPSchemaData = mongoose.model('otp', GetOTPSchema)

export default GetOTPSchemaData