import {  Container } from "@mui/material";
import style from "../../styles/Hero.module.css"
import Search from "./Search";
import CustomButton from "../CustomButton";
import Link from "next/link";
export default function Hero() {
    return (
        <section className={style.cover}>
            <Container>
                <div className={style.locationbox}>
                    <h5 className={style.locationtitle}>
                        Please select your location
                    </h5>
                    <div className={style.locationinput}>
                        <Search /><Link href="/services"><CustomButton>GO</CustomButton></Link>
                    </div>
                </div>
            </Container>
        </section>
    );
}