

import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const INITIAL_STATE = { outrun: false };

const themeReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE":
            return { outrun: !state.outrun };
        default:
            return state;
    }
};

export const ThemeProvider = (props) => {
    const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);

    return (
        <ThemeContext.Provider value={{ state, dispatch }}>{props.children}</ThemeContext.Provider>
    );
};