import { Container, Typography } from '@mui/material';
import Component from '../components/Component';

function Home() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h1">Project Boilerplate</Typography>
      <Component />
    </Container>
  );
}

export default Home;
