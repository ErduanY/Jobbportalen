import { DigiLayoutContainer} from "@digi/arbetsformedlingen-react"
import { TypographyStyle } from "./styled/TypographyStyle";
import { OccupationFieldList } from "./OccupationFieldList";
import { ContainerStyled } from "./styled/ContainerStyled";



export const JobCategory = () => {


    return <>
        <ContainerStyled>
            <TypographyStyle>
                    <h2>Jobbkategorier</h2>

                <OccupationFieldList>

                </OccupationFieldList>

            </TypographyStyle>

        </ContainerStyled>

    </>
}
export default JobCategory;