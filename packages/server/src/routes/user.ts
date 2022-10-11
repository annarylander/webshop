import express, { Request, Response } from "express";
import saveUser from "../services/user-service";
import { generateToken } from "../services/auth"
const { UserModel } = require("../models/user-repository")

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
