import { createContext, Dispatch, SetStateAction, useContext } from "react"
import { IFilterListContext } from "./FilterListContext"

export interface ISetFilterListContext {
    setFilterList : Dispatch<SetStateAction<IFilterListContext[]>>
}

export const SetFilterListContext = createContext<ISetFilterListContext>({
    setFilterList: () => {
        return
    }
})

export const useSetFilter = () => useContext(SetFilterListContext)