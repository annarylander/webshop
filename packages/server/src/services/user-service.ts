import { UserItem } from "@my-webshop/shared";
import { saveNewUser, getUser, updatedUser } from "../models/user-repository"

export const saveUser = async (newUser: UserItem): Promise<any> => {
  await saveNewUser(newUser);
};

export const getUserByEmail = async (email: string | undefined): Promise<UserItem | null> => {
  return await getUser(email);
};

export const updateUser = async (userEmail: string | undefined, newUserInfo: UserItem): Promise<UserItem | null> => {
  return await updatedUser(userEmail, newUserInfo)
}