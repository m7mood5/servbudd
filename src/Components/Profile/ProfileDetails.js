
import { Typography } from "@mui/material";
import style from "../../styles/Profile.module.css"
import { useSession } from "next-auth/react";

export default function ProfileDaitels() {
    const { data: session } = useSession()
    return (
        <div >
            <div className={style.Cheader}>
                I'M   {session.user.name}
            </div>
            <div className={style.Cbody} >
                <div className={style.Citem}>
                    <Typography
                        variant='body1'
                        sx={{
                            alignItems: 'center',
                            display: 'flex',
                        }}
                        color='#75ad03' ><span style={{ width: "40px" }} />
                        Phone Number :
                        <span style={{ width: "10px" }} />+201205675174
                    </Typography>

                </div>
                <div className={style.Citem}>
                    <Typography
                        variant='body1'
                        sx={{
                            alignItems: 'center',
                            display: 'flex',
                        }}
                        color='#75ad03' ><span style={{ width: "40px" }} />
                        Email Address:
                        <span style={{ width: "10px" }} />{session.user.email}
                    </Typography>

                </div>
                <div className={style.Citem}>
                    <Typography
                        variant='body1'
                        sx={{
                            alignItems: 'center',
                            display: 'flex',
                        }}
                        color='#75ad03' ><span style={{ width: "40px" }} />
                        Services :
                        <span style={{ width: "10px" }} />Plumping
                    </Typography>

                </div>
                <div className={style.Citem}>
                    <Typography
                        variant='body1'
                        sx={{
                            alignItems: 'center',
                            display: 'flex',
                        }}
                        color='#75ad03' ><span style={{ width: "40px" }} />
                        Hourly Rate :
                        <span style={{ width: "10px" }} />150EGY
                    </Typography>

                </div>

            </div>
        </div>
    );
}
