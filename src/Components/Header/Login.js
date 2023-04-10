import { useSession, signIn } from "next-auth/react";
import { Box, Button } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Brofile from "./Brofile";


export default function Login() {
    const { data: session } = useSession()
    if (session) {
        return (
            <Brofile />
        )
    } else {
        return (
            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }} >
                <Button
                    sx={{ my: 2, display: "block", color: "#FFFFFF" }}
                    onClick={() => signIn()}>
                    login
                </Button>
            </Box>
        )
    }
}
