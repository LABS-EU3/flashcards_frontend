import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { FaSearch } from 'react-icons/fa';
import { Input, NavSearch, Search } from './styles';

const SearchBox = () => {
  const history = useHistory();
  const [inputValue, setInputValue] = useState('');

  const handleSearchChange = event => {
    setInputValue(event.target.value);
  };
  return (
    <Search>
      <NavSearch>
        <Input
          type="text"
          name="headerSearch"
          onChange={handleSearchChange}
          value={inputValue}
          placeholder="Find a deck"
          onKeyDown={event => {
            if (event.keyCode === 13) {
              history.push({
                pathname: '/dashboard/search',
                // sends state to the next page
                state: { deckNameValue: inputValue },
              });
            }
          }}
        />
      </NavSearch>
      <button
        type="submit"
        onClick={() => {
          history.push({
            pathname: '/dashboard/search',
            state: { deckNameValue: inputValue },
          });
        }}
      >
        <FaSearch size={15} />
      </button>
    </Search>
  );
};

export default SearchBox;
