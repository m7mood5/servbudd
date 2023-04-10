import { Button, Grid, TextField } from '@mui/material'
import { useState } from 'react'
import { Box } from '@mui/system'
import style from "../../styles/Btn.module.css"


export default function Input({ showToastMessage }) {
    const [input, setInput] = useState({ firstName: "", lastName: "", phone: "", comment: "", email: "" })
    const inputHandler = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;
        setInput((prev) => ({ ...prev, [inputName]: inputValue }))
    }

    const formHandler = (e) => {
        e.preventDefault();
        setInput({ firstName: "", lastName: "", comment: "", phone: "", email: "" })
    }
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={formHandler}
        >
            <Grid container alignItems='center' my={4} >
                <Grid item xs={12} sm={6} data-aos='fade-right'>
                    <TextField
                        required
                        name="firstName"
                        value={input.firstName}
                        id="outlined-required"
                        label="First Name"
                        type="text"
                        onChange={inputHandler}
                        style={{backgroundColor:"#FFFFFF"}}
                    />
                </Grid>
                <Grid item xs={12} sm={6} data-aos='fade-right'>
                    <TextField
                        required
                        name="lastName"
                        value={input.lastName}
                        placeholder='Last Name'
                        type="text"
                        onChange={inputHandler}
                        style={{backgroundColor:"#FFFFFF"}}
                    />
                </Grid>
                <Grid item xs={12} sm={6} data-aos='fade-right'>
                    <TextField
                        required
                        name="phone"
                        value={input.phone}
                        id="outlined-required"
                        label="phone"
                        type="text"
                        onChange={inputHandler}
                        style={{backgroundColor:"#FFFFFF"}}
                    />
                </Grid>
                <Grid item xs={12} sm={6} data-aos='fade-right'>

                    <TextField
                        required
                        name="email"
                        value={input.email}
                        id="outlined-required"
                        label="Email"
                        type="email"
                        onChange={inputHandler}
                        style={{backgroundColor:"#FFFFFF"}}
                    />
                </Grid>
                <Grid item xs={12} sm={6} data-aos='fade-right'>

                    <TextField
                        label="Your Message"
                        name="comment"
                        value={input.comment}
                        rows={3}
                        multiline
                        onChange={inputHandler}
                        style={{backgroundColor:"#FFFFFF"}}

                    />
                </Grid>
                <Grid item xs={12} sm={6} data-aos='fade-right'>

                    <Box
                        sx={{ margin: "auto", alignItems: "center", justifyContent: "center", display: "flex", border: "none", backgroundColor: 'transparent' }}
                    >
                        <Button className={style.cbutton} type='submit' onClick={showToastMessage}>Send Your Message</Button>
                    </Box>

                </Grid>
            </Grid>
            <div>
            </div>

        </Box>
    )
}
