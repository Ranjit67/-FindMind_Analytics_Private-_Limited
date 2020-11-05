import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import "./Navbar.css";
import Avatar from "../../resouces/Avatar/Avatar";



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
   app: {
    backgroundColor:"rgba(28, 67, 126, 7)"
   },
  }),
);

export default function Navbar(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      
      <AppBar position="static" className={classes.app}>
        <Toolbar>
          <img className="logo" src="https://photos.angel.co/startups/i/8015431-27d09722407ce3a9be6eb36ba5d5faa2-medium_jpg.jpg?buster=1602232988"
          alt="The picter is not supported."
          />
          <Typography variant="h6" className={classes.title}>
            TasksBoard
          </Typography>
          
            <div>

              <Avatar
              img={props.url}
              />
              {/* <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
            
                color="inherit"
              >
                <AccountCircle />
              </IconButton> */}
             
            </div>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
