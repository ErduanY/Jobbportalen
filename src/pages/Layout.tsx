
import { DigiHeader, DigiHeaderNavigation } from "@digi/arbetsformedlingen-react"
import { NavLink, Outlet, useLocation } from "react-router-dom"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { NavItemStyled } from "../components/styled/NavItemStyled"


export const Layout = () => {

    const location = useLocation().pathname

    return (
        <>
            <Header>

                <DigiHeader
            afMenuButtonText="Meny"
            
        > 

                  <div slot="header-navigation"> 
                    <DigiHeaderNavigation
                        afCloseButtonText="Stäng"
                        afCloseButtonAriaLabel="Stäng meny"
                        afNavAriaLabel="Huvudmeny"
                    >

                        <NavItemStyled afCurrentPage={location === '/' ? true : false}>
                            <NavLink to={'/'}>Start</NavLink>
                        </NavItemStyled>
                        <NavItemStyled afCurrentPage={location === '/annonser' ? true : false}>
                            <NavLink to={'/annonser'}>Sök annonser</NavLink>
                        </NavItemStyled>
                        <NavItemStyled afCurrentPage={location === '/nyexaminerad' ? true : false}>
                            <NavLink to={'/nyexaminerad'}>Nyexaminerad</NavLink>

                        </NavItemStyled>
                        <NavItemStyled afCurrentPage={location === '/kontakt' ? true : false}>
                            <NavLink to={'/kontakt'}>Kontakt</NavLink>
                        </NavItemStyled>
                    </DigiHeaderNavigation>
                 </div>  
                </DigiHeader> 
            </Header>


            <main>

                <Outlet />

            </main>

            <Footer />
        </>

    )
}