import { useEffect } from 'react'
import { Link, Typography } from '@mui/material'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Tosks from '@/Components/Tasks'


export default function Task(props) {

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
                        TASKS
                    </Typography>
                    <Typography variant='body1' color='#152425' my={2} textAlign='center'>
                        <span>
                            <Link href='/home' style={{
                                textDecoration: "none",
                                color: "#75ad03"
                            }}>Home</Link> - Tasks
                        </span>
                    </Typography>
                </div>
            </section>
            <Tosks tsk={props.tasks}/>
        </>
    )
}



export async function getStaticProps() {
    const res = await fetch("http://localhost:3000/api/tasks")
    const tasks = await res.json()
    return {
        props: {
            tasks: tasks
        }
    }
}