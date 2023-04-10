import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Button, Grid } from '@mui/material';
import Image from 'next/image';
import style from "../styles/Btn.module.css"
import CloseIcon from '@mui/icons-material/Close';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CardTasks({ el }) {
    const showToastMessage = () => {
        toast.success('Your request is pending ⏳', {
            position: toast.POSITION.TOP_RIGHT
        });

    }

    const deleteBtn = (id) => {
        el.filter((item) => item.id !== id)
    }


    return (
        <>
            <ToastContainer />
            <Grid container alignItems='center' my={10} spacing={2} sx={{ backgroundColor: " rgb(250, 250, 250)", borderRadius: "30px" }} >

                <Grid item xs={0} sm={0} lg={0.5} data-aos='fade-right' sx={{ backgroundColor: "transparent" }} />

                <Grid item xs={12} sm={5} lg={5} data-aos='fade-right' >
                    <Image src={`/imgs/${el.image}`} alt={el.name} width={150} height={150} style={{ borderRadius: "50%" }} />
                </Grid>
                <Grid item xs={12} sm={4} lg={4} data-aos='fade-right' sx={{ backgroundColor: "transparent", borderRadius: "10px" }}>

                    <Typography
                        variant='body1'
                        sx={{
                            textTransform: 'capitalize',
                            fontWeight: '700',
                            ml: 1,
                        }}
                    >
                        Name: <span style={{ color: "#726dfe", margin: "1px" }}>{el.name}</span>
                    </Typography>
                    <Typography
                        variant='body1'
                        sx={{
                            textTransform: 'capitalize',
                            fontWeight: '700',
                            ml: 1,
                        }}
                    >
                        Task: <span style={{ color: "#726dfe", margin: "1px" }}>{el.task}</span>
                    </Typography>
                    <Typography
                        variant='body1'
                        sx={{
                            textTransform: 'capitalize',
                            fontWeight: '700',
                            ml: 1,
                        }}
                    >
                        Price: <span style={{ color: "#726dfe", margin: "1px" }}>{el.price}</span>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={3} lg={2} data-aos='fade-right' sx={{ backgroundColor: "transparent", borderRadius: "10px" }}>

                    <Box
                        sx={{ margin: "auto", alignItems: "center", justifyContent: "center", display: "flex", border: "none", backgroundColor: 'transparent' }}
                    >
                        <Button className={style.cbutton} onClick={showToastMessage} ><DoneOutlineIcon /></Button>
                        <Button className={style.cbutton} onClick={()=>{deleteBtn()}} ><CloseIcon /></Button>
                    </Box>
                </Grid>
                <Grid item xs={0} sm={0} lg={0.5} data-aos='fade-right' sx={{ backgroundColor: "transparent" }} />
            </Grid>
        </>
    );
}


