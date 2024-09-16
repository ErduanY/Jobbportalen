import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Router";
import { useEffect, useState } from "react";
import { getJobsSearchData } from "./service/jobSearchService";
import { IJobsSearchContext, JobsContext } from "./contexts/JobsContext";
import { ISearchTextContext, SearchTextContext } from "./contexts/PageNoContext";
import { FilterListContext, IFilterListContext } from "./contexts/FilterListContext";
import { ISetFilterListContext, SetFilterListContext } from "./contexts/SetFilterListContext";
import { IRegionListContext, RegionListContext } from "./contexts/RegionListContext";
import { ISetRegionListContext, SetRegionListContext } from "./contexts/setRegionListContext";

function App() {

  useEffect(()=>{
    jobState.handleSearch('',1,'',[],0)
  },[])

  const [jobState, setJobState] = useState<IJobsSearchContext>({
    jobs: [],
    response: {
      total: { value: 0 },
      positions: 0,
      hits: [],
      stats: [{
        type:'',
        values: []
    }]
    },
    handleSearch: () => { }
  });

  const [filterListInState, setFilterList] = useState<IFilterListContext[]>([
    {
      name: '',
      id: '',
      hits: 0,
      selected: false,
    },
  ]);

  const [filterRegionList, setFilterRegionList] = useState<IRegionListContext[]>([
    {
      name: '',
      id: '',
      hits: 0,
      selected: false,
    },
  ]);


  const [searchTextState, setSearchText] = useState<ISearchTextContext>({
    searchText: '',
    updateSearchText: () => { }
  });

  jobState.handleSearch = async (searchText: string, pageNo = 1, occupationFieldID = '', occupationNameIdList?:string[], limit?:number, ) => {
    const searchResult = await getJobsSearchData(searchText, pageNo, occupationFieldID, occupationNameIdList,limit)
    setJobState({ ...jobState, jobs: searchResult.hits, response: searchResult })
  };



  searchTextState.updateSearchText = (text: string) => {
    setSearchText({ ...searchTextState, searchText: text })
  }

  const setFilterListContextValue: ISetFilterListContext = {
    setFilterList: setFilterList
  };

  const setFilterRegionListValue: ISetRegionListContext = {
    setFilterRegionList : setFilterRegionList
  }
  return <>

    <JobsContext.Provider value={jobState}>
      <SearchTextContext.Provider value={searchTextState}>
        <FilterListContext.Provider value={filterListInState}>
          <SetFilterListContext.Provider value={setFilterListContextValue}>
          <RegionListContext.Provider value={filterRegionList}>
              <SetRegionListContext.Provider value={setFilterRegionListValue}>

            <RouterProvider router={router}>
            </RouterProvider>

              </SetRegionListContext.Provider>
            </RegionListContext.Provider>
          </SetFilterListContext.Provider>
        </FilterListContext.Provider>
      </SearchTextContext.Provider>
    </JobsContext.Provider>
  </>;
}

export default App;
