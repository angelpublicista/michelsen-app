import React from 'react';
import { makeStyles, createMuiTheme  } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

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

    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
      secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
  });


export default function ContentCredits(props){

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

    return(
        <div className="content-section content-profile">
             <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant="h5" component="h2">
                                    Información General
                                </Typography> 
                                <br></br>
                            </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="name"
                                        label="Nombres"
                                        variant="outlined"
                                        value="Pepito"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="last-name"
                                        label="Apellidos"
                                        variant="outlined"
                                        value="Pepito"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="mobile-phone"
                                        label="Celular"
                                        variant="outlined"
                                        value="3102767676"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="document"
                                        label="N°. Documento"
                                        variant="outlined"
                                        value="3102767676"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="city"
                                        label="Ciudad"
                                        variant="outlined"
                                        value="Bogotá"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="address"
                                        label="Dirección"
                                        variant="outlined"
                                        value="Calle 123 #45-67"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="email"
                                        label="Email"
                                        variant="outlined"
                                        value="pepito123@gmail.com"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="email"
                                        label="Tel Fijo"
                                        variant="outlined"
                                        value="1234567"
                                        fullWidth
                                    />
                                </Grid>
            </Grid>
        </div>
    );
}