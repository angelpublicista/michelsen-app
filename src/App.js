import React from 'react';
import { Route, Router } from 'react-router';
import PropTypes from 'prop-types';
import Login from './views/Login';
import './style.css';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './views/Home';
import MisCreditos from './components/MisCreditos/MisCreditos';
import MiPerfil from './components/MiPerfil/MiPerfil';
import Credito from './components/MisCreditos/Credito/Credito';
import Info from './components/Informacion/Info';
import { makeStyles, createMuiTheme  } from '@material-ui/core/styles';


function App(props) {
  return (
    <Router history={props.history}>
        <div className="App">
            <Route exact path="/" component={Login} />
            <Route exact path="/panel-admin" component={Home} />
            <Route exact path="/mis-creditos" component={MisCreditos} />
            <Route exact path="/mi-perfil" component={MiPerfil} />
            <Route path="/mis-creditos/credito/:id" component={Credito} />
            <Route exact path="/informacion" component={Info}/>
        </div>
    </Router>
  );
}


export default App;
