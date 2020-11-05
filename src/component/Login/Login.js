import React, {Component} from "react"
import Home from "../resouces/Home/Home";
import Input from "../resouces/Inputfield/Input";
import Checkbox from "../resouces/Checkbox/Checkbox"
import "./Login.css";



class Login extends  Component{
   
 render(){


        return(<Home>

            <div className="login">
              
                <h1 className="header">Log in!</h1>
           

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

    <div className="ft"><Checkbox /></div><div className="ftp"> <p>Remember me.</p></div>

   <div className="forgot">Forgot password?</div>
        </div>
<div> <button className="but" type="button">Log in</button> </div>
            
            
            </Home>)
    }
}

export default React.memo(Login);