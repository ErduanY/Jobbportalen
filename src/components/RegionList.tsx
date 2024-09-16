import { DigiLinkInternal } from "@digi/arbetsformedlingen-react"
import { useRegions } from "../hooks/useRegions"
import { useNavigate } from "react-router-dom"
import { CategoryList } from "./styled/CategoryListStyle"
import { useJobs } from "../contexts/JobsContext"
import { LinkStyled } from "./styled/LinkStyled"

export const RegionList = () => {
    const { regionList } = useRegions()
    const navigate = useNavigate()
    const { handleSearch, response } = useJobs()
    
    const handleClick = (id: string) => {
        handleSearch('', 1, '',[])
        navigate('/annonser')
    }
    
const regions = response?.stats?.[1]?.values

    const sortedRegionList = regions?.sort((a, b) => {
        const nameA = a.term
        const nameB = b.term
        if (nameA < nameB) return -1
        if (nameA > nameB) return 1
        return 0
    })


    return (
        <>
            <CategoryList>
                {sortedRegionList?.map((item) => (
                    <li key={item.concept_id}>
                        <LinkStyled hideVisitedColor={true} afHref="/"
                            onAfOnClick={() => { handleClick(item.concept_id) }}
                            afOverrideLink={true}
                        >
                            {item.term}
                        </LinkStyled>
                    </li>
                ))}
            </CategoryList>
        </>
    )
}
