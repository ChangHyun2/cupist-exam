import { v4 as uuidv4 } from "uuid";
import { I_User } from "@types";
import { CatchingPokemon } from "@mui/icons-material";

const copyObj = (obj: { [index: string]: any }) =>
  JSON.parse(JSON.stringify(obj));

const IMG1_URL =
  "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60";

export const user: I_User = {
  id: uuidv4(),
  name: "김루루",
  nickname: "루루링",
  company: "큐피스트",
  introduction: "안녕하세요",
  thumbnail: IMG1_URL,
  age: 20,
  height: 170,
  isOnline: true,
  gender: "female",
  bloodType: "A",
  bodyType: "마른",
  religion: "무교",
  drinkingFreq: 0.5,
  smokingFreq: 1,
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
  photos: [
    "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60",
    "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60",
    "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60",
  ],
};

export const females: Array<I_User> = Array(10)
  .fill(0)
  .map((_, i) => {
    const copied = copyObj(user) as I_User;
    copied.id = uuidv4();
    if (i === 0) {
      copied.name = "sd";
    }
    return copied;
  });

export const males: Array<I_User> = Array(10)
  .fill(0)
  .map((_) => {
    const copied = copyObj(user) as I_User;
    copied.gender = "male";
    copied.id = uuidv4();
    return copied;
  });
