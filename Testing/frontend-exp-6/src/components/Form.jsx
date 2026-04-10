import {Stack,Box,TextField, Button,FormControlLabel,Checkbox,FormHelperText, Container} from '@mui/material'
import React ,{useState} from "react";

const Formc = ()=>{
const [uname,setUname] = useState("");
const [unameError,setUnameError] = useState(false);
const [email,setEmail] = useState("");
const [emailError,setEmailError] = useState(false);
const [pass,setPass] = useState("");
const [passError,setPassError] = useState(false);
const [agreed, setAgreed] = useState(false);
const [agreedError,setAgreedError] = useState(false);

const handlePass = e=>{
    setPass(e.target.value);
    if(e.target.value.length < 8){
        setPassError(true)
    }
    else {
        setPassError(false)
    }
}

const handleUname = e=>{
    setUname(e.target.value);
    if(e.target.value.length < 5){
        setUnameError(true);
    }
    else {
        setUnameError(false);
    }
}

const handleEmail = e=>{
    setEmail(e.target.value);
    if(e.target.validity.valid){
        setEmailError(false);
    }
    else {
        setEmailError(true);
    }

}
const handleTerms = (e) => {
    setAgreed(e.target.checked);
    setAgreedError(!e.target.checked);
 }

const handleSubmit = (e)=>{
    e.preventDefault();

    const isUnameValid = uname.length >=5;
    const isPassValid = pass.length>=8;
    if(isUnameValid && isPassValid && agreed){
        alert(`Username: ${uname}\n Email: ${email}`)
        // alert('Form Submitted Succes')
    }
   setUnameError(!isUnameValid);
    setPassError(!isPassValid);
    setAgreedError(!agreed);
}
console.log('Form')
    return(
        <>
        <h2>Form Validation using MUI components.</h2>
        <Box component = "form" onSubmit={handleSubmit} >
            <Stack spacing={2}>
                <TextField required label="Username" type='username' value = {uname} onChange={handleUname}
                error = {unameError} 
                helperText={unameError?"Username length must be more than 5": "" }/>

                <TextField required label="Email" type='email' value={email} onChange={handleEmail}
                error={emailError} helperText={emailError?"Please enter valid email": ""
                } />
                <TextField required label="Password" type="password" value={pass}
                onChange={handlePass} error={passError} helperText = {passError?"Password length must be greater than 8": ""} />

                <Box>
                        <FormControlLabel control={
                                <Checkbox   checked={agreed} onChange={handleTerms} 
                                    color={agreedError ? "error" : "primary"}/>
                            }
                            label="I agree to the Terms and Conditions"
                        />
                        {agreedError && (
                            <FormHelperText error >
                                You must agree to the terms to proceed.
                            </FormHelperText>
                        )}
                    </Box>
                

                <Button type="submit" variant='contained' >Submit</Button>
            </Stack>
        </Box>
        <Container sx={{mt:2}}>
            <b>*</b>Required Fields.
        </Container>
        </>
    )
}
export default Formc