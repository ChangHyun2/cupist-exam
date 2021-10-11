import { Reducer, useReducer, useEffect } from "react";
import { T_Users } from "@types";
import { getUsers } from "../api/users";

type T_State = {
  status: "idle" | "pending" | "resolved" | "rejected";
  error: Error | null;
  data: T_Users | null;
};

type T_Action = {
  type: "started" | "success" | "error";
  payload?: T_Users | Error;
};

const initialState: T_State = {
  status: "idle",
  data: null,
  error: null,
};

const usersReducer: Reducer<T_State, T_Action> = (state, action) => {
  switch (action.type) {
    case "started": {
      return {
        ...state,
        status: "pending",
      };
    }
    case "success": {
      return {
        ...state,
        status: "resolved",
        data: action.payload as T_Users,
      };
    }
    case "error": {
      return {
        ...state,
        status: "rejected",
        error: action.payload as Error,
      };
    }
    default: {
      throw new Error("not valid action type in usersReducer");
    }
  }
};

const useUsers = (): T_State => {
  const [state, dispatch] = useReducer(usersReducer, initialState);

  useEffect(() => {
    dispatch({
      type: "started",
    });

    getUsers("female")
      .then((users) => {
        dispatch({
          type: "success",
          payload: users,
        });
      })
      .catch((e) => {
        dispatch({
          type: "error",
          payload: e,
        });
      });
  }, []);

  return state;
};

export default useUsers;
