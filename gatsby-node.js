/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

async function createPages({ graphql, actions }) {
  const { data } = await graphql(`
    query  {
      allStrapiProject {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `);
  console.info(data);
  const { createPage } = actions;
  data.allStrapiProject.nodes.forEach((node) => {
    createPage({
      component: require.resolve('./src/templates/project.js'),
      path: `/project/${node.fields.slug}`,
      context: {
        slug: node.fields.slug,
      },
    });
  });
}

function onCreateNode({ node, actions }) {
  const { createNodeField } = actions;
  if (node.internal.type === 'StrapiProject') {
    const slug = node.id;
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
}

module.exports = {
  createPages,
  onCreateNode,
};
