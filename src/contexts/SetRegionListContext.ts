import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { IRegionListContext } from "./RegionListContext";

export interface ISetRegionListContext {
    setFilterRegionList: Dispatch<SetStateAction<IRegionListContext[]>>
}

export const SetRegionListContext = createContext<ISetRegionListContext>({
    setFilterRegionList: () => {
        return
    }

})

export const useSetFilterRegion = () => useContext(SetRegionListContext)