import React from 'react';
import { makeStyles, createMuiTheme  } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { CardContent, CardHeader } from '@material-ui/core';
import indigo from '@material-ui/core/colors/indigo';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Link} from 'react-router-dom';

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

export default function ContentCredits(props){
    const classes = useStyles();
    const rows = props.credits;

    return(
        <div className="content-section content-credits">
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <Card className={classes.root + " card-credit"} variant="outlined">
                        <CardHeader title="PRÓXIMO PAGO" className={classes.cardHeader}></CardHeader>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                            El valor de tu próximo pago es
                            </Typography>
                            <Typography variant="h4" component="h2">
                                $350.000
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                            cop
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Card className={classes.root + " card-credit"} variant="outlined">
                        <CardHeader title="ÚLTIMO PAGO" className={classes.cardHeader}></CardHeader>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Tu último pago realizado fue
                            </Typography>
                            <Typography variant="h4" component="h2">
                                $350.000
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                            cop
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Card className={classes.root + " card-credit"} variant="outlined">
                        <CardHeader title="DEUDA ACTUAL" className={classes.cardHeader}></CardHeader>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Tu saldo total actual es de
                            </Typography>
                            <Typography variant="h4" component="h2">
                                $350.000
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                            cop
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

               
                <Grid item xs={12}>
                    <TableContainer component={Paper} className="tableResponsive">
                        <CardHeader title="TODOS MIS CRÉDITOS" className={classes.cardHeader}></CardHeader>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>CÓDIGO</TableCell>
                                <TableCell align="right">VALOR APROBADO</TableCell>
                                <TableCell align="right">ESTADO</TableCell>
                                <TableCell align="right">FECHA VENCIMIENTO</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.NumCrd}>
                                <TableCell component="th" scope="row">
                                    <Link to={"/mis-creditos/credito/"+row.NumCrd}>
                                        {row.NumCrd}
                                    </Link>
                                </TableCell>
                                <TableCell align="right">{row.TltDesembolsadoCrd}</TableCell>
                                <TableCell align="right">{row.EstadoCrd}</TableCell>
                                <TableCell align="right">{row.FchCrd}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </div>
    );
}