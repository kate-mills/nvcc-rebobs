/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Description = () => {
  return (
    <Box>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: 900,
          color: 'common.white',
        }}
      >
        Mountain Bike Racing & Riding For All.
      </Typography>
      <Typography
        variant="h6"
        component="p"
        color="text.primary"
        sx={{
          fontWeight: 500,
          color: 'common.white',
        }}
      >Napa Valley Composite Cycling Team is a NICA affiliated, middle and high-school age (6-12 grade) mountain bike team.
Whether you are a beginner, or have been racing before, our team would love to have you join us as we compete against highschools from around California.
      </Typography>
    </Box>
  );
};

export default Description;
