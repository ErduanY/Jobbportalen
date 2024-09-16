import { DigiFormCategoryFilter, DigiFormFilter } from "@digi/arbetsformedlingen-react"
import { IFilterListContext, useFilterListContext } from "../contexts/FilterListContext"
import { useSetFilter } from "../contexts/SetFilterListContext"
import { useJobs } from "../contexts/JobsContext"
import { useEffect, useState } from "react"
import { FormFilterItem } from "@digi/arbetsformedlingen"


export const OccupationFieldFitler = () => {
    const filterListStateContext = useFilterListContext()
    const { setFilterList } = useSetFilter()
    const { handleSearch, response } = useJobs()

    const [occupationNameIds, setOccupationNameIds] = useState<FormFilterItem[]>([
        {
            id: '',
            label: ''
        }
    ])
    const [occupationFieldIds, setOccupationFieldIds] = useState<IFilterListContext[]>([
        {
            name: '',
            id: '',
            hits: 0,
            selected: false
        }
    ])

    useEffect(() => {
        if (response.total.value < 0)
            handleSearch('', 1, '', [], 0)
    }, [])

    useEffect(() => {
        if (response.hits.length <= 0) {
            buildOccupationFieldList()
        }
    }, [response])

    useEffect(() => {
        if (response.hits.length > 0)
            buildUniqueOccupationList()

    }, [response])



    const buildOccupationFieldList = () => {
        setOccupationFieldIds(response?.stats?.[2]?.values?.map((field) => ({
            name: field.term,
            id: field.concept_id,
            hits: field.count,
            selected: false
        })))
    }


    const buildUniqueOccupationList = () => {
        const uniqueIds = new Map()
        response?.stats?.[0]?.values?.forEach((ocu) => {
            if (!uniqueIds.has(ocu.concept_id))
                uniqueIds.set(
                    ocu.term,
                    ocu.concept_id
                )
        })
        const unsortedList = Array.from(uniqueIds, ([label, id]) => ({ label, id }))
        const sortedList = sortByLabel(unsortedList)
        setOccupationNameIds(sortedList)
    }


    const sortByLabel = (list: FormFilterItem[]) => {
        list.sort((a, b) => {
            if (a.label < b.label) return -1;
            if (a.label > b.label) return 1;
            return 0
        })
        return list
    }


    const sortedFilterList = occupationFieldIds?.sort((a, b) => {
        const nameA = a.name;
        const nameB = b.name;
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    });


    const handleClick = (label?: string) => {
        const clickedItem = occupationFieldIds.find((item) => item.name === label)
        if (clickedItem) {
            handleSearch('', 1, clickedItem?.id)
            // setClickedItem(clickedItem)
        }
     
        setFilterList(occupationFieldIds.map((item) => {
            if (item.id === clickedItem?.id) {
                return { ...item, selected: !item.selected }
            }
            return { ...item, selected: false }
        }))
    }
    const getSelected = () => {
        const selected = occupationFieldIds?.find((id) => id.selected)
        if (selected)
            return selected.id
        return ''
    }

    return (
        <>
            <DigiFormCategoryFilter
                afCategories={sortedFilterList}
                afMultiselect={false}
                onAfOnSelectedCategoryChange={(e) => { handleClick(e.detail[0]) }}
                afVisibleCollapsed={4}

            />
            <div>
                {filterListStateContext?.some(field => field.selected) && <DigiFormFilter
                    afFilterButtonText="Yrkesområde"
                    afSubmitButtonText="Filtrera"
                    afListItems={occupationNameIds}
                    onAfChangeFilter={(e) => console.log(e.detail.id, e.detail.isChecked)}
                    onAfResetFilter={() => handleSearch('', 1, getSelected())}
                    onAfSubmitFilter={(e) => handleSearch('', 1, getSelected(), e.detail.checked)}
                    onAfCloseFilter={(e) => handleSearch('', 1, getSelected(), e.detail.checked)}
                />}
            </div>

        </>

    )
}