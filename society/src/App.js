// import React from "react";
// import "./App.css";

// import Home from "./components/Home";
// import ContactForm from "./components/ContactForm";

// import Rooms from "./pages/Rooms";
// import SingleRoom from "./pages/SingleRoom";
// import Error from "./pages/Error";

// import Navbar from "./components/Navbar";

// import { Switch, Route } from "react-router-dom";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route exact path="/rooms/" component={Rooms} />
//         <Route exact path="/rooms/:slug" component={SingleRoom} />
//         <Route exact path="/contact" component={ContactForm} />
//         <Route component={Error} />
//       </Switch>
//     </>
//   );
// }

// export default App;

import "./App.css";
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthProvider } from './components/auth'
import Navbar from './components/Navbar'
import Home from "./components/Home";
// import Rooms from "./pages/Rooms";
// import SingleRoom from "./pages/SingleRoom";
import ContactForm from "./components/ContactForm";
import Login from "./components/Login"
import About from "./components/About"
import Register from "./components/Register";
import RequireAuth from "./components/requireAuth";
import AddFlat from "./components/AddFlat";
import AddImage from "./components/AddImage";
import MyFlats from "./components/MyFlats";
import ForgotPassword from "./components/ForgotPassword";
import Test from "./components/test";
import AllFlats from "./components/AllFlats";
import FetchFlatDetail from "./components/FetchFlatDetail";
import BookFlat from "./components/BookFlat";
import Alert from "./components/Alert";
import { useState } from "react";
import Role from "./components/Role";



export default function App() {
  const [alert,setAlert] = useState(null);

  const showalert = (message,type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000)
  }
   
  return (
    <div>
      <AuthProvider>
        <Navbar/>
        <Alert alert={alert}/>
        <Routes>
         <Route exact path="/home" element={<RequireAuth><Home/></RequireAuth>} />
         <Route exact path="/selectrole" element={<RequireAuth><Role/></RequireAuth>} />
         <Route exact path="/rooms" element={<RequireAuth><AllFlats/></RequireAuth>} />
         <Route exact path="/rooms/:slug" element={<RequireAuth><FetchFlatDetail showalert={showalert}/></RequireAuth>} />
         <Route exact path="/contact" element={<RequireAuth><ContactForm/></RequireAuth>} />
         <Route exact path="/About" element={<RequireAuth><About/></RequireAuth>} />
         <Route exact path="/addflat" element={<RequireAuth><AddFlat showalert={showalert}/></RequireAuth>} />
         <Route exact path="/addImage/:slug" element={<RequireAuth><AddImage showalert={showalert}/></RequireAuth>} />
         <Route exact path="/myflats" element={<RequireAuth><MyFlats showalert={showalert}/></RequireAuth>} />
         <Route exact path="/bookflat/:slug" element={<RequireAuth><BookFlat showalert={showalert}/></RequireAuth>} />
         <Route exact path="/forgotpassword" element={<ForgotPassword showalert={showalert}/>}/>
         <Route exact path="/" element={<Login showalert={showalert}/>}/>
         <Route exact path="/register" element={<Register showalert={showalert}/>} />
         <Route exact path="/test" element={<Test/>} />
         <Route component={Error} />
        </Routes>
      </AuthProvider>
    </div>
  )
}


