
import { DigiInputStyledSecondary } from "./styled/DigiInputSearchStyled";
import { FormInputSearchVariation, FormInputType, ButtonType } from "@digi/arbetsformedlingen";
import { useJobs } from "../contexts/JobsContext";
import { useSearchText } from "../contexts/PageNoContext";
import { TypographyStyle } from "./styled/TypographyStyle";
import { useEffect } from "react";
import { HeroContainerStyled } from "./styled/ContainerStyled";
import { useNavigate } from "react-router-dom";


export const Hero = ({className}:CSSModuleClasses) => {
    const { handleSearch } = useJobs()
    const { updateSearchText, searchText } = useSearchText()

    const navigate = useNavigate()

    const jobs = useJobs()

useEffect(()=>{
 
    handleSearch('',1,'',[],0)
},[])

const handleSubmit = () => {
    handleSearch(searchText, 1,'',[])
    navigate('/annonser')
}
  

    return ( <>
           
       <div className={className}>
        <TypographyStyle>
            <h1>Slipp söndagsångesten, en ny framtid väntar</h1>
        </TypographyStyle>
            <HeroContainerStyled
            afVerticalPadding={true}
            >
                <DigiInputStyledSecondary 
                
                afLabel={`Sök bland ${jobs.response.total.value} annonser`}
                afVariation={FormInputSearchVariation.MEDIUM}
                afType={FormInputType.SEARCH}
                afButtonText="Sök"
                afButtonType={ButtonType.BUTTON}
                onAfOnChange={(e) => updateSearchText(e.target.value)}
                onAfOnSubmitSearch={() => handleSubmit()}
                
                />
            </HeroContainerStyled>
       </div>
    </>
            
    );
}

  