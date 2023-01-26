import GlobalStyle from "../assets/css/GlobalStyle.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "../pages/SignIn/SignIn.js";
import Home from "../pages/Home/index.js";
import { useState } from "react";
import Signup from "../pages/SignUp/SignUp.js";
import LoadingContext from "../configs/contexts/LoadingContext.js";

function App() {
  const [isLoading, setisLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setisLoading }}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </LoadingContext.Provider>
  );
}

export default App;
