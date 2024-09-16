import styled from "styled-components";


// Header-styling
export const HeaderContainer = styled.header`

 display: flex;
  justify-content: space-around;
  align-items: center; 
  padding: 1rem;  
  .digi-header__wrapper{
    display: none; 
   
}

@media screen and (min-width:768px)  {
  .sc-digi-layout-block-h .digi-layout-block.sc-digi-layout-block{
  background-color: transparent;
  margin-top: -3.73rem;

}
}

.sc-digi-layout-block-h .digi-layout-block.sc-digi-layout-block{
  background-color: transparent;
}
`;

// Logotypens container
export const LogoContainer = styled.div`
  .digi-logo  {
   margin-top: 30px;
  }

`;