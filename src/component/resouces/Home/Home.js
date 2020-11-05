import React, {Component} from "react"
import "./Home.css";


class Home extends  Component{
   
 render(){
   
  

        return(<div>
            <section>
            <div className="bd">

            
  
{this.props.children}
 

            </div>
            </section>
        </div>)
    }
}

export default Home;