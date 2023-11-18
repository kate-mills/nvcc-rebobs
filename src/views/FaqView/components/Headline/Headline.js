import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Headline = () => {
  return (
    <Box>
      <Typography variant="h2" align={'center'} fontWeight={700} gutterBottom>
        Have a question?
      </Typography>
      <Typography variant="h6" align={'center'} color={'textSecondary'}>
Discover answers to commonly asked questions regarding our team, practices, coaches, and other pertinent details.
      </Typography>
    </Box>
  );
};

export default Headline;
