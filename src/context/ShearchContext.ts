import { Sick } from '../types';
import { ChangeEvent, createContext, useContext } from 'react';

export interface SearchContextType {
  keyboardEvent: (e: any) => void;
  isFocus: boolean;
  changeFocus: (value: boolean) => void;
  searchText: string;
  suggestions: Sick[];
  inputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSuggestionClick: (suggestion: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export default SearchContext;
export const useShearch = () => useContext(SearchContext) as SearchContextType;
