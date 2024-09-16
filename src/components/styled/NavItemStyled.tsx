import { DigiHeaderNavigationItem } from "@digi/arbetsformedlingen-react";
import styled from "styled-components";

export const NavItemStyled = styled(DigiHeaderNavigationItem)`
.digi-header-navigation-item--active.sc-digi-header-navigation-item-s>a {
    box-shadow: inset 0 -4px 0 0 var(--digi--color--background--inverted-1);
}
`