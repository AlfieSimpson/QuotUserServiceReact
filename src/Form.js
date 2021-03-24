import './Form.css'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';
import DisablableButton from './DisablableButton.js'
import {useState} from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));

function Form(){

    const classes = useStyles();

    const [userIdState, setUserIdState] = useState("");
    const [clientIdState, setClientIdState] = useState("");
    const [nameState, setNameState] = useState("");
    const [emailState, setEmailState] = useState("");
    const [roleState, setRoleState] = useState("");

    function isValid(){
        return userIdState !== undefined && userIdState !== ""
                && clientIdState !== undefined && clientIdState !== "";
    }

    const handleUserIdChange = name => event => {
        setUserIdState(event.target.value );
    };
    const handleClientIdChange = name => event => {
        setClientIdState(event.target.value );
    };
    const handleNameChange = name => event => {
        setNameState(event.target.value );
    };
    const handleEmailChange = name => event => {
        setEmailState(event.target.value );
    };
    const handleRoleChange = name => event => {
        setRoleState(event.target.value );
    };

    function saveUser(){

        const userToSave = {
            id: {
                userId: userIdState,
                clientId: clientIdState
            },
            metadata: {
                name: nameState,
                email: emailState,
                role: roleState
            }
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userToSave)
        };

        fetch('http://localhost:8080/users/', requestOptions);
    }

    function deleteUser(){
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        };

        fetch('http://localhost:8080/users/'+userIdState+"/"+clientIdState, requestOptions);
    }


    return (
        <div className="formContainer">
            <Container>
                <form className={classes.root} >
                    <div>
                        <TextField label="User Id" value={userIdState} onChange={handleUserIdChange()}/>
                        <TextField label="Client Id" value={clientIdState} onChange={handleClientIdChange()}/>
                    </div>
                    <hr></hr>
                    <div>
                        <TextField label="Name" value={nameState} onChange={handleNameChange()}/>
                        <TextField label="Email" value={emailState} onChange={handleEmailChange()}/>
                        <TextField label="Role" value={roleState} onChange={handleRoleChange()}></TextField>
                    </div>
                </form>
                <DisablableButton variant="contained" color="primary" text="Save" disabled={isValid()} clickMethod={saveUser}>
                </DisablableButton>    
                <DisablableButton variant="contained" color="secondary" text="Delete" disabled={isValid()} clickMethod={deleteUser}>
                </DisablableButton>    
            </Container>
        </div>
    );
}

export default Form;