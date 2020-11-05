import React, {Component} from "react"
import { withStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import "./Input.css";


const styles = theme => ({
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 300
      
    },
  
    cssLabel: {
      color: "rgb(50, 168, 82)"
    },
  
    cssOutlinedInput: {
      "&$cssFocused $notchedOutline": {
        borderColor: `white !important`
      }
    },
  
    cssFocused: {
        color: `white !important`,
        textAlign:`center !important`
    },
  
    notchedOutline: {
      borderWidth: "1px",
      borderColor: "rgb(50, 168, 82) !important"
    }
  });

class Input extends  Component{
   
 render(){
   
    const { classes } = this.props;

        return(<div>
            

          
      
            <div className="inputf">
            <TextField

        id="standard-name"
        className="email"
        label={this.props.name}
        placeholder={this.props.placeholder}
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          classes: {
            root: classes.cssLabel,
            focused: classes.cssFocused
          }
        }}
        InputProps={{
          classes: {
            root: classes.cssOutlinedInput,
            focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline
          },
          inputMode: "text"
        }}
      />
      </div>

   

            </div>

        
           )
    }
}

export default withStyles(styles)(Input);