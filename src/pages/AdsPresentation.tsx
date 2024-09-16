
import { DigiLayoutBlock, DigiLayoutColumns, DigiLayoutContainer, DigiNavigationPagination } from "@digi/arbetsformedlingen-react"
import { useJobs } from "../contexts/JobsContext"
import { lazy, Suspense, useEffect, useState } from "react"
const AdItem = lazy(() => import('../components/AdItem'))
import { LayoutBlockVariation, LayoutColumnsElement, LayoutColumnsVariation } from "@digi/arbetsformedlingen"
import { useSearchText } from "../contexts/PageNoContext"
import { pageSize } from "../service/jobSearchService"
import { DigiNavigationPaginationCustomEvent } from "@digi/arbetsformedlingen/dist/types/components"
import { SearchForm } from "../components/SearchForm"
import { useFilterListContext } from "../contexts/FilterListContext"
import { OccupationFieldFitler } from "../components/OccupationFieldFilter"
import Spinner from "../components/Spinner"
import { RegionFilter } from "../components/RegionFilter"
import { CardContainerStyled, FilterContainerStyled } from "../components/styled/ContainerStyled"




export const AdsPresentation = () => {

    const { response, handleSearch, jobs } = useJobs()
    const [totalPages, setTotalPages] = useState(0)
    const [pageNo, setPageNo] = useState(1)
    const { searchText } = useSearchText()
    const offset = (pageNo - 1) * pageSize;

    const filterListInState = useFilterListContext()

    const findSelected =
        filterListInState.find((item) => item.selected)

    useEffect(() => {
        setTotalPages(Math.ceil(response.total.value / pageSize))
    }
        , [response.total.value])

    // useEffect(() => {
    //         if (!response.hits.length && findSelected)
    //             handleSearch(searchText, pageNo, findSelected?.id)

    //     },[pageNo, handleSearch])

    const handlePagination = (e: DigiNavigationPaginationCustomEvent<number>) => {
        setPageNo(e.detail)
        if (findSelected)
            handleSearch(searchText, e.detail, findSelected?.id)
        else{
            handleSearch(searchText,e.detail,'')
        }

    }

    const sortedJobs = [...jobs].sort((a, b) => {
        const titleA = a.headline;
        const titleB = b.headline;
        if (titleA < titleB) return -1;
        if (titleA > titleB) return 1;
        return 0;
    })

    return (
        <>
            <DigiLayoutContainer>
                <FilterContainerStyled>
                    <SearchForm />
                </FilterContainerStyled>

                <FilterContainerStyled>
                    <OccupationFieldFitler />
                </FilterContainerStyled>

                <FilterContainerStyled>
                    <RegionFilter />
                </FilterContainerStyled>
                
<CardContainerStyled>

                <DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY} className="ads-block">
                    <DigiLayoutColumns
                        afElement={LayoutColumnsElement.DIV}
                        afVariation={LayoutColumnsVariation.THREE}

                    >
                        <Suspense fallback={<Spinner />}>

                        
                            <div>
                                {sortedJobs.map((job) => {
                                    if (job.description.text_formatted.includes('ahref')) {
                                        return null
                                    }
                                    return (
                                        <div key={job.id}>
                                            <Suspense fallback={<Spinner />}>

                                                <AdItem job={job}></AdItem>
                                            </Suspense>
                                        </div>
                                    )
                                })}
                            </div>
                        </Suspense>
                    </DigiLayoutColumns>
                </DigiLayoutBlock>
</CardContainerStyled>

                <div>

                    {response.hits.length > 0 && <DigiNavigationPagination
                        afTotalPages={totalPages}
                        afInitActivePage={pageNo}
                        afCurrentResultStart={offset + 1}
                        afCurrentResultEnd={offset + pageSize}
                        afTotalResults={response.total.value}
                        afResultName="annonser"

                        onAfOnPageChange={(e) => handlePagination(e)}
                    >
                    </DigiNavigationPagination>}

                </div>
            </DigiLayoutContainer>

        </>

    )
}              