'use client';
import { Box, Typography, Grid, Stack } from '@mui/material';
import { Bed } from 'lucide-react';

export default function Offerings() {
  return (
    <Box 
      sx={{ 
        backgroundColor: 'black',
        padding: '80px 32px',
        textAlign: 'center'
      }}
    >
      {/* Header Badge */}
      <Box
        sx={{
          backgroundColor: '#E4DD60',
          borderRadius: '25px',
          padding: '8px 16px',
          marginBottom: '40px',
          display: 'inline-block'
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: 'black',
            fontWeight: 500,
            fontSize: '0.875rem'
          }}
        >
          Offerings
        </Typography>
      </Box>

      {/* Main Title */}
      <Typography
        variant="h2"
        sx={{
          color: 'white',
          fontSize: { xs: '2.5rem', md: '3.5rem' },
          fontWeight: 600,
          marginBottom: '20px',
          lineHeight: 1.2
        }}
      >
        We'll make your stay a <br /> memorable one
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="h6"
        sx={{
          color: 'rgba(255, 255, 255, 0.8)',
          marginBottom: '80px',
          fontSize: '1.2rem',
          fontWeight: 400
        }}
      >
        Here's what we have to offer our guests
      </Typography>
    </Box>
  );
}