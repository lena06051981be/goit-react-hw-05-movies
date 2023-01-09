import { useState } from 'react';
import PropTypes from 'prop-types';

import { SearchBtn, SearchForm, SearchInput } from './SearchBar.styled';
import { FcSearch } from 'react-icons/fc';
import { toast } from 'react-hot-toast';

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const onFormSubmit = e => {
    e.preventDefault();
    const searchQuery = query.toLowerCase().trim();
    if (searchQuery === '') {
      return toast.error("It cannot be empty query! Example: 'Batman'!");
    }
    onSubmit(searchQuery);
    setQuery('');
  };

  return (
    <SearchForm onSubmit={onFormSubmit}>      
      <SearchInput
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <SearchBtn type="submit">
        <FcSearch size={30} />
      </SearchBtn>
    </SearchForm>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};