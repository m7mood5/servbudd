import { services } from "@/services";

export default function handler(req, res) {
    let id = req.query.id;
    let serv = services.find(el => el.id == id)
    if (serv) {
        res.status(200).json(serv)
    } else {
        res.status(400).json({ err: "no ser" })
    }
}