import { IEmployer } from './IEmployer';
import { IJobAdDescription } from './IJobAdDescription';
import { IJobTechTaxonomyItem } from './IJobTechTaxonomyItem';
import { IRequirements } from './IRequirements';
import { IWorkplaceAddress } from './IWorkplaceAddress';

export interface IJobAdSearchResult {
  id: string;
  webpage_url: string;
  logo_url: string;
  headline: string;
  application_deadline: string;
  number_of_vacancies: number;
  description: IJobAdDescription;
  employment_type: IJobTechTaxonomyItem;
  salary_type: IJobTechTaxonomyItem;
  duration: IJobTechTaxonomyItem;
  working_hours_type: IJobTechTaxonomyItem;
  employer: IEmployer;
  application_details: {
    url:string
  }
  experience_required: boolean;
  access_to_own_car: boolean;
  driving_licence_required: boolean;
  occupation: IJobTechTaxonomyItem
  occupation_group: IJobTechTaxonomyItem
  occupation_field: IJobTechTaxonomyItem
  workplace_address: IWorkplaceAddress
  must_have: IRequirements;
  publication_date: string;
  removed: boolean;
  removed_date: string;
}
