import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "./page/Welcome";
import Home from './page/Home'
import MembersInfo from "./contents/members/MembersInfo";

//import Welcome from "./pages/Welcome";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} /> 
          <Route path="/home" element={<Home />} /> 

          <Route path="/members/:id" element={<MembersInfo />} /> 
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
