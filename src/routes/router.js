import express from 'express'
const router = express.Router()
import RegisterDetails from '../controller/RegisterDetails.Controller.js'
import getOTPUser from '../controller/OTP/Otp.Controller.js'


router.post('/register', RegisterDetails)
router.post('/otp', getOTPUser)


export default router