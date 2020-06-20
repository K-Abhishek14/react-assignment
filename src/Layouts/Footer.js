import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Button } from '@material-ui/core';

export class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nav : false
    }
  }
  
  componentDidMount() {
    window.onscroll = () => {
      window.scrollY > 200 ? this.setState({nav : true}) : this.setState({nav: false});
    };
  }
  
   scrollUP = () => {
    window.scrollTo(0, 0);
  };
  
  render() {
    return (
      <div>
        <div
          className={this.state.nav ? `upBtn showBotNav` : `upBtn hideBotNAv`}
          onClick={this.scrollUP}>
          <i className='fas fa-angle-up'></i>
        </div>
        <div className='footer'>
          <Navbar
            className='botNavbar'
            variant='light'
            expand='lg'
            sticky='bottom'>
            <Container>
              <Nav className='mr-auto justify-content-start navWidth'>
              <Button variant="outlined" style={{margin:'5px'}}>Menu</Button>
              <Button variant="outlined" style={{margin:'5px'}}> <i class="fa fa-code" aria-hidden="true"></i>Handoff</Button>
              <Button variant="outlined" style={{margin:'5px'}}> <i class="fa fa-comments" aria-hidden="true"></i> No Comments</Button>
              </Nav>
            </Container>
          </Navbar>
        </div>
      </div>
    )
  }
}

export default Footer
