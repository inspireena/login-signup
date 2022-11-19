import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
function Signup() {
    const navigate = useNavigate();
    const [erName, setErName] = useState(false)
    const [erEmail, setErEmail] = useState(false)
    const [erPhone, setErPhone] = useState(false)
    const [erPassword, setErPassword] = useState(false)
    //    const [erCPassword, setErCPassword] = useState(false)
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [password, setPassword] = useState()
    const [cPassword, setCPassword] = useState()
    //handle Name
    const handleName = (e) => {
        setName(e.target.value)
        const isValidName = e.target.value.toLowerCase().match(/^[a-zA-Z ]{3,30}$/);
        if (!isValidName) {
            setErName(true)
        }
        else { setErName(false) }
    }
    //handle Email
    const handleEmail = (e) => {
        setEmail(e.target.value)
        const isValidEmail = e.target.value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (!isValidEmail) {
            setErEmail(true)
        }
        else { setErEmail(false) }
    }
    //handle Phone
    const handlePhone = (e) => {
        setPhone(e.target.value)
        const isValidPhone = e.target.value.toLowerCase().match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
        if (!isValidPhone) {
            setErPhone(true)
        }
        else { setErPhone(false) }
    }
    //handle Password
    const handlePassword = (e) => {
        setPassword(e.target.value)
        const isValidPassword = e.target.value.toLowerCase().match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/);
        if (!isValidPassword) {
            setErPassword(true)
        }
        else { setErPassword(false) }
    }
    //handle Confirm Password
    const handleCPassword = (e) => {
        setCPassword(e.target.value)
    }
    //handle Click
    const handleClick = () => {
        console.log('name', name, ', phone=', phone, ', email=', email, ', password =', password)
        const dbData = localStorage.getItem('users')
        const userData = { name, phone, email: email.toLowerCase(), password }
        if (!dbData) {
            const arr = [];
            arr.push(userData);
            localStorage.setItem('users', JSON.stringify(arr))
            navigate("/login");
        }
        else {
            const arr = JSON.parse(dbData);
            if (arr.some(item => item.email === email.toLowerCase())) {
                alert('Account Exists!!')
            } else {
                arr.push(userData);
                localStorage.setItem('users', JSON.stringify(arr))
                navigate("/login");
            }
        }
       
    }
    return (
        <>
        
            <div className='signup' >
                <Stack spacing={0.3}>
                    <h1> Signup Here! </h1>
                    <TextField error={erName} helperText={erName ? 'Incorrect name.' : ' '} value={name} onChange={handleName} id="outlined-basic" label="Name" variant="outlined" />

                    <TextField error={erEmail} helperText={erEmail ? 'Incorrect email.' : ' '} value={email} onChange={handleEmail} id="outlined-basic" label="email" variant="outlined" />

                    <TextField error={erPhone} helperText={erPhone ? 'Incorrect phone.' : ' '} value={phone} onChange={handlePhone} id="outlined-basic" label="Phone" variant="outlined" />


                    <TextField error={erPassword} helperText={erPassword ? 'Incorrect passoword.' : ' '} value={password} onChange={handlePassword} type="password" id="outlined-basic" label="Password" variant="outlined" />

                    <TextField error={password !== cPassword} helperText={password !== cPassword ? 'password not matched.' : ' '} value={cPassword} onChange={handleCPassword} type="password" id="outlined-basic" label="Confirm Password" variant="outlined" />

                    <Button variant="contained" disabled={erName || erEmail || erPhone || erPassword} onClick={handleClick} >Create Account</Button>
                    <div>
                        Already have an accout?
                        <Link to={`/login`}>Login here</Link>
                    </div>
                </Stack>


            </div>
        </>
    )
}
export default Signup;