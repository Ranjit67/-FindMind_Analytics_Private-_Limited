import React, {useEffect} from "react";

import {DeleteOutline,Close} from '@material-ui/icons';
import "./Sidecont.css";

const Sidecont=(props)=>{
    // props.getindex
  const [date,setDate]= React.useState(false);
  const [textareavalue,setTextareavalue] = React.useState();
  const [dater,setDater]= React.useState();
useEffect(()=>{
    setDater(props.data.tempdata.date);

    setTextareavalue(props.data.tempdata.titleValue);
},[]);
  
    
    

    return(
        <div className="pop">
  <div className="mobody">

  <div className="deldiv"
  onClick={()=>{
   
      props.closetag(false,"transition-modal-title");
      props.modreceiver(textareavalue,dater,props.data.numbIndex);
    }}
  >
  <Close
  className="cloico"
  />
        </div>
      
  
  <div className="clodiv"
  onClick={()=>{
      props.deleter(props.data.numbIndex);
      props.closetag(false,"transition-modal-title");
  }

  }
  >
  <DeleteOutline
  className="delico"
  />
  </div>
  </div>

  <h6 className="popheader"> {props.data.tempdata.title} </h6>
 <div className="ttar">
     <textarea type="text" value={ textareavalue} rows="4" cols="40" placeholder="Add details"
     onChange={(e)=>{
        props.vf(e.target.value);
        setTextareavalue(e.target.value);
     }}
     />
     </div>

  <div className="dateform">
      <p
      className="adddate"
      onClick={()=>{
        setDate(!date);
      }}
      >
          Add date</p>
          { date && <input type="text" value={dater} id="adddate" name="adddate"
          onChange={(e)=>{
             props.df(e.target.value);
            setDater(e.target.value);
          }}
          />   }
  
  </div>
  <div className="swift">
      <p>Move to another list.</p>
      </div>

        </div>
    )
}
export default Sidecont;