import { T_Freq3 } from "@types";

const freq3 = ["안 함", "가끔", "함"];

export const freq3ToStr = (percentOf3: T_Freq3): string => {
  return freq3[percentOf3 * 2];
};
