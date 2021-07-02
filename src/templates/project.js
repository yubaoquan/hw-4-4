/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';

const Project = ({ data }) => {
  console.info(data);
  const { strapiProject: project } = data;
  return (
    <div>
      <div>{project.title}</div>
      <div>{project.color}</div>
      <div>{project.content}</div>
    </div>
  );
};

export const query = graphql`
  query ($slug: String) {
    strapiProject(fields: {slug: { eq: $slug } }) {
      title
      color
      content
    }
  }
`;

export default Project;
