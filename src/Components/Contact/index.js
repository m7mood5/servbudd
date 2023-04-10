import { useEffect } from 'react'
import { Container, Grid, Link, Typography } from '@mui/material'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Input from './input'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OfficeDaitels from './officeDaitels'


export default function Contact() {
    const showToastMessage = () => {
        toast.success('Sent Successfully 😉', {
            position: toast.POSITION.TOP_RIGHT
        });
    }

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
                        Contact Us
                    </Typography>
                    <Typography variant='body1' color='#152425' my={2} textAlign='center'>
                        <span>
                            <Link href='/home' style={{
                                textDecoration: "none",
                                color: "#75ad03"
                            }}>Home</Link> - Contact Us
                        </span>
                    </Typography>
                </div>
            </section>
            <Container maxWidth='lg' >
                <ToastContainer />
                <Grid container alignItems='center' my={15} spacing={2} >
                    <Grid item xs={0} sm={0} lg={1} data-aos='fade-right' sx={{ backgroundColor: "transparent" }} />

                    <Grid item xs={12} sm={6} lg={5} data-aos='fade-right' sx={{ backgroundColor: "rgb(250, 250, 250)", borderRadius: "10px" }}>
                        <Typography
                            variant='h3'
                            sx={{
                                fontSize: {
                                    xs: 'h4.fontSize',
                                    md: 'h3.fontSize',
                                },
                                fontWeight: "700"
                            }}
                        >
                            Contact Form
                        </Typography>
                        <Typography variant='body1' color='#75ad03' mt={1} mb={3}>
                            Tell us your message in a problem you encounter.
                        </Typography>
                        <Input showToastMessage={showToastMessage} />
                    </Grid>
                    <Grid item xs={0} sm={0} lg={0.5} data-aos='fade-right' sx={{ backgroundColor: "transparent" }} />
                    <Grid item xs={12} sm={6} lg={5} data-aos='fade-right' sx={{ backgroundColor: "transparent", borderRadius: "10px" }}>
                        <OfficeDaitels />
                    </Grid>
                    <Grid item xs={0} sm={0} lg={0.5} data-aos='fade-right' sx={{ backgroundColor: "transparent" }} />
                </Grid>
            </Container>
        </>
    )
}