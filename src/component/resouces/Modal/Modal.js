import React, { useState } from "react";
import Addcircle from "../Addcircle/Addcircle";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Sidecont from "../Sidcont/Sidecont";


import "./Modal.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
     alignItems: "center",
      justifyContent: "center",
      paddingTop:"0 !important",
    },
    
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "none !important",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      marginBottom: "4px !important",
      outline: 'none'
      
    }
  })
);

const Moda= (props)=>{

      const classes = useStyles();
    const [v,setv] = useState();
    const [d,setd] = useState();

    const vc=(e)=>{
      setv(e)
    }
    const dc=(e)=>{
      setd(e)
    }

let modalBody=null;

if(props.id=== "transition-modal-title"){
  modalBody=( (props.reg.regulate)?
  <div>

    <p className="mpl">
      <input type="text" placeholder="New List"
      onChange={(e)=>{
        setTitle(e.target.value);
      }}
      /></p> 
    <div className="mci"
    onClick={()=>{
      props.sender(title);
      modalBody=null;
      props.cl(false,props.reg.regulate.vender);
    }}
    >
      <Addcircle 
classofc="cirt"
classofadd="addt"
/>
</div>

</div> :null
);
} 



  if(props.id==="mainModal") {

console.log(props.reg);
  modalBody=((props.reg.regulate)?
  
  <Sidecont
    data={props.reg}
    closetag={props.cl}
    deleter={props.delet}
    modreceiver={props.modtaker}
    all={props.main}
    vf ={vc}
    df={dc}
    />: null
   
  ); 
}









const [title,setTitle] =  useState();
  return(
  
  <div>



<div>
      


      <Modal
        aria-labelledby={props.id}
        className={classes.modal}
        open={props.reg.regulate}
        onClose={()=>{
          modalBody=null;
          props.modtaker(v,d,props.reg.numbIndex);
                 props.cl(false,props.reg.vender);
        }}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={props.reg.regulate}>
         <div className={classes.paper}>
     
        <div id={props.id}>

{modalBody}

</div>
      </div>
      
        
        </Fade>
      </Modal>
    </div>

  </div>)
}

export default Moda;