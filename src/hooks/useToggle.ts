import { useState, useEffect, useCallback } from "react";
import { I_Toggle } from "@types";

type T_UseToggleOption = {
  initialOn?: boolean;
  onToggle?: (onState: boolean) => void;
};

const useToggle = (args: T_UseToggleOption | null): I_Toggle => {
  const { initialOn = false, onToggle } = args as T_UseToggleOption;

  const [onState, setOnState] = useState(initialOn);

  const toggle = useCallback(() => setOnState((prev) => !prev), []);
  const setOn = useCallback(() => setOnState(true), []);
  const setOff = useCallback(() => setOnState(false), []);

  useEffect(() => {
    onToggle && onToggle(onState);
  }, [onState, onToggle]);

  return {
    on: onState,
    setOn,
    setOff,
    toggle,
  };
};

export default useToggle;
