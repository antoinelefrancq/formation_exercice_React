import PropTypes from 'prop-types';
import Element from './Element/Element';

import './List.scss';

function List({ repos }) {
  return (
    <div className="List">
      {repos.map((repo) => (
        <Element key={repo.id} {...repo} />
      ))}
    </div>
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
