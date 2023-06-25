import React from 'react'
import { Typography, Box } from '@mui/material'

function Footer() {
  return (
    <Box
      component='footer'
      sx={{
        backgroundColor: 'transparent',
        padding: '1rem',
        marginTop: '2rem',
        textAlign: 'center',
      }}
    >
      <Typography variant='body2' sx={{ color: '#ffffff', fontSize: '1.2rem' }}>
        &copy; Stepping Stones 2023
      </Typography>
    </Box>
  )
}

export default Footer
