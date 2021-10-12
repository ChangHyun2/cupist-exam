import React from "react";
import styled from "@emotion/styled";
import s from "csd";

import Button from "@UI/Button";

// generic을 사용해서 default와 options의 item 타입을 일치시키는 방법??
interface I_SelectBoxProps {
  defaultValue: number | string | Array<string | number>;
  options: Array<string | number>;
  onSelect: (selected: any) => void;
  optionViewCallback?: (option: string | number) => string;
}

//   https://stackoverflow.com/questions/24665602/scrollintoview-scrolls-just-too-far
const StyledSelectBox = styled.ul`
  li {
    scroll-margin-top: 10px;

    ${s.rowSpaceBetween};

    8.active {
      color: ${s.colors.blue[500]};
    }
  }
`;

const StyledSingleSelectItem = styled.li`
  ${s.bold}
  ${(props: { focused: boolean }) => `
    color: ${props.focused ? s.colors.blue[500] : "black"};
  `}
  padding: 10px 0;
`;
const StyledMultiSelectItem = styled.li``;

export default React.forwardRef<HTMLUListElement, I_SelectBoxProps>(
  function SelectBox(
    { defaultValue, options, onSelect, optionViewCallback, ...rest },
    ref
  ) {
    const defaultRef = React.useRef<HTMLLIElement>(null);

    const [selected, setSelected] = React.useState(
      Array.isArray(defaultValue)
        ? options.map((option) => ({
            option,
            checked: defaultValue.some((value) => value === option),
          }))
        : defaultValue
    );

    React.useEffect(() => {
      setTimeout(() => {
        if (!defaultRef.current) return;

        // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
        defaultRef.current?.scrollIntoView({
          behavior: "smooth",
        });
      }, 50);
    }, []);

    if (typeof selected === "number" || typeof selected === "string") {
      return (
        <StyledSelectBox {...rest}>
          {options.map((option) => (
            <StyledSingleSelectItem
              ref={option === defaultValue ? defaultRef : null}
              focused={option === defaultValue}
              key={option}
              onClick={() => onSelect(option)}
            >
              {optionViewCallback ? optionViewCallback(option) : option}
            </StyledSingleSelectItem>
          ))}
        </StyledSelectBox>
      );
    }

    const handleConfirm = () => {
      console.log("update selected to form context", selected);
      onSelect(selected);
      console.log("updated selected to form context", selected);
    };

    return (
      <StyledSelectBox ref={ref}>
        {selected.map(({ option, checked }) => (
          <StyledMultiSelectItem key={option}>
            <div>
              {optionViewCallback ? optionViewCallback(option) : option}
            </div>
            <label>
              <input
                type="checkbox"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSelected((prev) => {
                    const _prev = prev as Array<{
                      option: string;
                      checked: boolean;
                    }>;

                    return [
                      ..._prev,
                      {
                        option,
                        checked: e.target.checked,
                      },
                    ];
                  })
                }
                checked={checked}
              />
            </label>
          </StyledMultiSelectItem>
        ))}
        <Button fluid onClick={handleConfirm}>
          확인
        </Button>
      </StyledSelectBox>
    );
  }
);
