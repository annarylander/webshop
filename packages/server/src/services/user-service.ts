import { UserItem } from "@my-webshop/shared";
import { saveNewUser, getUser } from "../models/user-repository"

export const saveUser = async (newUser: UserItem): Promise<any> => {
  await saveNewUser(newUser);
};

export const getUserById = async (username: string): Promise<UserItem | null> => {
  return await getUser(username);
};
