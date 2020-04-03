import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import BgLogin from './../../assets/img/bg-creditos.jpg';
import Logo from './../../assets/img/logo-fundaciones.svg';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailIcon from '@material-ui/icons/Mail';
//import FacebookLogin from "react-facebook-login";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import GoogleLogin from "react-google-login";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Fundaciones Michelsen
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(4),
    backgroundColor: "#fff"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(1, 0, 2),
  },

  signInForm:{
    backgroundImage: "url(" + BgLogin + ")", 
    backgroundSize: "cover", 
    backgroundPosition: "center",
    height: "100vh",
    marginTop: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },

  buttonSocial:{
     width: "100%",
     textAlign: "center",
     border: "none",
     lineHeight: "2em",
     marginTop: theme.spacing(1),
     padding: theme.spacing(1),
     display: "flex",
     flexFlow: "row nowrap",
     justifyContent: "center",
     alignItems: "center",
     backgroundColor: "#1c4a98",
     color: "#fff",
     cursor: 'pointer',
     borderRadius: "3px",
     fontSize: "1em"
  }
}));

export default function SignIn(props) {
  const classes = useStyles();

  return (
    <div className={classes.signInForm} style={{overflow: "hidden"}}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <img src={Logo} width="100%" />
            <form className={classes.form} noValidate>
              <TextField
                onChange={props.handleInputMail}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                onChange={props.handleInputPass}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Clave"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              
              <Grid container alignItems="center">
                <Grid item xs>
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Recuerdame"
                  />
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    Olvidé mi clave
                  </Link>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={props.handleSubmit}
              >
                INICIAR SESIÓN
              </Button>

              <Typography component="p" align="center">
                o inicia sesión con
              </Typography>
              <FacebookLogin
                appId="252175469160651"
                fields="name,email,picture"
                autoLoad={false}
                callback={props.responseFacebook}
                onFailure={props.onFailure}
                render={renderProps => (
                  <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.buttonSocial}
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    <FacebookIcon /> Ingresar con Facebook
                  </Button>
                )}
              />

              <GoogleLogin
                clientId="103638548692-kmi6sbs8qst734kf3at32d6vb0smkgd3.apps.googleusercontent.com"
                autoLoad={false}
                onSuccess={props.responseGoogle}
                onFailure={props.onFailure}
                className={classes.buttonSocial}
                render={renderProps => (
                  <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    color="secondary"
                    className={classes.buttonSocial}
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    <MailIcon /> Ingresar con Google
                  </Button>
                )}
                >
              </GoogleLogin>  
              
            </form>
          </div>
        </Container>
    </div>
  );
}
