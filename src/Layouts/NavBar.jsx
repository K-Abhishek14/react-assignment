import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core';
import ComputerIcon from '@material-ui/icons/Computer';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SpeedIcon from '@material-ui/icons/Speed';
import EditIcon from '@material-ui/icons/Edit';
import userimg from '../Assets/imgs/Abhishek.jpg'

const styles = theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
   
});

export class NavBar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Navbar className='Navbar' variant='light' expand='lg' sticky='top'>
        <Container>
         
            <Navbar.Brand className='titleContiner'>
              <div className={classes.root}>
                <Typography> < SpeedIcon />Dashboard</Typography>
                <Typography> <ComputerIcon />Websites</Typography>
                <Typography> <EditIcon />Templates</Typography>
                <Typography> <HelpOutlineIcon />Help</Typography>
                <Avatar alt="Sandra.T" src={userimg}   style={{marginLeft:'700px'}}/>
                <Typography>Sandra.T</Typography>
              </div>
            </Navbar.Brand>
        </Container>
      </Navbar >
    )
  }
}

export default NavBar = withStyles(styles, { withTheme: true })(NavBar);
