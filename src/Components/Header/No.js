import { useState } from "react";
import { motion } from "framer-motion";
import Image from 'next/image'
import {
    AppBar,
    Button,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
    Box
} from '@mui/material'
import logo from "../../../public/imgs/logo.png"
import Link from "next/link";
import style from "../../styles/Header.module.css"
import MenuIcon from '@mui/icons-material/Menu'
import Login from "./Login";

const pages = ["home", "services", "contact"]
const allPages = ["home", "services", "contact", "login"]

export default function No() {
    const [anchorElNav, setAnchorElNav] = useState(null)

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }
    return (
        <AppBar
            position='static'
            elevation={0}
            sx={{ color: '#FFFFFF', backgroundColor: '#152425' }}
        >
            <motion.div
                initial={{ opacity: 0, y: -180 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    ease: 'easeInOut',
                    duration: 1,
                    delay: 0.4,
                }}
                className='header'
            >
                <Container maxWidth='lg'>
                    <Toolbar>
                        <Typography
                            variant="image"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'flex' },
                            }}
                        >
                            <Image className={style.image} src={logo} alt="" />
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                            {pages.map((page) => (
                                <div key={page}>
                                    <Link href={`/${page}`}>
                                        <Button sx={{ my: 2, display: "block", color: "#FFFFFF" }}>
                                            {page}
                                        </Button>
                                    </Link>
                                </div>
                            ))}
                        </Box>
                        <Login />
                        <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "flex" } }} >
                            <Link href="/provider">
                                <Button color="success" variant="contained" sx={{ my: 2, display: "block", borderRadius: 25 }} >
                                    Provider?
                                </Button>
                            </Link>
                        </Box>

                        <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size='large'
                                aria-label='account of current user'
                                aria-controls='menu-appbar'
                                aria-haspopup='true'
                                onClick={handleOpenNavMenu}
                                color='inherit'
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id='menu-appbar'
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {allPages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign='center' color="#152425">
                                            <Link href={`/${page}`}>
                                                {page}
                                            </Link>
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                    </Toolbar>
                </Container>
            </motion.div>
        </AppBar>
    )
}