import {tasks} from "../../../Tasks"
export default function handler(req,res) {
    res.status(200).json(tasks)
}
