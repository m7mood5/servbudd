import { services } from "@/services";

export default function handler(req,res){
    res.status(200).json(services)
}