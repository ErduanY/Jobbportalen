import { useOccupationFields } from "../hooks/useOccupationFields"
import { useNavigate } from "react-router-dom"
import { CategoryList } from "./styled/CategoryListStyle"
import { useJobs } from "../contexts/JobsContext"
import { LinkStyled } from "./styled/LinkStyled"


export const OccupationFieldList = () => {

    const { filterListState, setFilterList } = useOccupationFields()
    const navigate = useNavigate()
    const { handleSearch, response } = useJobs()

    const handleClick = (id: string) => {
        handleSearch('', 1, id,[])
        navigate('/annonser')
        setFilterList(filterListState.map((item) => {
            if (item.id === id) {
                return { ...item, selected: true }
            }
            return item
        }))
    }
    const occupations = response?.stats?.[2]?.values 

    const sortedFilterList = occupations?.sort((a, b) => {
       const nameA = a.term;
    const nameB = b.term;
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});


    return (
        <>
            <CategoryList>

                {sortedFilterList?.map((item) => (
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