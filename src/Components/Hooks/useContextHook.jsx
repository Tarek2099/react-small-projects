import { useContext } from "react";
import { MyContext } from "../../Context/MyContext";

export const useContextHook = () => {
  return useContext(MyContext);
};
