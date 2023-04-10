import { useState, useEffect } from 'react'
import { Paper, Tab, Tabs, Typography } from '@mui/material'
import Aos from 'aos'
import 'aos/dist/aos.css'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import ButtonBase from '@mui/material/ButtonBase';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});


export default function SliderP({ customers }) {
    const [value, setValue] = useState(0)

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    const handleChange = (newValue) => {
        setValue(newValue)
    }
    return (

        <section style={{
            padding: "3rem 0",
            backgroundColor: "#f9fcf5",
            position: "relative",
            borderRadius:"0 0 20% 20%"
        }}>
            <Typography
                variant='h4'
                color='#152425'
                textAlign='center'
                sx={{
                    fontSize: {
                        xs: 'h5.fontSize',
                        md: 'h4.fontSize',
                    },
                    fontWeight: '700',
                }}
                data-aos='zoom'
            >
            What our cu<span style={{ backgroundColor: "#effad9", borderRadius: "100%" }}>stom</span>ers are say
            </Typography>


            <Tabs
                TabIndicatorProps={{ style: { backgroundColor: 'transparent' } }}
                sx={{ ml: { md: 0, lg: 4, xl: 17 }, mb: 15, mt: 15 }}
                value={value}
                onChange={handleChange}
                variant='scrollable'
                scrollButtons='auto'
                aria-label='projects'
                data-aos='fade-right'
            >
                {customers.map((el) => (
                    <Tab
                        key={el.id}
                        disabled
                        icon={
                            <Paper
                                sx={{
                                    p: 2,
                                    margin: 'auto',
                                    maxWidth: 500,
                                    flexGrow: 1,
                                    backgroundColor: "#FAFAFA"
                                }}
                            >
                                <Grid container spacing={2}>
                                    <Grid item>
                                        <Img alt="avatar" src={`/imgs/${el.image}`} sx={{ width: 128, height: 128, borderRadius: "50%" }} />
                                    </Grid>
                                    <Grid item xs={12} sm container>
                                        <Grid item xs container direction="column" spacing={2}>
                                            <Grid item xs>
                                                <Typography gutterBottom variant="subtitle1" >
                                                    {el.name}
                                                </Typography>
                                                <Typography variant="body3" color="#152425">
                                                    {el.desc}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        }
                    />
                ))}
            </Tabs>
        </section>
    )
}