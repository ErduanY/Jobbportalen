
import { useJobs } from "../contexts/JobsContext"


export const useRegions = () => {

   const { response } = useJobs()
    
        
        const regionList = response?.stats?.[1]?.values?.map((field) => (
            {
                name: field.term,
                id: field.concept_id,
                selected: false
            }
        ))
        return { regionList }
}