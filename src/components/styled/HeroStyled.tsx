import styled from "styled-components";
import { Hero } from "../Hero";

export const HeroStyled = styled(Hero)`
background: linear-gradient(186deg, rgba(0,0,0,0.6376925770308124) 0%, rgba(255,255,255,0) 100%), url('/welder_1000.jpg');
            background-size: cover;
            background-position: center;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            justify-content: end;
            align-items: flex-start;
            position: relative;
            
            height: 40vh;
            border-radius: var(--digi--border-radius--primary);


            h1{
                margin: var(--digi--margin--largest);
                font-size: var(--digi--typography--heading-1--font-size--mobile);
                /* max-width: 28vw; */
                position: sticky;
            }

            @media screen and (min-width:768px) {
                background-image: url('/welder_1000.jpg');
                h1{
                    font-size: var(--digi--typography--heading-1--font-size--desktop-large);
                    max-width: 28vw;
                }
            }
`