import React from 'react'
import { Button } from '@mui/material'
export default function PostArea() {
  return (
    <div>
        <div style={{display:"flex",gap:"15px"}}>
        <Button>Relevent</Button>
        <Button>Latest</Button>
        <Button>Top</Button>
        </div>
    </div>
  )
}
