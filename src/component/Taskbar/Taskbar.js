import React, {Component} from "react";
import Navbar from "./Navbar/Navbar";

import Addcircle from "../resouces/Addcircle/Addcircle";

import Modal from "../resouces/Modal/Modal";
import Databox from "../resouces/Databox/Databox";
import Axios from "axios";

import "./Taskbar.css";


class Taskbar extends Component{
  state={
    data:[
      {      
        title:"Component build",
        titleValue:"",
        date:null
      }
    ],
    operate:{
      regulate : false,
      vender : "",
      tempdata:"",
      numbIndex:""

    },
    profile:""
  };

 
handleOpen=(c)=>{ //dual handler
  console.log(c);
  if(0<=c){
    console.log(this.state.data[c]);
    this.setState({
      operate :{
        regulate : true,
        vender : "mainModal",
        tempdata:this.state.data[c],
        numbIndex:c
      }});
      ;
  } else{
if(c==="transition-modal-title"){
    this.setState({
      operate :{
        regulate : true,
        vender : c
      }
     
    })
  }

  }


}

handleCloser=(e,m)=>{
  this.setState({
    operate:{
      regulate : e,
      vender : m
    }
  })
}

    dataFetch=(data)=>{ //data updateion
      
      this.setState({
        data:[...this.state.data,{
          title:data
        }]
      });
    }

    deletHandler=(id)=>{  //Delet data from data box
    
      const temp=this.state.data;
      temp.splice(id,1);
      this.setState({
        data:temp
      });
    }

    datareceiver=(v,d,id)=>{

      const temp= this.state.data[id];
      temp.titleValue=v;
        temp.date=d;
      const tempdata=this.state.data;
      tempdata[id]=temp;
      this.setState({
        data:tempdata
      })


    
    }
    
    componentDidMount(){
      const v=Math.floor(Math.random() * Math.floor(999)); //random number created
      Axios.get("https://picsum.photos/id/"+v+"/info") //data fetch through axios
      .then((res)=>{
        // console.log(res.data);
        this.setState({
          profile : res.data.download_url
        })
      })
      .catch((err)=>{
        console.log(err);
        return <p>Somethig going wrong. Please check yje internet.</p>
      })
      
    }

render(){
 

    return(<div className="task" >
<Navbar 
url={this.state.profile}

/>


<Databox
receiver={this.state.data}
handopen={this.handleOpen}
/>

<Modal 
sender={this.dataFetch}
cl={this.handleCloser}
reg={this.state.operate}
id={this.state.operate.vender}
delet={this.deletHandler}
modtaker={this.datareceiver}
main={this.state.data}
/>



<div className="iconer">
    <div onClick={()=>{
      let c="transition-modal-title";
      this.handleOpen(c)
    }
    }
    >
<Addcircle 
classofc="cirf"
classofadd="addf"
/>
</div>

</div>


</div>
    );

}
}
export default Taskbar;


