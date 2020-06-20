import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Avatar, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, desig, country, admin, remove) {
  return { name, desig, country, admin, remove };
}

const rows = [
  createData('Adam Whitemans', 'CEO & Founder', 'Italy', '', 'Remove'),
  createData('Nell McCoy', 'Senior Marketing Manager', 'United States', 'Make Admin', 'Remove'),
  createData('Ann Huff', 'CTO e Co-Founder', 'Germany', 'Make Admin', 'Remove'),
];

export default function MembersComp() {
  const classes = useStyles();

  return (
    <>
    <div style={{textAlign:'right',margin:'20px'}}>
    <Button variant="contained"  style={{backgroundColor:'green',color:'white'}}><AddIcon/> Add</Button>
    </div>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell align='left'> </TableCell>
            <TableCell align='left'> </TableCell>
            <TableCell align='left'> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
               <TableCell align='left'><Avatar alt={row.name} src="/static/images/avatar/1.jpg" /></TableCell>
              <TableCell  align='left'>{row.name}</TableCell>
              <TableCell  align='left'>{row.desig}</TableCell>
              <TableCell align="right">{row.country}</TableCell>
              <TableCell align="right">{row.admin}</TableCell>
              <TableCell align="right">{row.remove}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <div style={{textAlign:'right',margin:'20px'}}>
    <Button variant="contained" color="primary">Save</Button>
    </div>
    
    </>
  );
}

