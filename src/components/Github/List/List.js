import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';
import Element from './Element/Element';

function List({ repos }) {
  return (
    <Segment className="List">
      {repos.map((repo) => (
        <Element key={repo.id} {...repo} />
      ))}
    </Segment>
  );
}
List.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
export default List;
