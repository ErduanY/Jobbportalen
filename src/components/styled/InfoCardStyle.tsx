import { DigiInfoCard} from "@digi/arbetsformedlingen-react";
import styled from "styled-components";

export const InfoCardStyle = styled(DigiInfoCard)`
.sc-digi-info-card-h {
    margin-bottom: 1rem;
}
.sc-digi-link-s>a:visited, .sc-digi-link-s>a:visited svg {
    color:var(--digi--color--text--link)
}

.sc-digi-link-internal-h .digi-link-internal__icon.sc-digi-link-internal {
    color:var(--digi--color--text--link)

}
`