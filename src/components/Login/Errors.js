import React, {Component} from 'react';
import Alert from '@material-ui/lab/Alert';

class Errors extends Component{
    render(){
        console.log(this.props.validate)
        if (this.props.validate) {
          return(null)
        } else {
            return(
                <div style={{marginTop:"1em"}}>
                   <Alert severity="error">El email o la clave no coinciden. Intenta de nuevo por favor</Alert>
                </div>
            )
        }

    }
}

export default Errors;