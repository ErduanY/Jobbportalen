import { DigiFormInputSearch } from "@digi/arbetsformedlingen-react";
import styled from "styled-components";

export const DigiInputStyledPrimary = styled(DigiFormInputSearch)`
.digi-form-input__input-wrapper.sc-digi-form-input{
    margin-bottom: 1rem;
    
}
.sc-digi-button-h .digi-button--variation-primary.sc-digi-button {
    background-color: --digi--color--background--inverted-1;
}
`
export const DigiInputStyledSecondary = styled(DigiInputStyledPrimary)`

border-radius: 20rem;


`