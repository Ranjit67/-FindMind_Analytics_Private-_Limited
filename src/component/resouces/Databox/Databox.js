import React, {useState} from "react";
import {MoreVert} from '@material-ui/icons';
import Addcircle from "../Addcircle/Addcircle";
import Datacolumn from "../Datacolumn/Datacolumn";



import "./Databox.css";





const Databox=(props)=>{

    



    const [check,setCheck]=useState(true);
   

const handelClicker=()=>{
    setCheck(!check);
   
}
let h=0;
props.receiver.forEach(element => {
    if(element.titleValue){
        h++;
    }
});

    return(
<div className="data">

    <div className="headercontent">
<h5 className="dataHeader">My Tasks</h5>             
<MoreVert className="dot"/>
</div>

<div className="newdata">
    {check &&  <p>New Data..</p>}
 
<div
onClick={()=>handelClicker()}
>
<Addcircle 
classofc="cirs"
classofadd="adds"
/>  
</div> 
{!check &&  <p style={{marginLeft:"4px"}}>Add a task</p>}


</div>
{}
{(h>0 && !check) && <p className="compelet">compeleted({h})</p> }

{/* map */}
{(!check) && props.receiver.map((e,index)=>{
    console.log(h);
    console.log(index);
return(<Datacolumn 
dataTitle={e}
view={props.handopen}
key={index}
uni={index}
/>)
})
}

{/* <div className="dynamicData">
    <RadioButtonUnchecked  className="emptyc" />

<p className="pdata"
>{props.receiver[0].title} </p>

<div
><Edit  className="editer" /></div>
</div> */}









    </div>
    );
}
export default Databox;