import Serv from "@/Components/Services/Serv"

export default function Details(props) {
    return (<Serv srvs={props.data}/>)
}

export async function getServerSideProps(context){
const res=await fetch(`http://localhost:3000/api/servicess/${context.params.id}`)
const serv=await res.json()
    return {
        props:{
            data:serv
        }
    }
}
