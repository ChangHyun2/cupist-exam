import { I_User, T_Gender } from "@types";
import { timer } from "@utils";
import { females } from "../db/users";
import { males } from "../db/users";

const REQUEST_MS = 300;

export const getUsers = async (gender: T_Gender) =>
  timer(REQUEST_MS).then(() =>
    gender === "male" ? males : gender === "female" ? females : []
  );

export const updateUser = (
  gender: T_Gender,
  userId: string,
  field: string,
  value: any
) =>
  timer(REQUEST_MS).then(() => {
    const users =
      gender === "female" ? females : gender === "male" ? males : undefined;

    if (!users) {
      throw new Error("not correct gender type");
    }

    const idx = users.findIndex((female) => female.id === userId);

    if (idx === -1) {
      throw new Error(`cannot find user with id:${userId}`);
    }

    const newUser: I_User = { ...users[idx], [field]: value };
    users[idx] = newUser;
  });

export const updateFemale = (userId: string, field: string, value: any) =>
  updateUser("female", userId, field, value);

export const updateMale = (userId: string, field: string, value: any) =>
  updateUser("male", userId, field, value);
