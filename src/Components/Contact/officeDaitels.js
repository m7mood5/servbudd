import style from "../../styles/daitals.module.css"
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import EmailIcon from '@mui/icons-material/Email';
import FaxIcon from '@mui/icons-material/Fax';
import { Grid, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = [
    {
        id: 1,
        icon: <MyLocationIcon />,
        desc: "16 Mohy El Din Abou El Ezz St. "
    },
    {
        id: 2,
        icon: <PhoneIphoneIcon />,
        desc: "+201205675174"
    },
    {
        id: 3,
        icon: <PhoneIphoneIcon />,
        desc: "+201208280741"
    },
    {
        id: 4,
        icon: <PhoneInTalkIcon />,
        desc: "0405493"
    },
    {
        id: 4,
        icon: <FaxIcon />,
        desc: "Fax: 96524917503"
    },
    {
        id: 4,
        icon: <EmailIcon />,
        desc: "mahmoudbrakat363@gmail.com"
    },
]

export default function OfficeDaitels() {
    return (
        <div >
            <div className={style.Cheader}>
                Cairo Head Office Details
            </div>
            <div className={style.Cbody} key={Contact.id}>
                {Contact.map((el) => (
                    <div className={style.Citem}>
                        <Typography
                            variant='body1'
                            sx={{
                                alignItems: 'center',
                                display: 'flex',
                            }}
                            color='#75ad03' >
                            {el.icon} <span style={{ width: "10px" }} />{el.desc}
                        </Typography></div>
                ))}
                <Grid container sx={{ marginTop: "15px" }} color="#75ad03" >
                    <Grid sm={2} />
                    <Grid sm={2}><FacebookIcon /></Grid>
                    <Grid sm={2}><InstagramIcon /></Grid>
                    <Grid sm={2}><TwitterIcon /></Grid>
                    <Grid sm={2}><LinkedInIcon /></Grid>
                    <Grid sm={2} />

                </Grid>
            </div>
        </div>
    );
}
