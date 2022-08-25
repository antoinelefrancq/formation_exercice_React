import PropTypes from 'prop-types';
import { Segment, Input } from 'semantic-ui-react';

function Search({ search, setSearch }) {
  return (
    <Segment className="Search">
      <form
        className="Search-form"
        onSubmit={(event) => {
          event.preventDefault();
          console.log('implémenter le submit');
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
};

export default Search;
