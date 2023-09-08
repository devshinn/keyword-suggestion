// SearchProvider.tsx
import { getData } from '../api';
import { isEmpty, is단모음단자음 } from '../lib/utils';
import { Sick } from '../types';
import SearchContext, { SearchContextType } from './ShearchContext';
import React, { KeyboardEvent, useCallback, useState } from 'react';

interface SearchProviderProps {
  children: React.ReactNode;
}
const EXP = 5 * 60 * 1000; //5분

function SearchProvider({ children }: SearchProviderProps) {
  const [selectionIndex, setSelectedIndex] = useState(-1);
  const [isFocus, setIsFocus] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState<Sick[]>([]);
  const [cachedResults, setCachedResults] = useState<{
    [key: string]: { expireTime: number; data: Sick[] };
  }>({});

  const changeFocus = (value: boolean) => setIsFocus(value);

  const callAPI = async (query: string) => {
    const now = new Date().getTime();
    const expireTime = new Date(now + EXP).getTime();
    try {
      const data = (await getData(query)).slice(0, 10);
      setSuggestions(data);
      setCachedResults({
        ...cachedResults,
        [query]: { data, expireTime },
      });
    } catch (err) {
      console.error(err);
    }
  };

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchText(query);

    if (is단모음단자음(query)) return;

    if (!query) {
      setSuggestions([]);
      return;
    }

    checkedExpireTime();

    if (cachedResults[query]) {
      setSuggestions(cachedResults[query].data);
      console.info('in cach data');
    } else {
      callAPI(query);
      console.info('calling api');
    }
  };

  const handleSuggestionClick = (sick: Sick) => {
    setSearchText(sick.sickNm);
    setSuggestions(prev => prev.filter(prev => prev.sickNm === sick.sickNm));
    setSelectedIndex(-1);
    changeFocus(false);
  };

  const checkedExpireTime = () => {
    const now = new Date().getTime();
    const updatedCachedResults: {
      [key: string]: { expireTime: number; data: Sick[] };
    } = {};

    for (const query in cachedResults) {
      const { expireTime } = cachedResults[query];
      if (now < expireTime) {
        updatedCachedResults[query] = cachedResults[query];
      }
    }
    setCachedResults(updatedCachedResults);
  };

  const keyboardEvent = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (isEmpty(suggestions)) return;
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prevIndex => {
          const idx = prevIndex < suggestions.length - 1 ? prevIndex + 1 : prevIndex;
          setSearchText(suggestions[idx].sickNm);
          return idx;
        });
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prevIndex => {
          const idx = prevIndex > 0 ? prevIndex - 1 : prevIndex;
          setSearchText(suggestions[idx].sickNm);
          return idx;
        });
      } else if (e.key === 'Enter') {
        selectionIndex !== -1 && setSuggestions(prev => [prev[selectionIndex]]);
        setSelectedIndex(-1);
      }
    },
    [suggestions, selectionIndex],
  );

  const contextValue: SearchContextType = {
    isFocus,
    changeFocus,
    searchText,
    suggestions,
    inputChange,
    handleSuggestionClick,
    keyboardEvent,
  };

  return <SearchContext.Provider value={contextValue}>{children}</SearchContext.Provider>;
}

export default SearchProvider;
