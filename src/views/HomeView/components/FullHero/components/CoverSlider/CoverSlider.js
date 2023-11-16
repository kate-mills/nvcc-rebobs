import React from 'react';
import Box from '@mui/material/Box';

import bgImg from 'images/team2023.webp'

const CoverSlider = () => {
  return (
    <Box
      sx={{
        height: { xs: 'auto', md: 1 },
        '& img': {
          objectPosition: 'left',
          objectFit:'cover',
        },
      }}
    >
      <Box
        component={'img'}
        src={bgImg}
        height={{ xs: 'auto', md: 1 }}
        maxHeight={{ xs: 200, md: 1 }}
        width={1}
        maxWidth={1}
      />
    </Box>
  );
};

export default CoverSlider;
