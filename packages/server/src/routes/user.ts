import express, { Request, Response } from "express";
import saveUser from "../services/user-service";
import { generateToken } from "../services/auth"
const { UserModel } = require("../models/user-repository")
const bcrypt = require("bcrypt");

const userRouter = express.Router();

export default userRouter;


userRouter.post("/create", async (req: Request, res: Response) => {
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

userRouter.post("/login", async (req: Request, res: Response) => {
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