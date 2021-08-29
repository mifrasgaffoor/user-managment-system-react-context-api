import react, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  users: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const AddUser = (user) => {
    console.log(user, "file");
    dispatch({
      type: "ADD_USER",
      payload: user,
    });
  };

  const deleteUser = (id) => {
    dispatch({
      type: "DELETE_USER",
      userId: id,
    });
  };

  return (
    <GlobalContext.Provider value={{ users: state.users, AddUser, deleteUser }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
