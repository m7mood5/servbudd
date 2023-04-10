import AppStore from "@/Components/appStore";
import HeroP from "@/Components/Provid/HeroP";
import Provider from "@/Components/Provid/Provider";
import SliderP from "@/Components/Provid/Slider";

export default function provider(props) {
    return (
        <>
            <HeroP />
            <Provider />
            <SliderP customers={props.customers} />
            <AppStore />
        </>
    );
}



export async function getStaticProps() {
    const res = await fetch("http://localhost:3000/api/customers")
    const customers = await res.json()
    return {
        props: {
            customers: customers
        }
    }
}