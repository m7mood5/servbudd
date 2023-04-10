import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Typography } from '@mui/material';
import style from "../../styles/users.module.css"
import UserCard from "./userCard"

function Users({ users }) {
    useEffect(() => {
        Aos.init({ duration: 900 })
    }, [])

    return (
        <section className={style.container}>
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
                success stories
            </Typography>
            <Typography variant='body1' color='#152425' my={2} textAlign='center'>
                You can rest assured that repairs are only performed with your prior approval of the work
            </Typography>
            <UserCard user={users} />
        </section>
    );
}

export default Users;