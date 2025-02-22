import { DB_LOGIN, DB_PASSWORD } from './PASSWORDS.js' //You should create your file with datas

import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import { serverError, serverLog } from './utils/serverLog.js'
import {
  createServiceValidation,
  loginValidation,
  registerValidation,
  sendMessageValidation,
  updateProfileValidation,
} from './validations.js'
import checkAuth from './utils/checkAuth.js'
import * as UserController from './controllers/UserController.js'
import * as ServiceController from './controllers/ServicesController.js'
import * as UserMessagesController from './controllers/UserMessagesController.js'

mongoose
  .connect(
    `mongodb+srv://${DB_LOGIN}:${DB_PASSWORD}@cluster0.rouuumh.mongodb.net/roskadastr?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => serverLog('connected to DB'))
  .catch((err) => serverError('connected error to DB!!! Error: ' + err))

const app = express()
const PORT = 4000

app.use(express.json())
app.use(cors())

//#region User
// Registration user (sign up)
app.post('/user/reg', registerValidation, UserController.reg)
// user sign in
app.post('/user/login', loginValidation, UserController.login)
// show user profile
app.get('/user/me', checkAuth, UserController.getMeInfo)
// user edit his profile
app.patch(
  '/user/updateMe',
  checkAuth,
  updateProfileValidation,
  UserController.updateMyProfile
)
// user delete his profile
app.delete('/user/removeMe', checkAuth, UserController.removeMyProfile)
//#endregion

//#region UserServices
// get my services
app.get(
  '/service',
  checkAuth,

  ServiceController.getMyServices
)
// get my service
app.get('/service/:id', checkAuth, ServiceController.getMyOneService)
// creating a new service for user
app.post(
  '/service',
  checkAuth,
  createServiceValidation,
  ServiceController.addMyService
)
// edit my one service
app.patch(
  '/service/:id',
  checkAuth,
  createServiceValidation,
  ServiceController.editMyService
)
//#endregion

//#region messages
// get my msgs
app.get('/messages', checkAuth, UserMessagesController.getMessages)
// create msg
app.post(
  '/messages',
  checkAuth,
  sendMessageValidation,
  UserMessagesController.sendMessage
)
//#endregion

app.listen(PORT, (err) => {
  if (err) {
    return console.log(err)
  }
  serverLog('Server link: http://localhost:' + PORT)
})
