'use client';
import { Box, Stack, Typography, Button, Card, CardMedia, CardContent } from '@mui/material';
import { useInView } from 'react-intersection-observer';

export default function Villas() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const villas = [
    {
      id: 1,
      name: "Villa Ananda 5BHK",
      guests: "15 guests",
      bedrooms: "5 bedrooms",
      bathrooms: "7 bathrooms",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Villa Alaya 5BHK", 
      guests: "14 guests",
      bedrooms: "5 bedrooms",
      bathrooms: "5 bathrooms",
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Villa Etisha 4BHK",
      guests: "10 guests", 
      bedrooms: "4 bedrooms",
      bathrooms: "4 bathrooms",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop"
    }
  ];

  return (
    <Box 
      ref={ref}
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
          display: 'inline-block',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0px)' : 'translateY(30px)',
          transition: 'all 0.8s ease-in-out',
          transitionDelay: '0.1s'
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
          Our Stays
        </Typography>
      </Box>

      {/* Main Title */}
      <Typography
        variant="h2"
        sx={{
          color: 'white',
          fontSize: { xs: '2.5rem', md: '3.5rem' },
          fontWeight: 600,
          marginBottom: '60px',
          lineHeight: 1.2,
          maxWidth: '800px',
          margin: '0 auto 60px auto',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0px)' : 'translateY(40px)',
          transition: 'all 0.8s ease-in-out',
          transitionDelay: '0.3s'
        }}
      >
        Premium vacation <br /> rental Villas in North <br /> Goa
      </Typography>

      {/* Villa Cards */}
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={4}
        justifyContent="center"
        sx={{ marginBottom: '60px' }}
      >
        {villas.map((villa, index) => (
          <Card
            key={villa.id}
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '16px',
              maxWidth: '350px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0px)' : 'translateY(50px)',
              transition: 'all 0.8s ease-in-out',
              transitionDelay: `${0.5 + (index * 0.2)}s`
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={villa.image}
              alt={villa.name}
              sx={{ borderRadius: '16px 16px 0 0' }}
            />
            <CardContent sx={{ padding: '24px' }}>
              <Typography
                variant="h6"
                sx={{
                  color: 'white',
                  fontWeight: 600,
                  marginBottom: '12px'
                }}
              >
                {villa.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '0.9rem'
                }}
              >
                {villa.guests} | {villa.bedrooms} | {villa.bathrooms}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>

      {/* View All Villas Button */}
      <Button
        variant="outlined"
        sx={{
          color: 'white',
          borderColor: 'white',
          borderRadius: '50px',
          padding: '12px 32px',
          textTransform: 'none',
          fontSize: '1.1rem',
          fontWeight: 500,
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0px)' : 'translateY(30px)',
          transition: 'all 0.8s ease-in-out',
          transitionDelay: '1.1s',
          '&:hover': {
            borderColor: 'white',
            backgroundColor: 'rgba(255, 255, 255, 0.1)'
          }
        }}
      >
        View All Villas
      </Button>
    </Box>
  );
}