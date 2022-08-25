import PropTypes from 'prop-types';
import { Button, Icon, Segment } from 'semantic-ui-react';

function MoreResults({ pageNumber, setPage, loadMore }) {
  return (
    <Segment>
      <Button
        animated
        onClick={() => {
          loadMore();
          setPage(pageNumber + 1);
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
  loadMore: PropTypes.func.isRequired,
};

export default MoreResults;
