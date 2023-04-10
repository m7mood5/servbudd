import { useEffect } from 'react'
import { Box, Button, Container, Grid, Link, Typography } from '@mui/material'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from "../../styles/Profile.module.css"
import { useSession, signOut } from "next-auth/react";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ProfileDaitels from './ProfileDetails';


export default function Profile() {
    const { data: session } = useSession()

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <>

            <section style={{
                padding: "3rem 0",
                backgroundColor: "rgb(250, 250, 250)",
                position: "relative",
            }}>

                <div style={{
                    maxWidth: "50rem",
                    margin: " 0 auto",
                    display: "flex",
                    borderRadius: "1rem",
                    textAlign: "center",
                    flexDirection: "column",
                }}>
                    <Typography
                        variant='h3'
                        color='#152425'
                        textAlign='center'
                        sx={{
                            fontSize: {
                                xs: 'h4.fontSize',
                                md: 'h3.fontSize',
                            },
                            fontWeight: '700',
                        }}
                        data-aos='zoom'
                    >
                        Account Settings
                    </Typography>
                    <Typography variant='body1' color='#152425' my={2} textAlign='center'>
                        <span>
                            <Link href='/home' style={{
                                textDecoration: "none",
                                color: "#75ad03"
                            }}>Home</Link> - Account Settings
                        </span>
                    </Typography>
                </div>
            </section>
            <Container maxWidth='lg' >
                <ToastContainer />
                <Grid container alignItems='center' my={15} spacing={2} >
                    <Grid item xs={0} sm={0} lg={1} data-aos='fade-right' sx={{ backgroundColor: "transparent" }} />

                    <Grid item xs={12} sm={6} lg={5} data-aos='fade-right' sx={{ background: "linear-gradient(150deg, #d9dbe2, #808aac 100%, #282d39 0)", borderRadius: "10px" }}>
                        <Typography
                            variant='h5'
                            sx={{
                                fontSize: {
                                    xs: 'h6.fontSize',
                                    md: 'h5.fontSize',
                                    color: "#6C63FF",
                                    alignItems: 'center',
                                    display: 'flex',
                                },
                            }}
                        >
                            MY ProFile <span style={{
                                marginLeft:"15px",
                                alignItems: 'center',
                                display: 'flex'
                            }}><ManageAccountsIcon/></span> 
                        </Typography>
                        <div className={style.media}>
                            <img src={session.user.image} />
                            <div className={style.info}>
                                <h5>{session.user.name}</h5>
                                <h6>{session.user.email}</h6>

                                <Box
                                    sx={{ margin: "auto", alignItems: "center", justifyContent: "center", display: "flex", border: "none", backgroundColor: 'transparent' }}
                                >
                                    <Button className={style.cbutton} onClick={()=>signOut()} >SIGN OUT !!</Button>
                                </Box>
                            </div>
                        </div>

                    </Grid>
                    <Grid item xs={0} sm={0} lg={0.5} data-aos='fade-right' sx={{ backgroundColor: "transparent" }} />
                    <Grid item xs={12} sm={6} lg={5} data-aos='fade-right' sx={{ backgroundColor: "transparent", borderRadius: "10px" }}>
                        <ProfileDaitels/>
                    </Grid>
                    <Grid item xs={0} sm={0} lg={0.5} data-aos='fade-right' sx={{ backgroundColor: "transparent" }} />
                </Grid>
            </Container>
        </>
    )
}