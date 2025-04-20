import React from "react";
import Testimonial from "./Components/Testimonial/Testimonial.jsx";
import ContextProvider from "./Context/MyContext.jsx";

const App = () => {
  return (
    <ContextProvider>
      <div>
        <Testimonial />
      </div>
    </ContextProvider>
  );
};

export default App;
