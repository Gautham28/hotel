'use client';
import { Box, Typography, Grid, Stack } from '@mui/material';
import { Bed, Waves } from 'lucide-react';

export default function Offerings() {
  return (
    <Box sx={{ backgroundColor: 'black' }}>
      {/* Header Section */}
      <Box 
        sx={{ 
          backgroundColor: 'black',
          padding: '80px 32px 20px 32px',
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
            marginBottom: '0px',
            fontSize: '1.2rem',
            fontWeight: 400
          }}
        >
          Here's what we have to offer our guests
        </Typography>
      </Box>

      {/* King-Sized Comfort Section */}
      <Box 
        sx={{ 
          backgroundColor: 'black',
          padding: { xs: '20px 20px', md: '20px 40px' },
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Grid container spacing={4} alignItems="center" maxWidth="1400px" mx="auto">
          {/* Left Side - Text Content */}
          <Grid item xs={12} md={6}>
            <Box sx={{ pr: { md: 4 } }}>
              {/* Hotel Icon Badge */}
              <Box
                sx={{
                  backgroundColor: 'white',
                  borderRadius: '20%',
                  width: '60px',
                  height: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '40px'
                }}
              >
                <Bed size={24} color="black" />
              </Box>

              {/* Main Title */}
              <Typography
                variant="h1"
                sx={{
                  color: 'white',
                  fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                  fontWeight: 600,
                  marginBottom: '24px',
                  lineHeight: 1.1,
                  fontFamily: 'system-ui, -apple-system, sans-serif'
                }}
              >
                King-Sized<br />
                Comfort in<br />
                Spacious Rooms
              </Typography>

              {/* Description */}
              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  fontWeight: 400,
                  lineHeight: 1.6,
                  maxWidth: '480px'
                }}
              >
                Enjoy a restful stay in our deluxe rooms, featuring plush king-sized beds for ultimate relaxation.
              </Typography>
            </Box>
          </Grid>

          {/* Right Side - Image */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                height: { xs: '300px', md: '500px' },
                width: '100%'
              }}
            >
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1758907466521-3541b455ee91?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Luxury hotel room with king-sized bed"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Expansive Pools Section */}
      <Box 
        sx={{ 
          backgroundColor: 'black',
          padding: { xs: '20px 20px', md: '20px 40px' },
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Grid container spacing={4} alignItems="center" maxWidth="1400px" mx="auto">
          {/* Left Side - Image */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                height: { xs: '300px', md: '500px' },
                width: '100%'
              }}
            >
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1562016600-ece13e8ba570?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Luxury pool area with relaxing atmosphere"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
            </Box>
          </Grid>

          {/* Right Side - Text Content */}
          <Grid item xs={12} md={6}>
            <Box sx={{ pl: { md: 4 } }}>
              {/* Pool Icon Badge */}
              <Box
                sx={{
                  backgroundColor: 'white',
                  borderRadius: '20%',
                  width: '60px',
                  height: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '40px'
                }}
              >
                <Waves size={24} color="black" />
              </Box>

              {/* Main Title */}
              <Typography
                variant="h1"
                sx={{
                  color: 'white',
                  fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                  fontWeight: 600,
                  marginBottom: '24px',
                  lineHeight: 1.1,
                  fontFamily: 'system-ui, -apple-system, sans-serif'
                }}
              >
                Expansive Pools<br />
                for Relaxation
              </Typography>

              {/* Description */}
              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  fontWeight: 400,
                  lineHeight: 1.6,
                  maxWidth: '480px'
                }}
              >
                Dive in and relax! The perfect spot for a refreshing dip and ultimate unwinding.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}