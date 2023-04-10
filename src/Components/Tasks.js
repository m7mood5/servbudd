import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CardTasks from './CardTasks';
import {  Grid } from '@mui/material';
import Image from 'next/image';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Tasks({ tsk }) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={
            {
                width: '60%',
                justifyContent: "center",
                alignItems: "center",
                margin: "auto",
                marginBottom: "100px",
                backgroundColor: "#FFFFFF"
            }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', marginTop: "50px" }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{ width: '100%' }}>
                    <Tab label="New Tasks" sx={{ marginLeft: "50px", color: "#75ad03" }} {...a11yProps(0)} />
                    <Tab label="Recrnt Tasks" sx={{ color: "#75ad03" }}{...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0} key={tsk.id}>
                {tsk.map((el) => (<CardTasks el={el} />))}
            </TabPanel>
            <TabPanel value={value} index={1}>
                {tsk.map((el)=>(
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
                    <Grid item xs={12} sm={3} lg={2} data-aos='fade-right' sx={{ backgroundColor: "transparent", borderRadius: "10px" }}/>
                    <Grid item xs={0} sm={0} lg={0.5} data-aos='fade-right' sx={{ backgroundColor: "transparent" }} />
                </Grid>
                ))}
            </TabPanel>
        </Box>
    );
}
