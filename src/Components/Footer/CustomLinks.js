import { Link as MUILink } from '@mui/material'
export default function CustomLink({ href, text }) {
    return (
        <MUILink
            variant='body2'
            color='#BDBDBD'
            href={href}
            sx={{
                display: 'block',
                textDecoration: 'none',
                my: 1,
                cursor: 'pointer',
                textTransform:"capitalize",
                '&:hover': {
                    color: 'white',
                },
            }}
        >
            {text}
        </MUILink>
    )
}