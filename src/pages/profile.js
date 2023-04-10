import Profile from "@/Components/Profile";
import { useSession, signIn, signOut } from "next-auth/react";

export default function login() {
    const { data: session } = useSession()
    if (session) {
        return (
            
            <Profile session={session}/>
        )
    } else {
        return (
            <div>
                <p>u are not signIn</p>
                <button onClick={() => signIn()}>signIn</button>
            </div>
        )
    }
}
