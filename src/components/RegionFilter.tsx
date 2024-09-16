import { useEffect, useState } from "react"
import { useJobs } from "../contexts/JobsContext"
import { useRegionListContext } from "../contexts/RegionListContext"
import { useSetFilterRegion } from "../contexts/setRegionListContext"
import { DigiFormCategoryFilter} from "@digi/arbetsformedlingen-react"
import { IFilterState, useOccupationFields } from "../hooks/useOccupationFields"
import { getRegion } from "../service/jobSearchService"
import { useRegions } from "../hooks/useRegions"
import { ITaxonomy } from "../models/ITaxonomy"

export const RegionFilter = () => {
const regionListContext = useRegionListContext()
const { setFilterRegionList } = useSetFilterRegion()
const { handleSearch } = useJobs()
const [ setClickedItem] = useState('')
const {regionList} = useRegions()
const [regions, setRegions] = useState<IFilterState>({
   fields: [],
   hits: [],
   selected: true,
 })

const {updateFilterFields} = useOccupationFields()



const updateRegions = async() => {
   const fields = await getRegion()
   const newFields : ITaxonomy[] = []
   fields.forEach((field)=>{
      newFields.push(field)
   })
    setRegions(
      {...regions, fields:newFields}
   )

}
// useEffect(()=>{
//   updateRegions()

// },[])

// useEffect(()=>{
//    updateFormList()

// },[])



   const handleClick = (label?: string) => {
      const clickedItem = regionListContext.find((item) => item.name === label)
      if (clickedItem) {
          console.log(clickedItem)
          handleSearch('', 1, clickedItem?.id,)
          setClickedItem(clickedItem.id)
          // if(listItems){
          //     handleSearch('', 1, clickedItem?.id, listItems)
          // }
      }

      setFilterRegionList(regionListContext.map((item) => {
          if (item.id === clickedItem?.id) {
              return { ...item, selected: !item.selected }
          }
          return { ...item, selected: false }
      }))
  }


  const updateFormList = () => {

   setFilterRegionList(
     regions.fields.map((field, i) => ({
       // id: field["taxonomy/id"],
       name: field['taxonomy/preferred-label'],
       id: field['taxonomy/id'],
       hits: regions.hits[i].value,
     }))
   );


 };

//   updateFormList(occupations,setFilterRegionList)


   return(
   <>

<DigiFormCategoryFilter
                afCategories={regionList}
                afAllCategoriesText={'Alla regioner'}
                afMultiselect={false}
                onAfOnSelectedCategoryChange={(e) => { handleClick(e.detail[0]) }}
            />
      
   </>
   )
}

