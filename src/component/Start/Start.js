import React from "react";
import {BrowserRouter,Route} from "react-router-dom";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import Taskbar from "../Taskbar/Taskbar";

const Start=()=>{
    return(<BrowserRouter>
   
        <Route exact path="/">
     <Login />
        </Route>
         <Route path="/signup">
    <Signup />
           </Route>
        <Route path="/taskbar">
    <Taskbar />
              </Route>
                 {/* <Route path="/profile">
                 <Profile />
                 </Route> */}
      
        </BrowserRouter>

    );
}
export default Start;