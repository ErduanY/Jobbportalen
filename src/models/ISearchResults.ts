import { IJobAdSearchResult } from "./IJobAdSearchResult";
import { INumberOfHits } from "./INumberOfHits";
import { IStatDetail } from "./IStatDetail";
import { IStats } from "./IStats";

export interface ISearchResults {
    total: INumberOfHits,
    positions:number,
    hits: IJobAdSearchResult[],
    stats: IStats[]

}