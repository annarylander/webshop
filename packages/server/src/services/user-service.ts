import { UserItem } from "@my-webshop/shared";
import { saveNewUser, getUser } from "../models/user-repository"

export const saveUser = async (newUser: UserItem): Promise<any> => {
  await saveNewUser(newUser);
};

export const getUserByEmail = async (email: string | undefined): Promise<UserItem | null> => {
  return await getUser(email);
};
