import { createContext, useContext } from "react";
import { IJobAdSearchResult } from "../models/IJobAdSearchResult";
import { ISearchResults } from "../models/ISearchResults";

export interface IJobsSearchContext{
    jobs: IJobAdSearchResult[]
    response: ISearchResults
    handleSearch : (text:string, pageNo:number, occupationFieldID:string, occupationNameIdList?:string[],  limit?:number) => void
}

export const JobsContext = createContext<IJobsSearchContext>({
    jobs : [],
    response: {
        total:{value:0},
        positions: 0,
        hits:[],
        stats: []
},
    handleSearch: () => {},
})

export const useJobs = () => useContext(JobsContext)