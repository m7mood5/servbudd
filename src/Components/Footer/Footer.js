import { Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import CustomLink from './CustomLinks'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TextField from '@mui/material/TextField';
import style from "../../styles/Btn.module.css"
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
const pages = ["home", "services", "contact", "provider"];
const services = [
    {
        id: 1,
        title: "sewerage",
    },
    {
        id: 2,
        title: "renovation",
    },
    {
        id: 3,
        title: "roofing",
    },
    {
        id: 4,
        title: "sanitary",
    }
]

export default function Footer() {
    const [input, setInput] = useState("email")

    const inputHandler = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;
        setInput((prev) => ({ ...prev, [inputName]: inputValue }))
    }

    const formHandler = (e) => {
        e.preventDefault();
        setInput({ email: "" })
    }

    const showToastMessage = () => {
        toast.success('Sent Successfully 😉', {
            position: toast.POSITION.TOP_RIGHT
        });
    }
    return (
        <Box component='footer' sx={{ backgroundColor: '#152425' }} style={{ borderRadius: " 20% 20% 0 0" }} >
            <Container maxWidth='lg'>
                <Grid container spacing={6} sx={{ pt: 10, pb: 12 }}>
                    <Grid item sm={3} >
                        <Typography variant='body1' fontWeight='700' color='#FFFFFF'>
                            About Survbud
                        </Typography>
                        <Typography
                            variant='body2'
                            color='#BDBDBD'
                            sx={{
                                alignItems: 'top',
                                display: 'flex',
                            }}
                            my={1}
                        >
                            Although sanitary engineering may be most associated with the design of sewers,
                            sewage treatment and waste water treatment facilities,
                            recycling centers, public landfills and other things which are constructed.
                        </Typography><br />
                        <Typography
                            variant='body1'
                            color='#FFFFFF'
                            sx={{
                                alignItems: 'top',
                                display: 'flex',
                            }}
                            my={1}
                            fontWeight='700'
                            mb={1}
                        >
                            Follow Us On
                        </Typography>
                        <Grid container spacing={0} color="#FFFFFF" >
                            <Grid sm={3}><FacebookIcon /></Grid>
                            <Grid sm={3}><InstagramIcon /></Grid>
                            <Grid sm={3}><TwitterIcon /></Grid>
                            <Grid sm={3}><LinkedInIcon /></Grid>
                        </Grid>
                    </Grid>
                    <Grid item sm={3}>
                        <Grid container spacing={3}>
                            <Grid item>
                                <Typography variant='body1' fontWeight='700' color='white'>
                                    QUICK LINKS
                                </Typography>
                                <ul color='#FFFFFF' style={{ borderLeft: "1px solid #BDBDBD" }} >
                                    {pages.map((page) => (
                                        <li>
                                            <CustomLink href={`/${page}`} text={page} />
                                        </li>
                                    ))}
                                </ul>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sm={3}>
                        <Grid container spacing={3}>
                            <Grid item>
                                <Typography variant='body1' fontWeight='700' color='white'>
                                    Popular Services
                                </Typography>
                                <ul color='#FFFFFF' style={{ borderLeft: "1px solid #BDBDBD" }} key={services.id} >
                                    {services.map((el) => (
                                        <li>
                                            <CustomLink href={`/services/${el.id}`} text={el.title} />
                                        </li>
                                    ))}
                                </ul>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sm={3}>
                        <Grid container spacing={3}>
                            <Grid>
                                <Typography variant='body1' fontWeight='700' color="#FFFFFF">
                                    News Letter
                                </Typography>
                                <ul style={{ listStyle: "none", borderLeft: "1px solid #BDBDBD" }}>
                                    <li>
                                        <TextField
                                            required
                                            id="outlined-email"
                                            label="Your Email"
                                            color="success"
                                            placeholder='write your e-mail'
                                            style={{
                                                width: "90%",
                                            }}
                                            name="email"
                                            value={input.email}
                                            onChange={inputHandler}
                                        />
                                    </li>
                                    <li><button className={style.ssbutton} onClick={formHandler}>Follow</button> </li>
                                </ul>
                                <Box sx={{ mt: 8 }}>
                                    <Typography variant='body1' fontWeight='700' color="#FFFFFF" alignItems='center'>
                                        Download Our App
                                    </Typography>
                                    <Grid container alignItems='center' my={4} >
                                        <Grid item xs={6} sm={6} data-aos='fade-right'>
                                            <Image
                                                src={'/imgs/playstore.png'}
                                                alt='playstore'
                                                width={86}
                                                height={26}
                                            />
                                        </Grid>
                                        <Grid item xs={6} sm={6} data-aos='fade-right'>
                                            <Image
                                                src={'/imgs/appstore.png'}
                                                alt='appstore'
                                                width={86}
                                                height={26}
                                            />
                                        </Grid>
                                    </Grid>
                                </Box>


                            </Grid>
                        </Grid>

                        <Grid item sm={12}>
                            <Typography variant='body1' color="#FFFFFF" fontWeight="700"
                                style={{
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderTop: "1px solid #BDBDBD"
                                }}
                            >©2023 survbud.com by M.B</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}