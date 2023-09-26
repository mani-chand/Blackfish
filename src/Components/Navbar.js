import { Button, Paper, TextField } from '@mui/material'
import React from 'react'

export default function Navbar() {
    const styles = {
        navbar: {
            display:"flex",
            justifyContent:"space-around",
            padding:10
        },
    }
  return (
    <div>
        <Paper elevation={2}>
            <div style={styles.navbar}>
                <div>
                <img height={40} src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" alt='logo'/>
                <TextField maxRows={1} variant="outlined" placeholder='search'/>
                </div>
                <div>
                    <Button size="small" variant="text">Log in</Button>
                    <Button variant="outlined">Create account</Button>
                </div>
            </div>
        </Paper>
    </div>
  )
}
