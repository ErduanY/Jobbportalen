import { IJobTechTaxonomyItem } from "./IJobTechTaxonomyItem";

export interface IRequirements {
    skills: IJobTechTaxonomyItem[],
    languages: IJobTechTaxonomyItem[],
    work_experiences: IJobTechTaxonomyItem[],
    education: IJobTechTaxonomyItem[],
    education_level: IJobTechTaxonomyItem[],
}