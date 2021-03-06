
import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
const ManageAllOrder = () => {
    // const {id}=useParams();
    const [manageOrder,setManageOrder]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/addUser')
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
          setManageOrder(data)
        })
    },[])
    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Order</StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
              <StyledTableCell align="right">Address</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
              {/* <StyledTableCell align="right">Status</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {manageOrder.map((row) => (
              <StyledTableRow key={row._id}>
                <StyledTableCell component="th" scope="row">
                  {row?.addUser?.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row?.addUser?.email}</StyledTableCell>
                <StyledTableCell align="right">{row?.addUser?.title}</StyledTableCell>
                <StyledTableCell align="right">{row?.addUser?.price}</StyledTableCell>
                <StyledTableCell align="right">{row?.addUser?.address}</StyledTableCell>
                <Link style={{textDecoration:'none', fontWeight:600}} to={`/updateManageAllOrder/id}`}  ><Button variant="contained">Update</Button></Link>
                <StyledTableCell align="right">{row.Delete}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
};

export default ManageAllOrder;