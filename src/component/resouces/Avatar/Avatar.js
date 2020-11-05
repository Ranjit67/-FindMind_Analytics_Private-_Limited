import React from 'react';
import {Avatar} from '@material-ui/core';


 function Avata(props) {
 

  return (
    <div>
      <Avatar alt="Remy Sharp" key={1} src={props.img} />
     
    </div>
  );
}
export default Avata;