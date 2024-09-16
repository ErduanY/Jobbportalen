import { createContext, useContext } from "react"

export interface ISearchTextContext {
    searchText:string
    updateSearchText: (text:string) => void
}

export const SearchTextContext = createContext<ISearchTextContext>({
    searchText:'',
    updateSearchText: () => {}
})

export const useSearchText = () => useContext(SearchTextContext)