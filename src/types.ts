import { v4 as uuidv4 } from "uuid";

export type T_Female = "female";
export type T_Male = "male";
export type T_URL = string;

export type T_NormalJob =
  | "사업가"
  | "아르바이트"
  | "없음"
  | "자영업"
  | "준비 중";
export type T_PublicJob = "공무원" | "군무원" | "군인" | "의경";
export type T_EducationJob =
  | "교육직"
  | "연구직"
  | "지식 분야 관련직"
  | "통계 관련직";
export type T_BusinessJob = "경영" | "사무" | "경리";
export type T_AnalysisJob = "기획" | "통계" | "게임" | "광고";
export type T_ManufactureJob = "건설" | "전자/전기" | "인테리어" | "조경";
export type T_Job =
  | T_NormalJob
  | T_PublicJob
  | T_EducationJob
  | T_BusinessJob
  | T_AnalysisJob
  | T_ManufactureJob;

export type T_EducationType =
  | "대학교"
  | "고등학교"
  | "전문대"
  | "석사"
  | "박사"
  | "기타";

export interface I_Education {
  type: T_EducationType;
  name: string;
}

export type T_Freq3 = 0 | 0.5 | 1;

export type T_Personality =
  | "도도한"
  | "도발적인"
  | "주도적인"
  | "활밣한"
  | "단순한"
  | "성실한"
  | "감성적인"
  | "조용한"
  | "애교있는"
  | "수줍은"
  | "낙천적인"
  | "정직한"
  | "친절한"
  | "엉뚱한"
  | "털털한"
  | "웃긴";

export type T_BodyType =
  | "마른"
  | "슬림 근육"
  | "보통"
  | "근육질"
  | "통통"
  | "우람";

export type T_Religion = "무교" | "힌두교" | "불교" | "기독교" | "천주교";

export type T_Race =
  | "한국인"
  | "라틴계"
  | "아시아계"
  | "아랍인"
  | "중국인"
  | "태국인";

export type T_BloodType = "A" | "B" | "O" | "AB";

export type T_Concern = "스퐃/운동" | "인테리어" | "IT" | "자기계발";

export type T_Gender = "female" | "male";

export interface I_BirthDay {
  yyyy: number;
  mm: number;
  dd: number;
}

export interface I_Location {
  name: string;
  lat: number;
  long: number;
}

export interface I_User {
  id: string;
  name: string;
  nickname: string;
  company?: string;
  introduction?: string;
  thumbnail: T_URL;
  age: number;
  height: number;
  isOnline: boolean;
  gender: T_Gender;
  bloodType: T_BloodType;
  bodyType: T_BodyType;
  religion: T_Religion;
  drinkingFreq: T_Freq3;
  smokingFreq: T_Freq3;
  birthday: I_BirthDay;
  location: I_Location;
  education: I_Education;
  job: T_Job;
  lifeStyles: Array<string>;
  strengths: Array<string>;
  photos: Array<T_URL>;
  personalities: Array<T_Personality>;
  race: Array<T_Race>;
  concerns: Array<T_Concern>;
}

export type T_Users = Array<I_User>;
export type T_RecommendedUsers = Array<I_User | Array<I_User>>;

export interface I_Toggle {
  on: boolean;
  setOn: () => void;
  setOff: () => void;
  toggle: () => void;
}
