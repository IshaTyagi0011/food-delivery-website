import React from "react";
import {BrowserRouter , Routes, Route} from "react-router-dom"; 
// import Header from "./Components/Layouts/Header";
// import Footer from "./Components/Layouts/Footer";
// import Layout from "./Components/Layouts/Layout";
import Home from "./Pages/Home/Home"


function App() {
 
  return (
    <BrowserRouter>
    <div>
<Routes>
  <Route path="/" element={<Home/>}/>
  {/* <Route path="/" element={</>}/>
  <Route path="/" element={<Home/>}/> */}

  {/* <Route/>
  <Route/> */}
</Routes>
            
    </div>
    </BrowserRouter>
  );
}

export default App;
