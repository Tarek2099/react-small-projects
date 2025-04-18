import { createContext, useState } from "react";

// Create the context
export const MyContext = createContext();

// Create a provider component
const ContextProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@gmail.com" },
    { id: 2, name: "Jane Smith", email: "jane@gmail.com" },
    { id: 3, name: "Alice Johnson", email: "alice@gamil.com" },
    { id: 4, name: "Bob Brown", email: "bob@gmail.com" },
  ]);
  return (
    <MyContext.Provider value={{ users, setUsers }}>
      {children}
    </MyContext.Provider>
  );
};
export default ContextProvider;
