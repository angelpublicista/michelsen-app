import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Logo from './../../assets/img/logo_blanco.png';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import {Link, withRouter} from 'react-router-dom';

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
    paper: {
      height: "100vh",
      borderRadius: "0px",
      backgroundColor: theme.palette.primary.dark,
      color: "#d7d7d7"
    },

    imgBrand:{
        width: "80%",
        padding: theme.spacing(2),
        '& img':{
            width:"100%"
        }
    },

    menuItem:{
        padding: theme.spacing(2)
    },

    iconSidebar:{
        color: "#d7d7d7"
    }
});
function SidebarContent(props){
    const classes = useStyles();
    const {history} = props;

    return(
        <aside className="sidebar-menu">
            <Paper className={classes.paper}>
                <div className={classes.imgBrand}>
                    <img src={Logo} />
                </div>
                <MenuList>
                    <MenuItem onClick={()=> history.push('/mis-creditos')} className={classes.menuItem}>
                        <ListItemIcon>
                            <CreditCardIcon className={classes.iconSidebar}/>
                        </ListItemIcon>
                        <Typography variant="inherit">Mis créditos</Typography>
                    </MenuItem>
                    
                    <MenuItem onClick={()=> history.push('/mi-perfil')} className={classes.menuItem}>
                        <ListItemIcon>
                            <PersonOutlineOutlinedIcon className={classes.iconSidebar}/>
                        </ListItemIcon>
                        <Typography variant="inherit">Mi Perfil</Typography>
                    </MenuItem>
                    <MenuItem onClick={()=> history.push('/informacion')} className={classes.menuItem}>
                        <ListItemIcon>
                            <InfoOutlinedIcon className={classes.iconSidebar}/>
                        </ListItemIcon>
                        <Typography variant="inherit">Información</Typography>
                    </MenuItem>
                </MenuList>
                <MenuItem onClick={props.onLogout} className={classes.menuItem}>
                        <ListItemIcon>
                            <ExitToAppOutlinedIcon className={classes.iconSidebar}/>
                        </ListItemIcon>
                        <Typography variant="inherit">Salir</Typography>
                </MenuItem>
            </Paper>
        </aside>
    );
}

export default withRouter(SidebarContent);