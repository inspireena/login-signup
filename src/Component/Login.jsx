import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import Header from './Header';
function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [erEmail, setErEmail] = useState(false)
    const [erPassword, setErPassword] = useState(false)
    // const [dashSwitch, setDashSwitch] = useState(false)


    const handleEmail = (e) => {
        setEmail(e.target.value)

        const isValidEmail = e.target.value.toLowerCase().match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (!isValidEmail) {
            setErEmail(true)
        }
        else { setErEmail(false) }

    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
        const isValidPass = e.target.value.toLowerCase().match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/);
        if (!isValidPass) {
            setErPassword(true)
        }
        else { setErPassword(false) }
    }
    const handleLogin = () => {
        console.log('email==', email, 'password=', password)
        const arr = localStorage.getItem('users')
        if (arr) {
            const temp = JSON.parse(arr)
            console.log('temp', temp)

            if (temp.some(item => item.email === email.toLowerCase() && item.password === password)) {
                 console.log("loginEmail from login", email)
                 for (let i = 0; i < temp.length; i++) {
                    if (temp[i].email===email) {
                        localStorage.setItem('logged', JSON.stringify(temp[i]))

                    }
                    
                }
                 
                navigate('/dashboard')
            }
            else {
                alert(' UNSuccessful')
            }
        }
        else {
            alert(' UNSuccessful')
        }
    }
    return (
        <>
        
            <div className='login'>
                <Stack spacing={0.3}>
                    <h1>Login Here!</h1>
                    <TextField error={erEmail} helperText={erEmail ? 'incorrect email.' : ' '} id="outlined-basic" label="email" variant="outlined" value={email} onChange={handleEmail} />
                    <TextField error={erPassword} helperText={erPassword ? 'incorrect password' : ' '} id="outlined-basic" label="password" variant="outlined" value={password} onChange={handlePassword} type="password" />
                    <Button disabled={erEmail || erPassword} variant="contained" onClick={handleLogin}>Login</Button>
                    <div>
                        does not have an account?
                        <Link to={`/signup`}>Signup</Link>
                    </div>

                </Stack>

            </div>
        </>
    )
}
export default Login;