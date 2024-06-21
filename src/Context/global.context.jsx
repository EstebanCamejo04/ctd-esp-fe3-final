import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import { reducer } from "../Reducer/Reducer";
import lightTheme from "../Styles/Theme.module.css";
import darkTheme from "../Styles/Theme.module.css";

const ContextGlobal = createContext();

const initialState = {
  list: [],
  favs: JSON.parse(localStorage.getItem("favs")) || [],
  dentistDetail: {},
  theme: lightTheme.light,
  currentDentistIndex: 0,
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { list, favs, theme, dentistDetail, currentDentistIndex } = state;

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(url)
      .then((response) =>
        dispatch({ type: "GET_CHARACTERS", payload: response.data })
      );
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favs));
  }, [favs]);

  const handleChangeTheme = () => {
    dispatch({
      type: "CHANGE_THEME",
      payload: theme == lightTheme.light ? darkTheme.dark : lightTheme.light,
    });
  };

  return (
    <ContextGlobal.Provider
      value={{
        list,
        favs,
        dispatch,
        dentistDetail,
        currentDentistIndex,
        theme,
        handleChangeTheme,
      }}
    >
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal = () => useContext(ContextGlobal);
