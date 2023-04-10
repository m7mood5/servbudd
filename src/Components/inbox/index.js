import react, { useState, createContext } from "react"
export const context = createContext()
import style from "../../styles/Auth.module.css"
import { useSession, signIn } from "next-auth/react";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import axios from "axios";

const ContextProvider = () => {
    const [username, setUsername] = useState("")
    const [secret, setSecret] = useState("")

    const value = {
        username,
        setUsername,
        secret,
        setSecret,
    }
}

 function Auth() {

    const router = useRouter()
    function onsubmit() {
        axios.put(
            `https://api.chatengine.io/users/`,
            { headers: { "Private-key": '4c5e4ea2-9131-4d53-af17-dcb43d330b33' } }
        ).then(() => router.push('/chats'))
    }

    return (
        <ContextProvider value={value}>
            <div className={style.background}>
                <div className={style.authContainer}>
                    <div className={style.authTitle}>
                        Welcome In <span style={{ color: "#75ad03" }}>SERVBUD CHAT</span>
                    </div>

                    <Typography
                        variant='body1'
                        sx={{
                            alignItems: 'center',
                            marginTop: "20px"
                        }}
                        color='#726dfe'
                    >
                        Please Login / Signin First
                    </Typography>
                    <button
                        className={style.ssubmitbutton}
                        onClick={() => signIn()}>

                        <Typography
                            variant='body1'
                            sx={{
                                alignItems: 'center',
                            }}
                            color='#FFFFFF'
                        >
                            LogIn / SignIn
                        </Typography>
                    </button>
                </div>
            </div>
        </ContextProvider>
    )
}
// // import { useState, createContext, useContext } from "react"
// // import style from "../../styles/Auth.module.css"
// // import { useRouter } from "next/router";
// // import axios from "axios";



// // function Auth() {
// //     const context = createContext()
// //     const { username, setUsername, secret, setSecret } = useContext(context);
// //     const router = useRouter()
// //     function formHanler(e) {
// //         e.preventDefault();
// //         if (username.length === 1 || secret.length === 1) return;
// //         axios.put(
// //             `https://api.chatengine.io/users/`,
// //             { headers: { "Private-key": '4c5e4ea2-9131-4d53-af17-dcb43d330b33' } }
// //         ).then(() => router.push('/chats'))
// //     }

// //     return (
// //         <div className={style.background}>
// //             <div className={style.authContainer}>
// //                 <form className={style.authForm} onSubmit={formHanler()}>
// //                     <div className={style.authTitle}>
// //                         SERVBUD CHAT
// //                     </div>
// //                     <div >
// //                         <input
// //                             placeholder="Email"
// //                             className={style.textInput}
// //                             onChange={(e) => setUsername(e.target.value)}
// //                         />
// //                     </div>
// //                     <div className={style.textInput}>
// //                         <input
// //                             type="password"
// //                             placeholder="Password"
// //                             className={style.textInput}
// //                             onChange={(e) => setSecret(e.target.value)}
// //                         />
// //                     </div>
// //                     <button type="submit" className={style.submitbutton}>
// //                         Login / Sign Up
// //                     </button>
// //                 </form>
// //             </div>
// //         </div>
// //     )
// // }


// // export default function ContextProvider() {
// //     const [username, setUsername] = useState("")
// //     const [secret, setSecret] = useState("")

// //     const value = {
// //         username,
// //         setUsername,
// //         secret,
// //         setSecret,
// //     }
// //     return (
// //         <ContextProvider value={value}>
// //             <Auth />
// //         </ContextProvider>

// //     )
// // }

// import style from "../../styles/Auth.module.css"

// import React, { useContext } from "react";

// import { Context, ContextProvider } from "../../context/index";

// import { useRouter } from "next/router";

// import axios from "axios";

// const Auth = () => {
//     const { username, setUsername, secret, setSecret } = useContext(Context);

//     const router = useRouter();

//     function onSubmit(e) {
//         e.preventDefault();

//         if (username.length === 1 || secret.length === 1) return;
//         axios.put("https://api.chatengine.io/users/", { username, secret }, { headers: { "Private-Key": "4c5e4ea2-9131-4d53-af17-dcb43d330b33" } })

//             .then((r) => {
//                 router.push("/chats");
//             });
//     }

//     return (
//         <ContextProvider>
//             <div className={style.background}>
//                 <div className={style.authContainer}>
//                     <form className={style.authForm} onSubmit={(e) => onSubmit(e)}>
//                         <div className={style.authTitle}>NextJS Chat</div>

//                         <div >
//                             <input
//                                 placeholder="Email"
//                                 className={style.textInput}
//                                 onChange={(e) => setUsername(e.target.value)}
//                             />
//                         </div>

//                         <div >
//                             <input
//                                 type="password"
//                                 placeholder="Password"
//                                 className={style.textInput}
//                                 onChange={(e) => setSecret(e.target.value)}
//                             />
//                         </div>

//                         <button type="submit" className={style.submitbutton}>
//                             Login / Sign Up
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </ContextProvider>
//     );
// };

// export default Auth;