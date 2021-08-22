import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { Wrapper, Content } from './searchBar.styles';
import searchIcon from '../../assets/images/search-icon.svg';

export interface ISearchBar {
  setSearchTerm: Dispatch<SetStateAction<string>>
}

const SearchBar = ({ setSearchTerm }: ISearchBar) => {
  const [ state, setState ] = useState('');
  const initial = useRef(true);

  useEffect(
    () => {
      if (initial.current) {
        initial.current = false;
        return;
      }

      const timer = setTimeout(() => {
        setSearchTerm(state);
      }, 500);

      return () => clearTimeout(timer);
    },
    [ setSearchTerm, state ],
  );

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon" />
        <input
          type="text"
          placeholder="Search Movie"
          onChange={(e) => setState(e.currentTarget.value)}
          value={state}
        />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
