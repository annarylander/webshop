import express, { Request, Response } from "express";
import { saveUser, getUserByEmail, updateUser } from "../services/user-service";
import { authUser, generateToken, JwtRequest } from "../services/auth"
import { UserItem } from "@my-webshop/shared";
const { UserModel } = require("../models/user-repository")
const bcrypt = require("bcrypt");

const userRouter = express.Router();

export default userRouter;


userRouter.post("/create", async (req: Request<UserItem>, res: Response<any>) => {
    const {email} = req.body

    const userExists = await UserModel.findOne({ email });
    
    if(userExists){
      res.status(409).send("An account with this email already exist.")
    } else {
      try {
        await saveUser(req.body)
        const token = generateToken(req.body.email)
        res.status(200).send(token)
      } catch (e) {
        res.sendStatus(400).send(`Error: ${e}`)
      }
    }    
}) 

userRouter.post("/login", async (req: JwtRequest<UserItem>, res: Response<string>) => {

  const credentials = req.body

  const userExists = await getUserByEmail(credentials.email)
  
  if(userExists){
    const validPassword = await bcrypt.compare(credentials.password, userExists.password)
    if(validPassword){
      try {
       const token = generateToken(userExists.email)
      
        res.status(200).send(token)
      } catch (e) {
        res.sendStatus(400).send(`Error: ${e}`)
      }
    }else {
      res.status(403).send("Wrong password")
    }
  }else {
    res.status(403).send("No user found with this email")
  }    
})

userRouter.get("/getuser", authUser, async (req: JwtRequest<UserItem>, res: Response<any>) => {

  const user = req.jwt
  try {
    const userEmail = await getUserByEmail(user?.email)
    if(userEmail){
      res.status(200).send(userEmail)
    }
  } catch (error) {
    res.status(403).send(error)
  }
})

userRouter.put("/update", authUser, async (req: JwtRequest<any>, res: Response) => {
  const userEmail = req.jwt?.email
  const newUserInfo = req.body

  try {
    const newUser = await updateUser(userEmail, newUserInfo)
    const token = generateToken(newUser?.email)
    console.log(token, "token")
    res.status(200).send(token)

  } catch (error) {
    res.status(403).send(error)
  }
})