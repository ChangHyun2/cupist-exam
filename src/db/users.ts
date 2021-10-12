import { v4 as uuidv4 } from "uuid";
import { I_User, T_Freq3 } from "@types";
import { CatchingPokemon } from "@mui/icons-material";

const IMG_URL = "https://picsum.photos/200/300";
const copyObj = (obj: { [index: string]: any }) =>
  JSON.parse(JSON.stringify(obj));

export const user: I_User = {
  id: uuidv4(),
  name: "김루루",
  nickname: "루루링",
  company: "큐피스트",
  introduction: "안녕하세요",
  thumbnail: IMG_URL,
  age: 20,
  height: 170,
  isOnline: true,
  gender: "female",
  bloodType: "A",
  bodyType: "마른",
  religion: "무교",
  drinkingFreq: 0,
  smokingFreq: 0,
  birthday: {
    yyyy: 19999,
    mm: 10,
    dd: 23,
  },
  location: {
    name: "서울특별시",
    lat: 37.5665,
    long: 126.978,
  },
  education: {
    type: "대학교",
    name: "광운대학교",
  },
  job: "건설",
  lifeStyles: [
    "라이프1",
    "라이프2",
    "라이프3",
    "나만의 라이프1",
    "나만의 라이프2",
  ],
  strengths: ["강점1", "강점3", "강점4", "나만의 강저1", "나마의 강점2"],
  personalities: ["감성적인", "낙천적인", "성실한"],
  race: ["아시아계", "한국인"],
  concerns: ["IT", "스퐃/운동", "인테리어"],
  photos: [IMG_URL, IMG_URL, IMG_URL],
};

export const me: I_User = {
  id: uuidv4(),
  name: "전창현",
  nickname: "창현창현",
  company: "큐피스트",
  introduction: "프론트엔드 개발자입니다.",
  thumbnail: IMG_URL,
  age: 29,
  height: 172,
  isOnline: true,
  gender: "male",
  bloodType: "AB",
  bodyType: "보통",
  religion: "무교",
  drinkingFreq: 0,
  smokingFreq: 0,
  birthday: {
    yyyy: 1993,
    mm: 6,
    dd: 22,
  },
  location: {
    name: "서울특별시",
    lat: 37.5665,
    long: 126.978,
  },
  education: {
    type: "대학교",
    name: "광운대학교",
  },
  job: "없음",
  lifeStyles: [
    "라이프1",
    "라이프2",
    "라이프3",
    "나만의 라이프1",
    "나만의 라이프2",
  ],
  strengths: ["강점1", "강점3", "강점4", "나만의 강저1", "나마의 강점2"],
  personalities: ["감성적인", "낙천적인", "성실한"],
  race: ["아시아계", "한국인"],
  concerns: ["IT", "스퐃/운동", "인테리어"],
  photos: [IMG_URL, IMG_URL, IMG_URL],
};

export const females: Array<I_User> = Array(20)
  .fill(0)
  .map((_, i) => {
    const copied = copyObj(user) as I_User;
    copied.id = uuidv4();
    copied.nickname = `user-${copied.id.slice(0, 5)}`;
    copied.photos = Array(Math.floor(Math.random() * 7) + 1)
      .fill(0)
      .map((_) => user.photos[0]);

    return copied;
  });

export const males: Array<I_User> = Array(20)
  .fill(0)
  .map((_) => {
    const copied = copyObj(user) as I_User;
    copied.gender = "male";
    copied.id = uuidv4();
    copied.nickname = `user-${copied.id.slice(0, 5)}`;
    copied.photos = Array(Math.floor(Math.random() * 7) + 1)
      .fill(0)
      .map((_) => user.photos[0]);
    return copied;
  });
