import { createContext, useReducer } from "react";
import initialState from "../Components/UseReducer/InitialState";
import reducer from "../Components/UseReducer/reducer";

// Create the context
export const MyContext = createContext();

// Create a provider component
const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MyContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
export default ContextProvider;
