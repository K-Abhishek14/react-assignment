import React, { Component } from 'react'
import { withStyles } from '@material-ui/core';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

const styles = theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
});


export class NewteamComp extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>

        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <h2 class="form-label" style={{margin:'30px'}}> <PersonOutlineIcon fontSize="large" style={{fontSize:'50px'}}/>New Team</h2>
            </div>
          </div>
        </div>

        <div className={classes.root}>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label class="form-label">Team Name</label>
                <input type="text" id="txtShortDetail" class="form-control" name="shortdetail"
                  formControlName="shortdetail" placeholder="Enter Team Name"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label class="form-label">Primary Email</label>
                <input type="email" id="txtLongDetail" class="form-control" name="longdetail" formControlName="longdetail"
                  placeholder="Enter Primary Email"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label class="form-label">Company Name </label>
                <input type="text" id="txtShortDetail" class="form-control" name="shortdetail"
                  formControlName="shortdetail" placeholder="Enter Company Name"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label class="form-label">Country </label>
                <input type="text" id="txtLongDetail" class="form-control" name="longdetail" formControlName="longdetail"
                  placeholder="Enter Country"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label class="form-label">Password </label>
                <input type="Password" id="txtShortDetail" class="form-control" name="shortdetail"
                  formControlName="shortdetail" placeholder="Enter Password"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label class="form-label">Repeat Password</label>
                <input type="Password" id="txtLongDetail" class="form-control" name="longdetail" formControlName="longdetail"
                  placeholder="Enter Repeat Password"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewteamComp = withStyles(styles, { withTheme: true })(NewteamComp);
