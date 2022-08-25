import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';

function Counter({ resultNumber }) {
  return (
    <Segment className="counter">
      La recherche à donnée {resultNumber} {resultNumber > 1 ? 'résultats' : 'résultat'}
    </Segment>
  );
}
Counter.propTypes = {
  resultNumber: PropTypes.number.isRequired,
};
export default Counter;
