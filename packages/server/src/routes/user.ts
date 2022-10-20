import express, { Request, Response } from "express";
import { saveUser, getUserById } from "../services/user-service";
import { authUser, generateToken } from "../services/auth"
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
        const token = generateToken(req.body.full_name)
        res.status(200).json({ token })
      } catch (e) {
        res.sendStatus(400).send(`Error: ${e}`)
      }
    }    
}) 

userRouter.post("/login", async (req: Request<UserItem>, res: Response<any>) => {
  const {email, password} = req.body

  const userExists = await UserModel.findOne({ email });
  
  if(userExists){
    const validPassword = await bcrypt.compare(password, userExists.password)
    if(validPassword){
      try {
        const token = generateToken(userExists.full_name)
        res.status(200).json({token})
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

userRouter.get("/getuser", authUser, async (req: Request, res: Response<any>) => {
  const username = req.body

  try {
    const userInfo = await getUserById(username.username)
    if(userInfo){
      res.status(200).send(userInfo)
    }
  } catch (error) {
    res.status(403).send(error)
  }
})
