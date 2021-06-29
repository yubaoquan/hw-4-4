import { Link as GatsbyLink } from 'gatsby';
import { Link, Heading, Text } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '@/components/layout.js';
import Seo from '@/components/seo.js';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Heading>Hi people...</Heading>
    <Text fontSize="20px">Welcome to your new Gatsby site.</Text>
    <Text fontSize="20px">Now go build something great.alias</Text>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={['AUTO', 'WEBP', 'AVIF']}
      alt="A Gatsby astronaut"
      style={{ marginBottom: '1.45rem' }}
    />
    <p>
      <Link to="/page-2/" as={GatsbyLink}>Go to page 2</Link>
      {' '}
      <br />
      <Link to="/using-typescript/" as={GatsbyLink}>Go to "Using TypeScript"</Link>
      <br />
      <Link to="/chrome/" as={GatsbyLink}>Chrome demo 页</Link>
      <br />
      <Link to="/chakra/" as={GatsbyLink}>Chakra-UI demo 页</Link>
    </p>
  </Layout>
);

export default IndexPage;
