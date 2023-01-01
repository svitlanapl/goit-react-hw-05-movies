import { PropTypes } from 'prop-types';
import { useState, useEffect } from 'react';

import {  Wrapper,  Form, Input, Button, Icon} from './SearchBox.styled';


export const SearchBox = ({ query='', onChange }) => {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (query) {
      setSearchQuery(query)
    }
  }, [query]);

  const handleChange = event => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onChange(searchQuery);
    setSearchQuery('');
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="searchQuery"
          value={searchQuery}
          placeholder="Search movies"
          autoComplete="off"
          autoFocus
          onChange={handleChange}
        />
        <Button type="submit">
          <Icon />
        </Button>
      </Form>
    </Wrapper>
  );
};

SearchBox.propTypes = {
  onChange: PropTypes.func.isRequired,
};

