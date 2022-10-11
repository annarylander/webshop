import { UserItem } from "@my-webshop/shared";
import { saveNewUser } from "../models/user-repository"

export const saveUser = async (newUser: UserItem): Promise<any> => {
  
  await saveNewUser(newUser);
};

export default saveUser;