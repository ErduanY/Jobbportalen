import { DigiLayoutContainer} from "@digi/arbetsformedlingen-react"

import { TypographyStyle } from "./styled/TypographyStyle";

import { RegionList } from "./RegionList";
import { ContainerStyled } from "./styled/ContainerStyled";


export const RegionCategory = () => {

    
    return <>
        <ContainerStyled>
            <TypographyStyle>
                <h2>Platser</h2>

               <RegionList/>
            </TypographyStyle>
        </ContainerStyled>
    </>

}
