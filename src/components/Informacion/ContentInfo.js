import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PhoneIcon from '@material-ui/icons/Phone';
import BusinessIcon from '@material-ui/icons/Business';
import MailIcon from '@material-ui/icons/Mail';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(20),
      marginLeft: theme.spacing(2),
      borderBottom: "1px solid #ccc",
      paddingBottom: theme.spacing(1)
    },

    paper:{
        padding: theme.spacing(3)
    }
  }));


export default function ContentInfo(){
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return(
        <div className="content-section content-info">
            <Grid container>
                <Grid item xs={12} sm={12}>
                    <Paper className={classes.paper}>
                        <Typography variant="h5" component="h3" className={classes.heading}>Información de Contacto</Typography>
                        <List className={classes.root}>
                            <ListItem>
                                <ListItemAvatar>
                                <Avatar>
                                    <WhatsAppIcon />
                                </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Whatsapp" secondary="(+57) 3508737119" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                <Avatar>
                                    <PhoneIcon />
                                </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Teléfono" secondary="(1) 2492265" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                <Avatar>
                                    <BusinessIcon />
                                </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Dirección" secondary="Calle 73 N° 10-10 - Ofic. 210" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                <Avatar>
                                    <MailIcon />
                                </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Email" secondary="comercialart@fundacionesmichelsen.org" />
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>

                </Grid>
            </Grid>
        </div>
    )
}