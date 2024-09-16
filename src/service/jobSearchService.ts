
import { INumberOfHits } from '../models/INumberOfHits';
import { ISearchResults } from '../models/ISearchResults';
import { ITaxonomy } from '../models/ITaxonomy';
import { get } from './serviceBase';

export const sortOrder = '';
export const pageSize = 25;
let regionListIDs:string[] = []


export const getJobsSearchData = async (
  searchText: string,
  pageNo = 1,
  occupationFieldID = '',
  // regionID = '',
  occupationNameIdList:string[] = [],
  pageSize = 25
): Promise<ISearchResults> => {

  // const regionsData = await getRegion()
  // if(regionID === ''){

  //   regionListIDs = regionsData.map((region)=> {
  //     {
  //       return `&region=${region['taxonomy/id']}`
  //     }
      
  //   })
  // }
  // else {
  //   regionListIDs = ['&region='+regionID]
  // }

  const offset = (pageNo - 1) * pageSize;
  const occupationNameIds = occupationNameIdList.map((id) => {
     return `&occupation-name=${id}`})
  const url = `https://jobsearch.api.jobtechdev.se/search?q=${searchText}&occupation-field=${occupationFieldID}${occupationNameIds}&limit=${pageSize}&offset=${offset}&stats=occupation-name&stats=region&stats=occupation-field&stats.limit=30`;
  const data = await get<ISearchResults>(url);
  return data;
};

export const getOccupationFields = async (): Promise<ITaxonomy[]> => {
  const url =
    'https://taxonomy.api.jobtechdev.se/v1/taxonomy/main/concepts?type=occupation-field';
  const data = await get<ITaxonomy[]>(url);
  return data;
};

export const getOccupationHits = async (
  occupationFieldID: string
): Promise<INumberOfHits> => {
  const url = `https://jobsearch.api.jobtechdev.se/search?occupation-field=${occupationFieldID}&resdet=brief&offset=0&limit=0
`;
  const data = await get<ISearchResults>(url);
  return data.total;
};

export const getRegion = async (): Promise<ITaxonomy[]> => {
  const url =
    'https://taxonomy.api.jobtechdev.se/v1/taxonomy/main/concepts?limit=21&type=region';
  const data = await get<ITaxonomy[]>(url);
  return data;
};

export const getRegionHits = async (
  RegionID: string
): Promise<INumberOfHits> => {
  const url = `https://jobsearch.api.jobtechdev.se/search?region=${RegionID}&resdet=brief&offset=0&limit=0
`;
  const data = await get<ISearchResults>(url);
  return data.total;
};

// export const getCompleteData = async ():Promise<ISearchResults> => {
//     const url = 'https://jobstream.api.jobtechdev.se/snapshot'
//     const data = await get<ISearchResults>(url)
//     return data
// }
