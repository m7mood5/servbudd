import { useEffect } from 'react'
import Image from 'next/image'
import { Container, Grid, Typography } from '@mui/material'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Serv({ srvs }) {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <Container maxWidth='lg' key={srvs.id}>
            <Grid container alignItems='center' my={12} spacing={2}>
                    <Grid  xs={12} sm={6} data-aos='fade-right'>
                        <Image
                            src={`/imgs/${srvs.image}`}
                            width={360}
                            height={365}
                            alt={srvs.title}
                        />
                    </Grid>
                    <Grid  xs={12} sm={6} data-aos='fade-right'>
                        <Typography
                            variant='h5'
                            color='textPrimary'
                            sx={{
                                fontSize: {
                                    xs: 'h6.fontSize',
                                    md: 'h5.fontSize',
                                },
                                fontWeight: '700',
                                color: "#152425",
                                textTransform:"capitalize",
                            }}
                            my={1}
                        >
                            {srvs.title}
                        </Typography>

                        <Typography color='#95b359'>
                            JUST TRY IT WITH US!
                        </Typography>

                        <Typography variant='body1' color='#152425' my={2}>
                            {srvs.desc}
                        </Typography>
                        <Grid container alignItems='center' my={4} >
                            <Grid item xs={4} sm={4} data-aos='fade-right'>
                                <Image
                                    src={'/imgs/playstore.png'}
                                    alt='playstore'
                                    width={140}
                                    height={43}
                                />
                            </Grid>
                            <Grid item xs={4} sm={4} data-aos='fade-right'>
                                <Image
                                    src={'/imgs/appstore.png'}
                                    alt='appstore'
                                    width={140}
                                    height={43}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
            </Grid>
        </Container>
    )
}