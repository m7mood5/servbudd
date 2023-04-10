import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Carde({ servicess }) {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <Container maxWidth="lg">
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} key={servicess.id} >
                    {servicess.map((el) => (
                        <Grid xs={4}>
                            <Item>
                                <Card sx={{ width: 345, height: 345 }}>
                                    <CardMedia
                                        sx={{ height: 170 }}
                                        image={`/imgs/${el.image}`}
                                        title="green iguana"
                                    >
                                        <span
                                            style={{
                                                padding: " 0.8rem 1rem",
                                                backgroundColor: "rgb(21 36 37 / 55%)",
                                                borderRadius: "2rem",
                                                textTransform: "capitalize",
                                                fontWeight: 600,
                                            }}
                                        >pro {el.pros}</span>
                                    </CardMedia>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" style={{ textTransform: "capitalize" }}>
                                            <Link href={`services/${el.id}`}>
                                                {el.title}
                                            </Link>

                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {el.desc}
                                        </Typography>
                                    </CardContent>
                                    <p>Mahmoud Barakat</p>
                                </Card>
                            </Item>
                        </Grid>
                    ))}

                </Grid>
            </Box>
        </Container>
    );
}