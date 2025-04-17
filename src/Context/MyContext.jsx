import { createContext } from "react";

// Create the context
export const MyContext = createContext();

// Create a provider component
// export const MyContextProvider = ({ children }) => {
//     const [state, setState] = useState(null);

//     return (
//         <MyContext.Provider value={{ state, setState }}>
//             {children}
//         </MyContext.Provider>
//     );
// };
