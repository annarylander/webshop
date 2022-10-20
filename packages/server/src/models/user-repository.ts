import { Schema, model } from "mongoose";
import { UserItem } from "@my-webshop/shared";
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
  full_name: String,
  email: {type: String, require: true, unique: true},
  phone_number: String,
  address: String,
  password: String
});

const UserModel = model<UserItem>("User", UserSchema);

export const saveNewUser = async (user: UserItem): Promise<void> => {
  const salt = await bcrypt.genSalt();
  user.password = await bcrypt.hash(user.password, salt)

  const newModel = new UserModel(user);
  newModel.save();
};

export const getUser = async (username: string): Promise<UserItem | null> => {
  const userInfo = await UserModel.findOne({ full_name: username });
  return userInfo
};


exports.UserModel = UserModel