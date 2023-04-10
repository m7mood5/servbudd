import { Customers } from "@/Customers";
export default function handler(req, res) {
    res.status(200).json(Customers)
}