import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Addicon from '@material-ui/icons/Add';


const useStyles = makeStyles((theme: Theme) =>
createStyles({
  margin: {
    margin: "0px",
    
  }
}),
);

export default function Addcircle(props) {

 

  const classes = useStyles();

  return (
    <div>
      <div>
        
        <Fab color="secondary" aria-label="add" className={classes.margin+" "+props.classofc}>
          <Addicon className={classes.size+" "+props.classofadd} />
        </Fab>
      </div>
      
    </div>
  );
}
