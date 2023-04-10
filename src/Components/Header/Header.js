import { useSession } from "next-auth/react";
import No from "./No";
import Yes from "./Yes";

export default function Login() {
    const { data: session } = useSession()
    if (session) {
        return (
            <Yes />
        )
    } else {
        return (
            <No />
        )
    }
}
