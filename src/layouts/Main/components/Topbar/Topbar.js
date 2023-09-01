import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import logoImg from 'images/rebob.webp'

import GatsbyLink from 'components/Link'

const Topbar = ({ onSidebarOpen, colorInvert = false }) => {
  const theme = useTheme();

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component={GatsbyLink}
        to="/"
        title="NAPA VALLEY COMPOSITE CYCLING"
        width={{ xs: 100, md: 150 }}
      >
        <Box
          component={'img'}
          src={ logoImg }
          height={1}
          width={1}
        />
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box>
        </Box>
        <Box marginLeft={4}>
        </Box>
        <Box marginLeft={4}>
        </Box>
        <Box marginLeft={4}>
        </Box>
        <Box marginLeft={4}>
        </Box>
        <Box marginLeft={4}>
        </Box>
        <Box marginLeft={4}>
          <Button
            variant="contained"
            color="primary"
            component={GatsbyLink}
            target="blank"
            to={'/contact'}
            size="large"
          >Contact
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'block', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  colorInvert: PropTypes.bool,
};

export default Topbar;
