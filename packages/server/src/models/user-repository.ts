import { Schema, model } from "mongoose";
import { UserItem } from "@my-webshop/shared";
import { userInfo } from "os";
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
  full_name: String,
  email: {type: String, require: true, unique: true},
  phone_number: String,
  address: String,
  password: { type: String, select: false }
});

const UserModel = model<UserItem>("User", UserSchema);

export const saveNewUser = async (user: UserItem): Promise<UserItem | null> => {
  const salt = await bcrypt.genSalt();
  user.password = await bcrypt.hash(user.password, salt)

  const newModel = new UserModel(user);
  newModel.save();
  return newModel;
};

export const getUser = async (email: string | undefined): Promise<UserItem | null> => {
  const userInfo = await UserModel.findOne({ email: email }).select("-password");
  return userInfo
};


export const updatedUser = async (userEmail: string | undefined, newUserInfo: UserItem): Promise<UserItem | null> => {
  const userId = await UserModel.findOne({ email: userEmail });

  return await UserModel.findByIdAndUpdate(userId?._id, 
    {
      full_name: newUserInfo.full_name, 
      email: newUserInfo.email, 
      phone_number: newUserInfo.phone_number,
      address: newUserInfo.address
    }, 
      {new: true})

}

exports.UserModel = UserModel