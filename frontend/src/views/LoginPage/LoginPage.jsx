import Button from '@mui/material/Button';
import { TextField } from "@mui/material"; 
import { useState } from 'react';

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
    <>
    <h1>AID KIT</h1>
    <h2>Your medical assistant</h2>
    <form onSubmit={handleSubmit}>
    <TextField 
        id = "username-input"
        onChange={(e)=>setUsername(e.target.value)}
        label="USERNAME OR E-MAIL" 
        variant="outlined"
        error = {usernameError}
    />
    <br/>
    <TextField 
        id = "password-input"
        type = "password"
        onChange={(e)=>setPassword(e.target.value)}
        label="PASSWORD" 
        variant="outlined"
        error = {passwordError}
        />
    <br/>
    <Button type="submit" variant = "contained" >Log In</Button>
    </form>
    </>
    );
}