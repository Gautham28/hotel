'use client';
import { Stack, Box, Button } from '@mui/material';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Stack 
      direction="row" 
      justifyContent="space-between" 
      alignItems="center"
      sx={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        padding: '16px 32px',
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Logo - Left */}
      <Box sx={{ color: isScrolled ? 'black' : 'white' }}>
        <Box 
          sx={{
            width: 48,
            height: 48,
            backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.2)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <span style={{ fontSize: '24px', fontWeight: 'bold' }}>L</span>
        </Box>
      </Box>

      {/* Navigation Menu - Center */}
      <Stack direction="row" spacing={4} sx={{ display: { xs: 'none', md: 'flex' } }}>
        <a href="#" style={{ 
          color: isScrolled ? 'black' : 'white', 
          textDecoration: 'none',
          transition: 'color 0.3s ease'
        }}>Home</a>
        <a href="#" style={{ 
          color: isScrolled ? 'black' : 'white', 
          textDecoration: 'none',
          transition: 'color 0.3s ease'
        }}>About us</a>
        <a href="#" style={{ 
          color: isScrolled ? 'black' : 'white', 
          textDecoration: 'none',
          transition: 'color 0.3s ease'
        }}>Villas</a>
        <a href="#" style={{ 
          color: isScrolled ? 'black' : 'white', 
          textDecoration: 'none',
          transition: 'color 0.3s ease'
        }}>Around us</a>
      </Stack>

      {/* Contact Us Button - Right */}
        <Button 
            variant={isScrolled ? "contained" : "outlined"}
            size="medium"
            sx={{ 
                color: isScrolled ? 'white' : 'white',
                backgroundColor: isScrolled ? 'black' : 'transparent',
                borderColor: 'white',
                padding: '10px 24px',
                borderRadius: '50px',
                textTransform: 'none',
                fontSize: '14px',
                fontWeight: 500,
                transition: 'all 0.3s ease',
                '&.MuiButton-outlined': {
                borderColor: 'white',
                color: 'white',
                },
                '&.MuiButton-contained': {
                backgroundColor: 'white',
                color: 'black',
                '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                }
                },
                '&.MuiButton-outlined:hover': {
                borderColor: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                }
            }}
            >
            Contact us
        </Button>
    </Stack>
  );
}