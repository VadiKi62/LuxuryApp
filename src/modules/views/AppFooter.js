import * as React from 'react';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

function Copyright() {
  return (
    <>
      {new Date().getFullYear()}{' '}
      <Link
        color="secondary.dark"
        href="https://www.linkedin.com/in/natalia-kirejeva/"
      >
        All rights reserved.
      </Link>{' '}
      {'© NataliaKi '}
    </>
  );
}

// const iconStyle = {
//  width: 48,
//  height: 48,
//  display: 'flex',
//  justifyContent: 'center',
//  alignItems: 'center',
//  backgroundColor: 'warning.main',
//  mr: 1,
//  '&:hover': {
//    bgcolor: 'warning.dark',
//  },
// };

function AppFooter() {
  return (
    <Typography
      component="footer"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'secondary.light',
      }}
    >
      <Container
        sx={{
          my: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Grid item>
          <Copyright />
        </Grid>
      </Container>
    </Typography>
  );
}

export default AppFooter;
