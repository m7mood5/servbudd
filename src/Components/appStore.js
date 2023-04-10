import { useEffect } from 'react'
import Image from 'next/image'
import { Container, Grid, Typography } from '@mui/material'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function AppStore() {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <Container maxWidth='lg'>
            <Grid container alignItems='center' my={12} spacing={2}>
                <Grid item xs={12} sm={6} data-aos='fade-right'>
                    <Image
                        src={'/imgs/phone.png'}
                        width={360}
                        height={365}
                        alt='phone'
                    />
                </Grid>
                <Grid item xs={12} sm={6} data-aos='fade-right'>
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
                        }}
                        my={1}
                    >
                        Discover The New Survbud App
                    </Typography>

                    <Typography color='#95b359'>
                        JUST LEAVE IT TO US!
                    </Typography>

                    <Typography variant='body1' color='#152425' my={2}>
                        Service Center has been in operation in San Diego since 1982.
                        We are a family-owned and family-run business,
                        which means customers receive more care than at a franchise or large corporation
                    </Typography>
                    <Grid container alignItems='center' my={4} >
                        <Grid item xs={6} sm={6} data-aos='fade-right'>
                            <Image
                                src={'/imgs/playstore.png'}
                                alt='playstore'
                                width={140}
                                height={43}
                            />
                        </Grid>
                        <Grid item xs={6} sm={6} data-aos='fade-right'>
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