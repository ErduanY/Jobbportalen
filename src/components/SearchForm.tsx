import { ButtonType, FormInputSearchVariation, FormInputType } from "@digi/arbetsformedlingen"
import { useJobs } from "../contexts/JobsContext"
import { useSearchText } from "../contexts/PageNoContext"
import { DigiInputStyledPrimary } from "./styled/DigiInputSearchStyled"


export const SearchForm = () => {

    const { handleSearch } = useJobs()
    const { updateSearchText, searchText } = useSearchText()


    return <>

        <DigiInputStyledPrimary
            afLabel="Sök annonser"
            afVariation={FormInputSearchVariation.MEDIUM}
            afType={FormInputType.SEARCH}
            afButtonText="Sök"
            afButtonType={ButtonType.BUTTON}
            onAfOnChange={(e) => updateSearchText(e.target.value)}
            onAfOnSubmitSearch={() => handleSearch(searchText, 1,'')}
        >
        </DigiInputStyledPrimary>

       
    </>

}