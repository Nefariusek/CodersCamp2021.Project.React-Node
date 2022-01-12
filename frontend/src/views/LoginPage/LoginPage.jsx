import Button from '@mui/material/Button';
import { TextField, Typography } from "@mui/material"; 
import { useState } from 'react';
import './LoginPage.scss';

export default function LoginPage () {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setUsernameError(false);
        setPasswordError(false);

        if (username && password){
            console.log(username, password);
            alert('Login is successful');
        } else {
            if (!username){
                setUsernameError(true);
            }
            if (!password){
                setPasswordError(true);
            }
        }
    }

    return (
    <div className='login-page'>
        <div className='login-container'>
            <Typography variant='h1'>AID KIT</Typography>
            <Typography variant='h2'>Your medical assistant</Typography>
            <form className = 'login-form' onSubmit={handleSubmit}>
            <TextField 
                id = "username-input"
                onChange={(e)=>setUsername(e.target.value)}
                label="USERNAME OR E-MAIL" 
                variant="outlined"
                error = {usernameError}
            />
            <TextField 
                id = "password-input"
                type = "password"
                onChange={(e)=>setPassword(e.target.value)}
                label="PASSWORD" 
                variant="outlined"
                error = {passwordError}
                />
            <Button type="submit" variant = "contained" >Log In</Button>
            </form>
            <Button>Create New Account</Button>
        </div>
        <img src='./apteczka.png'/>
    </div>
    );
}