import PropTypes from 'prop-types';

import { Segment } from 'semantic-ui-react';

import './Element.scss'

function Element(repo) {
  return (
    <Segment className="Element">
      <img src={repo.owner.avatar_url} alt={repo.name} className="Element-image" />
      <h2>{repo.name}</h2>
      <h3>{repo.owner.login}</h3>
      <p>{repo.description}</p>
    </Segment>
  );
}
Element.propTypes = {
  repo: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      owner: PropTypes.objectOf(
        PropTypes.shape({
          avatar_url: PropTypes.string.isRequired,
          login: PropTypes.string.isRequired,
        }),
      ).isRequired,
    }),
  ).isRequired,
};
export default Element;
