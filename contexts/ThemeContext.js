/* eslint-disable global-require */
import { createContext } from "react";

const initValues = {
    theme: {},
    setDarkMode: () => {},
};

const ThemeContext = createContext(initValues);

export default ThemeContext;
