import { Button, Container, Grid } from "@mui/material";
import style from "../../styles/heroP.module.css"
import Link from "next/link";
import Search from "./searchP";
import SearchP from "./sP";
import {  signIn } from "next-auth/react";


export default function HeroP() {
    return (
        <section className={style.cover}>
            <Container>
                <div className={style.locationbox}>
                    <h5 className={style.locationtitle}>
                        We Can Do Anything
                    </h5>
                    <Grid container alignItems='center' my={4} >
                        <Grid item xs={5} sm={5} data-aos='fade-right'>
                            <div className={style.locationinput}>
                                <Search />
                            </div>
                        </Grid>
                        <Grid item xs={5} sm={5} data-aos='fade-left'>
                            <div className={style.locationinput}>
                                <SearchP />
                            </div>
                        </Grid>
                        <Grid item xs={2} sm={2}>
                            <Link href="/">
                                <Button color="success" variant="contained" sx={{ my: 2, display: "block", borderRadius: 25 }} onClick={()=>signIn()} >
                                    GO
                                </Button>
                            </Link>
                        </Grid>

                    </Grid>
                </div>
            </Container>
        </section>
    );
}