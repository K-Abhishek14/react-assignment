import React, { Component } from 'react'
import { NewteamComp } from './NewteamComp'
import SimpleBreadcrumbs from './SimpleBreadcrumbs'
import MembersComp from './MembersComp'
import { withStyles, Paper } from '@material-ui/core';

const styles = theme => ({
  root: {
    marginRight: theme.spacing(5),
    marginLeft: theme.spacing(5),
  },

});

export class MIdSectionContainer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <SimpleBreadcrumbs />
        <NewteamComp />
        <MembersComp />
      </Paper>
    )
  }
}

export default MIdSectionContainer = withStyles(styles, { withTheme: true })(MIdSectionContainer);


