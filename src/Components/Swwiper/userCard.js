import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { borderRadius, styled } from '@mui/system'
import { Paper, Tab, Tabs, Typography } from '@mui/material'
import Aos from 'aos'
import 'aos/dist/aos.css'

const CardItem = styled(Paper)(({ theme }) => ({
    position: 'absolute',
    bottom: '-50px',
    left: '50px',
    width: '290px',
    height: '150px',
    textAlign: 'left',
    px: 0.5,
    color: "#152425",
    borderRadius: "2%"
}))

export default function ProjectCards({ user }) {
    const [value, setValue] = useState(0)

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    const handleChange = (newValue) => {
        setValue(newValue)
    }
    return (
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
            {user.map((el) => (
                <Tab
                    key={el.id}
                    disabled
                    icon={
                        <>

                            <CardItem>
                                <Typography
                                    variant='body1'
                                    sx={{
                                        textTransform: 'capitalize',
                                        fontWeight: '700',
                                        ml: 1,
                                    }}
                                >
                                    {el.name}
                                </Typography>
                                <Typography
                                    variant="caption"
                                    display="block"
                                    gutterBottom
                                >
                                    {el.desc}
                                </Typography>
                            </CardItem>
                            <Image
                                src={`/imgs/${el.image}`}
                                width={300}
                                height={400}
                                alt={el.name}
                                style={{ borderRadius: "25%" }}
                            />
                        </>
                    }
                />
            ))}
        </Tabs>
    )
}