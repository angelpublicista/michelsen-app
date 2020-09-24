import React from 'react';
import { makeStyles, createMuiTheme  } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { CardContent, CardHeader, IconButton } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Alert, AlertTitle } from '@material-ui/lab';
import {withRouter} from 'react-router-dom';
import VisibilityIcon from '@material-ui/icons/Visibility';
import jsPDF from 'jspdf';
import moment from 'moment';
import 'moment/locale/es';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import {BeatLoader} from 'react-spinners';



// Create styles

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
    }
  });

function ContentCredits(props){
    const classes = useStyles();
    const {history, credits, saldo, data, creditState} = props;
    const rows = credits;


    const generatePDF = () => {
        moment.locale('es');
        let doc = new jsPDF('landscape');
        let fechaActual = moment().format("DD MMMM YYYY");
        let horaActual = moment().format('HH:mm')
        

        doc.setFontSize(12)
        doc.text(20, 20, 'MIS CRÉDITOS - FUNDACIONES MICHELSEN');

        doc.setFontSize(9)
        doc.text(20, 30, `Fecha: ${fechaActual}`);
        doc.text(20, 35, `Hora: ${horaActual}`);
        doc.text(20, 40, `Nombre: ${data.NomCln + " " + data.PrApellidoCln}`);
        doc.text(20, 45, `Email: ${data.emailCln}`);

        //Encabezados tabla
        //doc.line(20, 56, 100, 56); 
            
        doc.text(20, 62, 'Código');
        doc.text(60, 62, 'Valor Aprobado');
        doc.text(120, 62, 'Pagado');
        doc.text(160, 62, 'Estado');
        doc.text(200, 62, 'Fecha vencimiento');

        let numero_inicial_fila = 65

        for (const item of rows) {
            numero_inicial_fila = numero_inicial_fila + 10
            doc.text(20, numero_inicial_fila, `${item.NumCrd}`)
            doc.text(60, numero_inicial_fila, `${item.TtlDesembolsadoCrd}`)
            doc.text(120, numero_inicial_fila, `${item.TtlAbonadoCapitalCrd}`)
            doc.text(160, numero_inicial_fila, `${item.EstadoCrd}`)
            doc.text(200, numero_inicial_fila, `${item.FchCrd}`)
        }

        doc.save('MIS CRÉDITOS  - Fund. Michelsen.pdf')
    }

    const handleInfoUser = () =>{

        switch (creditState) {
            case "START_GET_CREDIT_USER_BY_ID":
                return(
                    <div className="loader-page">
                        <BeatLoader
                            color="#275385"
                            loading={true}
                        />
                    </div>
                )
                break;
            
            case "COMPLETE_GET_CREDIT_USER_BY_ID":

                return(
                    <React.Fragment>
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
                                        {saldo}
                                    </Typography>
                                    <Typography className={classes.pos} color="textSecondary">
                                    cop
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
            
                    
                        <Grid item xs={12} id="tabla-creditos">
                            <TableContainer component={Paper} className="tableResponsive" >
                                <CardHeader title="TODOS MIS CRÉDITOS" className={classes.cardHeader}></CardHeader>
                                <Table className={classes.table} aria-label="simple table">
                                    <TableHead>
                                    <TableRow>
                                        <TableCell>CÓDIGO</TableCell>
                                        <TableCell align="center">VALOR APROBADO</TableCell>
                                        <TableCell align="center">PAGADO</TableCell>
                                        <TableCell align="center">ESTADO</TableCell>
                                        <TableCell align="center">FECHA VENCIMIENTO</TableCell>
                                        <TableCell align="center">ACCIONES</TableCell>
                                    </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    {rows.map((row) => (
                                        <TableRow key={row.NumCrd}>
                                        <TableCell component="th" scope="row">
                                            <Button color="primary" onClick={()=>history.push("/mis-creditos/credito/"+row.NumCrd)}>
                                                {row.NumCrd}
                                            </Button>
                                        </TableCell>
                                        <TableCell align="center">{row.TtlDesembolsadoCrd}</TableCell>
                                        <TableCell align="center">{row.TtlAbonadoCapitalCrd}</TableCell>
                                        <TableCell align="center">
                                            <Alert severity={row.severity}>
                                                {row.EstadoCrd}
                                            </Alert>
                                        </TableCell>
                                        <TableCell align="center">{row.FchCrd}</TableCell>
                                        <TableCell align="center">
                                            <IconButton color="primary" 
                                                onClick={()=>history.push("/mis-creditos/credito/"+row.NumCrd)}
                                                title="ver"
                                            >
                                                <VisibilityIcon/>
                                            </IconButton>  
                                        </TableCell>
                                        </TableRow>
                                    ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                onClick={generatePDF}
                                color="primary"
                                startIcon={<PictureAsPdfIcon/>}
                                variant="contained"
                            >
                                DESCARGAR PDF
                            </Button>
            
                        </Grid>
                    </React.Fragment>
                        
                    )

                break;
        
            case "ERROR_GET_CREDIT_USER_BY_ID":

                return(
                    <Grid item xs={12}>
                        <Alert severity="error">
                            <AlertTitle>¡VAYA!</AlertTitle>
                            No tienes créditos registrados o no podemos acceder a tu información
                        </Alert>
                    </Grid>
                )

                break;
        }
    }

    return(
        <div className="content-section content-credits">
            <Grid container spacing={2} justify="center">
                {handleInfoUser()}
            </Grid>
        </div>
    );
}

export default withRouter(ContentCredits);