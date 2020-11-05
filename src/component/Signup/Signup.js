import React from "react";
import Home from "../resouces/Home/Home";
import Input from "../resouces/Inputfield/Input";
import Checkbox from "../resouces/Checkbox/Checkbox";
import "./Signup.css";

const Signup=()=>{
    return(<Home>

<div className="login">
              
                <h1 className="header">Sign up!</h1>
                <Input 
    name="Username"
    placeholder="Enter Name"
    />

    <Input 
    name="Email Address"
    placeholder="Enter Email Address"
    />
    <Input 
    name="Password"
    placeholder="Password"
    />
    </div>

    <div className="fotter"> 

    <div className="ft"><Checkbox /></div><div className="ftp"> <p>I accept the term & condition.</p></div>

  
        </div>
<div> <button className="but" type="button">Log in</button> </div>

    </Home>);
}
export default Signup;