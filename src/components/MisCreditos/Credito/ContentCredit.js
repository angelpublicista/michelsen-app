import React from 'react';
import { makeStyles, createMuiTheme  } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Button, CardHeader } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Link, withRouter} from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';

const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#275385',
        dark: '#001B3D',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      textAlign: "center"
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    cardHeader:{
        backgroundColor: theme.palette.primary.main,
        color: "#fff",
        textAlign: "center",
    },
    pos: {
      marginBottom: 12,
    },
  });

  function createData(mesCuota, vlrPagar, estado, fhVenc) {
    return { mesCuota, vlrPagar, estado, fhVenc};
  }

  const rows = [
    createData('1', "$3.000.000", "En Mora", "24/03/2020"),
    createData('2', "$3.000.000", "En Mora", "24/03/2020"),
    createData('3', "$3.000.000", "En Mora", "24/03/2020"),
    createData('4', "$3.000.000", "En Mora", "24/03/2020"),
    createData('5', "$3.000.000", "En Mora", "24/03/2020"),
    createData('6', "$3.000.000", "En Mora", "24/03/2020"),
  ];

function ContentCredit(props){
    const classes = useStyles();
    const {history, match} = props;

    return(
        <div className="content-section content-credits">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TableContainer component={Paper}>
                        <CardHeader title={"PLAN DE PAGOS Cod." + match.params.id} className={classes.cardHeader}></CardHeader>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>MES / CUOTA</TableCell>
                                <TableCell align="right">VALOR A PAGAR</TableCell>
                                <TableCell align="right">ESTADO</TableCell>
                                <TableCell align="right">FECHA LÍMITE PAGO</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.mesCuota}>
                                <TableCell component="th" scope="row">{row.mesCuota}</TableCell>
                                <TableCell align="right">{row.vlrPagar}</TableCell>
                                <TableCell align="right">{row.estado}</TableCell>
                                <TableCell align="right">{row.fhVenc}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
            <Grid container direction="row" justify="space-between" alignItems="center" spacing={5}>
                <Grid item>
                    <Button
                      onClick={()=>history.goBack()}
                      startIcon={<ArrowBackIosIcon />} 
                      variant="outlined" 
                      color="primary">
                        REGRESAR
                    </Button>
                </Grid>
                <Grid item>
                    <Button startIcon={<PictureAsPdfIcon/>} variant="contained" color="primary">
                        DESCARGAR PDF
                    </Button>
                </Grid>
                
            </Grid>
        </div>
    );
}

export default withRouter(ContentCredit);