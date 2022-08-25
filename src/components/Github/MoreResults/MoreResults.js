import PropTypes from 'prop-types';
import { Button, Icon, Segment } from 'semantic-ui-react';

function MoreResults({ pageNumber, setPage, submitValue }) {
  return (
    <Segment>
      <Button
        animated
        onClick={() => {
          console.log('je clique sur mon bouton');
          setPage(pageNumber + 1);
          submitValue();
        }}
      >
        <Button.Content visible>Plus de résultats</Button.Content>
        <Button.Content hidden>
          <Icon name="angle down" />
        </Button.Content>
      </Button>

    </Segment>
  );
}
MoreResults.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  submitValue: PropTypes.func.isRequired,
};

export default MoreResults;
