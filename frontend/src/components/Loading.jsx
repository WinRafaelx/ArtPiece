// Loading.js
import React from 'react';
import { CircularProgress, Typography, Box } from '@mui/material';

const Loading = () => {
  return (
    <Box
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <CircularProgress sx={{mb:3}} />
        <Typography variant="h6" align="center">
          Loading...
        </Typography>
      </Box>
    </Box>
  );
};

export default Loading;
