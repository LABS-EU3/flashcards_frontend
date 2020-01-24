import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Input, NavSearch, Search } from './styles';

const SearchBox = () => {
  return (
    <Search>
      <NavSearch>
        <Input type="text" name="q" placeholder="Find a deck" />
      </NavSearch>
      <button>
        <FaSearch size={15} />
      </button>
    </Search>
  );
};

export default SearchBox;
