import React from "react";
import { Route } from "react-router-dom";
import Link from "@UI/Link";
import styled from "@emotion/styled";
import s from "csd";
import Drawer from "@UI/Drawer";
import Divider from "@UI/Divider";
import Modal from "@UI/Modal";
import TitleDialog from "@UI/TitleDialog";
import { useToggle, useAuth } from "@hooks";
import SelectBox from "@components/SelectBox";
import { I_BirthDay, I_Location, I_Education, I_User, I_Toggle } from "@types";
import { freq3ToStr } from "@constant";
import {
  bloodType,
  bodyType,
  educationType,
  freq3,
  personalities,
  religion,
  race,
  jobs,
} from "@db/options";

interface I_ProfieEditorDrawerProps {
  toggler: I_Toggle;
}

// const formContext = React.createContext({});

const StyledProfileEditor = styled.div`
  p {
    ${s.rowCenter}
    ${s.h12}
    ${s.mb1}
    color: ${s.colors.grey[500]};
    span {
      margin-left: 3px;
      color: ${s.colors.grey[900]};
    }
  }

  ul {
    ${s.h14}
    padding: 15px;
    list-style: none;
  }

  li {
    ${s.mb1}
    ${s.row}

    h3 {
      width: 30%;
    }
  }
`;

interface I_ListItemProps {
  fieldName: string;
  label: string;
  valueViewCallback?: (arg: any) => string;
  me: I_User;
  options?: any;
  DialogContent?: any;
  // DialogContent에 React.FC를 할당할 경우 에러가 발생하는 이유?
}

const ListItem = ({
  fieldName,
  label,
  valueViewCallback,
  me,
  DialogContent,
  options,
}: I_ListItemProps) => {
  const _me = me as any;
  const fieldValue = _me[fieldName];
  const toggler = useToggle({ initialOn: false });

  const path = `/user/edit/${fieldName}`;

  return (
    <Link
      to={path}
      onClick={(e) => {
        e.stopPropagation();
        toggler.setOn();
      }}
    >
      <li key={fieldName}>
        <h3>{label}</h3>
        <div>
          {fieldValue !== undefined
            ? valueViewCallback
              ? valueViewCallback(fieldValue)
              : fieldValue
            : "입력해주세요."}
        </div>
        {DialogContent ? (
          <Route path={path}>
            {toggler.on ? (
              <Modal toggler={toggler} title={label}>
                {({ closeDrawer }) => (
                  <TitleDialog title={label}>
                    <DialogContent
                      defaultValue={me.height}
                      options={options}
                      optionViewCallback={valueViewCallback || undefined}
                      onSelect={(selected: any) => {
                        closeDrawer();
                        console.log(selected);
                      }}
                    />
                  </TitleDialog>
                )}
              </Modal>
            ) : null}
          </Route>
        ) : null}
      </li>
    </Link>
  );
};

export default function ProfileEditorDrawer({
  toggler,
}: I_ProfieEditorDrawerProps) {
  const me = useAuth();

  console.log(me);

  return toggler.on ? (
    <Drawer title="프로필 수정" toggler={toggler} from="bottom">
      {({ closeDrawer }) => {
        return (
          <StyledProfileEditor>
            <div>image upload</div>
            <Divider />
            <p>
              다양한 매력을 보여줄 수 있는 사진을 올려주세요
              <span>더 알아보기</span>
            </p>
            <Divider />
            <ul>
              {[
                {
                  fieldName: "nickname",
                  label: "닉네임",
                },
                {
                  fieldName: "gender",
                  label: "성별",
                  valueViewCallback: (gender: "male" | "female") =>
                    gender === "male" ? "남성" : "여성",
                },
                {
                  fieldName: "birthday",
                  label: "생일",
                  DialogContent: () => <div>{"!!생일 선택 박스!!"}</div>,
                  valueViewCallback: (birthday: I_BirthDay) =>
                    [birthday.yyyy, birthday.mm, birthday.dd].join("-"),
                },
                {
                  fieldName: "location",
                  label: "위치",
                  valueViewCallback: (location: I_Location) => location.name,
                },
              ].map(
                ({ fieldName, label, valueViewCallback, DialogContent }) => (
                  <ListItem
                    DialogContent={DialogContent}
                    key={fieldName}
                    me={me}
                    fieldName={fieldName}
                    label={label}
                    valueViewCallback={valueViewCallback}
                  />
                )
              )}
              <Divider />
              {[
                {
                  fieldName: "height",
                  label: "키",
                  valueViewCallback: (height: number) => height + "cm",
                  DialogContent: SelectBox,
                  options: Array(81)
                    .fill(0)
                    .map((_, i) => i + 120),
                },
                {
                  fieldName: "bodyType",
                  label: "체형",
                  DialogContent: SelectBox,
                  options: bodyType,
                },
              ].map(
                ({
                  fieldName,
                  label,
                  options,
                  valueViewCallback,
                  DialogContent,
                }) => (
                  <ListItem
                    options={options}
                    key={fieldName}
                    DialogContent={DialogContent}
                    me={me}
                    fieldName={fieldName}
                    label={label}
                    valueViewCallback={valueViewCallback}
                  />
                )
              )}
              <Divider />
              {[
                {
                  fieldName: "company",
                  label: "직장",
                },
                {
                  fieldName: "job",
                  label: "직업",
                  options: jobs,
                },
                {
                  fieldName: "education",
                  label: "학력",
                  valueViewCallback: (education: I_Education) => education.name,
                  DialogContent: SelectBox,
                  options: educationType,
                },
              ].map(
                ({
                  fieldName,
                  label,
                  options,
                  valueViewCallback,
                  DialogContent,
                }) => (
                  <ListItem
                    options={options}
                    DialogContent={DialogContent}
                    key={fieldName}
                    me={me}
                    fieldName={fieldName}
                    label={label}
                    valueViewCallback={valueViewCallback}
                  />
                )
              )}
              <Divider />
              {[
                {
                  fieldName: "personalities",
                  label: "성격",
                  valueViewCallback: (value: string) => value + " ",
                  DialogContent: SelectBox,
                  options: personalities,
                },
                {
                  fieldName: "religion",
                  label: "종교",
                  DialogContent: SelectBox,
                  options: religion,
                },
                {
                  fieldName: "drinkingFreq",
                  label: "음주",
                  valueViewCallback: freq3ToStr,
                  DialogContent: SelectBox,
                  options: freq3,
                },
                {
                  fieldName: "smokingFreq",
                  label: "흡연",
                  valueViewCallback: freq3ToStr,
                  DialogContent: SelectBox,
                  options: freq3,
                },
                {
                  fieldName: "bloodType",
                  label: "혈액형",
                  DialogContent: SelectBox,
                  options: bloodType,
                },
                {
                  fieldName: "race",
                  label: "인종",
                  DialogContent: SelectBox,
                  options: race,
                },
              ].map(
                ({
                  fieldName,
                  label,
                  options,
                  valueViewCallback,
                  DialogContent,
                }) => (
                  <ListItem
                    options={options}
                    DialogContent={DialogContent}
                    key={fieldName}
                    me={me}
                    fieldName={fieldName}
                    label={label}
                    valueViewCallback={valueViewCallback}
                  />
                )
              )}
              <Divider />
            </ul>
          </StyledProfileEditor>
        );
      }}
    </Drawer>
  ) : null;
}
