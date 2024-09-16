import { useFilterListContext } from '../contexts/FilterListContext';
import { useSetFilter } from '../contexts/SetFilterListContext';


export const useOccupationFields = () => {


  const filterListState = useFilterListContext();
  const { setFilterList } = useSetFilter();

 
  return { filterListState, setFilterList, };
};
