import { createContext, useContext } from "react";

export interface IFilterListContext {
    name: string;
    id: string;
    hits: number;
    selected?: boolean;
}

export const FilterListContext = createContext<IFilterListContext[]>([
    {
      name: '',
      id: '',
      hits: 0,
      selected: false,
    },
  ]);

  export const useFilterListContext = () => useContext(FilterListContext)