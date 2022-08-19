import * as React from 'react';
import Box from '@mui/material/Box';

export default function BoxSx() {
  return (
    <Box
      sx={{
        width: '100%',
        height: 180,
        background: 'linear-gradient(315deg, rgba(137,58,180,1) 0%, rgba(253,29,84,1) 50%, rgba(252,199,69,1) 100%)',
        backgroundColor: 'primary.dark',
        '&:hover': {
          background: 'linear-gradient(342deg, rgba(2,0,36,1) 0%, rgba(7,6,94,1) 34%, rgba(9,9,121,1) 52%, rgba(0,212,255,1) 100%)',
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />
  );
}