import {users} from "../../../Users"
export default function handler(req,res) {
    res.status(200).json(users)
}
