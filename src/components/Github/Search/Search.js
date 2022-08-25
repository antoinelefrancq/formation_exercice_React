import PropTypes from 'prop-types';
import { Segment, Input } from 'semantic-ui-react';

import './Search.scss';

function Search({ search, setSearch, submitValue }) {
  return (
    <Segment className="Search">
      <form
        className="Search-form"
        onSubmit={(event) => {
          event.preventDefault();
          submitValue();
        }}
      >
        <Input
          icon="search"
          iconPosition="left"
          className="Search-input"
          placeholder="Rechercher"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </form>
    </Segment>
  );
}

Search.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  submitValue: PropTypes.func.isRequired,
};

export default Search;
