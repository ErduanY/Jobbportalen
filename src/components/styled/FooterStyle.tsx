import styled from "styled-components";
import { DigiFooter,  } from "@digi/arbetsformedlingen-react";


export const FooterStyle = styled(DigiFooter)`
.sc-digi-layout-block-h .digi-layout-block.sc-digi-layout-block {
    background-color: var(--digi--color--background--inverted-3);
}
.sc-digi-footer .sc-digi-layout-container {
  /* background-color: #333030; */
  /* margin-top: 200px; */
 margin-bottom: 0;
 /* height: 320px; */
 p {
    font-size: var(--digi--typography--link--font-size--desktop);
    font-weight: var(--digi--typography--link--font-weight);
 }
}
.sc-digi-footer-card-h .digi-footer-card--border.sc-digi-footer-card {
   border: unset;
}
`

