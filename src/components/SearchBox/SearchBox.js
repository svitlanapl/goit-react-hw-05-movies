import { PropTypes } from 'prop-types';

import { Form, Wrapper, Input, Button } from '../SearchBox/SearchBox.styled';

import { useState } from 'react';

export const SearchBox = ({ onChange }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInput = e => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

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
          onChange={handleInput}
        />
        <Button type="submit"></Button>
      </Form>
    </Wrapper>
  );
};

SearchBox.propTypes = {
  onChange: PropTypes.func.isRequired,
};

// export const SearchBox = ({ onSubmit }) => {
//   return (
//     <Wrapper>
//       <Form onSubmit={onSubmit}>
//         <Input
//           type="text"
//           name="query"
//           placeholder="Search movies"
//           autoComplete="off"
//           autoFocus
//         />
//         <Button type="submit"></Button>
//       </Form>
//     </Wrapper>
//   );
// };

// SearchBox.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
