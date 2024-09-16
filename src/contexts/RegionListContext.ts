import { createContext, useContext } from "react";

export interface IRegionListContext {
    name: string;
    id: string;
    hits: number;
    selected?: boolean;
}

export const RegionListContext = createContext<IRegionListContext[]>([
    {
        name: '',
        id: '',
        hits: 0,
        selected: false,
      },
])

export const useRegionListContext = () => useContext(RegionListContext);