import {
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
} from '@chakra-ui/react';
import { Link as GatsbyLink } from 'gatsby';
import Layout from '@/components/layout.js';

const App = () => (
  <Layout>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <VStack spacing={8}>
          <Text>
            Edit
            {' '}
            <Code fontSize="xl">src/App.js</Code>
            {' '}
            and save to reload.
          </Text>
          <Link
            color="teal.500"
            href="https://chakra-ui.com"
            fontSize="2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Chakra
          </Link>
          <Link as={GatsbyLink} to="/">Go to Index Page</Link>
        </VStack>
      </Grid>
    </Box>
  </Layout>
);

export default App;
