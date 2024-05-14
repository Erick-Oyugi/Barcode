import express from 'express'
const router = express.Router()
import RegisterDetails from '../controller/RegisterDetails.Controller.js'
import getOTPUser from '../controller/OTP/Otp.Controller.js'
import AddProfile from '../controller/AddProfile/AddProfile.Controller.js'
import AddProfileTwo from '../controller/AddProfileTwo/AddProfileTwo.Controller.js'


router.post('/register', RegisterDetails)
router.post('/otp', getOTPUser)
router.post('/add-profile', AddProfile)
router.post('/add-profile-two', AddProfileTwo)


export default router