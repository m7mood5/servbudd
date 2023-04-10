import SearchS from "@/Components/Services/Search";

export default function services(props) {
    return (
        <div>
            <SearchS servicess={props.services}/>
        </div>
    );
}



export async function getStaticProps() {
    const res = await fetch("http://localhost:3000/api/servicess")
    const services = await res.json()
    return {
        props: {
            services: services
        }
    }
}