import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout.js';
import Seo from '../components/seo.js';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people...</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.haha</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={['AUTO', 'WEBP', 'AVIF']}
      alt="A Gatsby astronaut"
      style={{ marginBottom: '1.45rem' }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link>
      {' '}
      <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      <br />
      <Link to="/chrome/">模拟Chrome页</Link>
    </p>
  </Layout>
);

export default IndexPage;