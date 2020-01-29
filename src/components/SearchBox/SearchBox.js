import React from 'react';
import { useHistory } from 'react-router';
import { FaSearch } from 'react-icons/fa';
import { Input, NavSearch, Search } from './styles';

const SearchBox = () => {
  const history = useHistory();
  return (
    <Search>
      <NavSearch>
        <Input type="text" name="q" placeholder="Find a deck" />
      </NavSearch>
      <button
        type="button"
        onClick={() => {
          history.push('/dashboard/search');
        }}
      >
        <FaSearch size={15} />
      </button>
    </Search>
  );
};

export default SearchBox;
