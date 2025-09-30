'use client';
import { Box, Stack, Typography, Divider } from '@mui/material';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function Stats() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <Box 
      ref={ref}
      sx={{ 
        backgroundColor: 'black',
        padding: '60px 32px',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Stack 
        direction="row" 
        alignItems="center" 
        spacing={12}
        sx={{ maxWidth: '1200px', width: '100%', justifyContent: 'center' }}
      >
        {/* First Stat - Guests Hosted */}
        <Stack direction="row" alignItems="center" spacing={3}>
          <Typography 
            variant="h2" 
            sx={{ 
              color: 'white',
              fontWeight: 500,
              fontSize: '4rem',
              display: 'flex',
              alignItems: 'baseline',
              lineHeight: 1
            }}
          >
            {inView && (
              <CountUp
                start={0}
                end={500}
                duration={2.5}
                delay={0.2}
              />
            )}
            <Box component="span" sx={{ fontSize: '2.5rem', color: 'white' }}>
              +
            </Box>
          </Typography>
          <Stack>
            <Typography 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '1rem',
                lineHeight: 1.2
              }}
            >
              Guests
            </Typography>
            <Typography 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '1rem',
                lineHeight: 1.2
              }}
            >
              Hosted
            </Typography>
          </Stack>
        </Stack>

        {/* First Divider */}
        <Divider 
          orientation="vertical" 
          flexItem 
          sx={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            height: '60px',
            width: '1px'
          }} 
        />

        {/* Second Stat - Return Guests */}
        <Stack direction="row" alignItems="center" spacing={3}>
          <Typography 
            variant="h2" 
            sx={{ 
              color: 'white',
              fontWeight: 500,
              fontSize: '4rem',
              display: 'flex',
              alignItems: 'baseline',
              lineHeight: 1
            }}
          >
            {inView && (
              <CountUp
                start={0}
                end={60}
                duration={2.2}
                delay={0.4}
              />
            )}
            <Box component="span" sx={{ fontSize: '2.5rem', color: 'white' }}>
              %
            </Box>
          </Typography>
          <Stack>
            <Typography 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '1rem',
                lineHeight: 1.2
              }}
            >
              Return
            </Typography>
            <Typography 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '1rem',
                lineHeight: 1.2
              }}
            >
              Guests
            </Typography>
          </Stack>
        </Stack>

        {/* Second Divider */}
        <Divider 
          orientation="vertical" 
          flexItem 
          sx={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            height: '60px',
            width: '1px'
          }} 
        />

        {/* Third Stat - Customer Satisfaction */}
        <Stack direction="row" alignItems="center" spacing={3}>
          <Typography 
            variant="h2" 
            sx={{ 
              color: 'white',
              fontWeight: 500,
              fontSize: '4rem',
              display: 'flex',
              alignItems: 'baseline',
              lineHeight: 1
            }}
          >
            {inView && (
              <CountUp
                start={0}
                end={4.9}
                duration={1.8}
                delay={0.6}
                decimals={1}
              />
            )}
            <Box component="span" sx={{ fontSize: '2.5rem', color: 'white' }}>
              /5
            </Box>
          </Typography>
          <Stack>
            <Typography 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '1rem',
                lineHeight: 1.2
              }}
            >
              Customer
            </Typography>
            <Typography 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '1rem',
                lineHeight: 1.2
              }}
            >
              Satisfaction
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}