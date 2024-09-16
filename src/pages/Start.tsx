import { useEffect } from "react"
import { JobCategory } from "../components/JobCategory"
import { RegionCategory } from "../components/RegionCategory"
import { useSetFilter } from "../contexts/SetFilterListContext"
import { useFilterListContext } from "../contexts/FilterListContext"
import { HeroStyled } from "../components/styled/HeroStyled"
import { InfoCardHeadingLevel, InfoCardType, InfoCardVariation } from "@digi/arbetsformedlingen"
import { DigiInfoCard, DigiLayoutContainer } from "@digi/arbetsformedlingen-react"
import { useSetFilterRegion } from "../contexts/setRegionListContext"
import { useRegionListContext } from "../contexts/RegionListContext"
import { CardContainerStyled } from "../components/styled/ContainerStyled"
import { InfoCardStyle } from "../components/styled/InfoCardStyle"


export const Start = () => {

const { setFilterList } = useSetFilter()
const {setFilterRegionList } = useSetFilterRegion()
const filterRegionList = useRegionListContext()
const filterList = useFilterListContext()

useEffect(()=>{
    setFilterList(filterList.map((item) => {
        if(item.selected === true) {
            return {...item, selected:false}
        }
    return item
    }))
    setFilterRegionList(filterRegionList.map((item) => {
        if(item.selected === true) {
            return {...item, selected:false}
        }
    return item
    }))
 

},[])



    return (
        <>
        <DigiLayoutContainer>

         <HeroStyled/>
        <JobCategory/>
        <RegionCategory/>
        <CardContainerStyled>
<div>

        <InfoCardStyle
	afHeading="Vad säger din personlighet om din karriär?"
	afHeadingLevel={InfoCardHeadingLevel.H2}
	afType={InfoCardType.TIP}
	afLinkHref="Frivillig länk"	
    afLinkText="Till quizet"	
    afVariation={InfoCardVariation.PRIMARY}
>
	<p>
    Testa dig själv och ta reda på vilket jobb som matchar dina styrkor och intressen med vårat quiz. Klicka här och börja nu!
	</p>
</InfoCardStyle>
    </div>
    </CardContainerStyled>
</DigiLayoutContainer>

        </>
    )
}