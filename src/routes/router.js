import express from 'express'
const router = express.Router()
import RegisterDetails from '../controller/RegisterDetails.Controller.js'


router.post('/register', RegisterDetails)


export default router