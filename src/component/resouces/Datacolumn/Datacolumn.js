import React from "react";
import  {RadioButtonUnchecked, EditOutlined, NotificationsNoneOutlined, CheckCircleOutlined} from "@material-ui/icons";


import "./Datacolumn.css";

const Datacolumn=(props)=>{
   const [toggle,setToggle]= React.useState(false);
    
    return(
    <div className="meaner">
        <div className="dynamicData">
            {(props.dataTitle.titleValue) ? <CheckCircleOutlined
            className="emptyc"
            style={{color: "rgb(55, 189, 90)"}}
            />
        :
        <RadioButtonUnchecked  className="emptyc" />
        }

    

<p className={(props.dataTitle.titleValue) ? "pdata tempclass": "pdata" }
onClick={()=>{
   
    (props.dataTitle.titleValue)&&setToggle(!toggle)
}}

>{props.dataTitle.title} </p>

<div onClick={()=>{
        props.view(props.uni);
    }}
>
{toggle ?  <NotificationsNoneOutlined className="editer" /> :
<EditOutlined  className="editer" />
}
        </div>
</div>




{toggle && 
    <div className="smallpara">
<p> {props.dataTitle.titleValue}</p>
<button className="dbut">{props.dataTitle.date} </button>
</div>
}


</div>

    );
}
export default Datacolumn;