import { DigiMediaFigure, DigiMediaImage } from "@digi/arbetsformedlingen-react"
import { HeaderContainer, LogoContainer } from "./styled/HeaderStyle"


interface ILayoutProps {
    children: JSX.Element
}


export const Header = ({ children }: ILayoutProps) => {
    return (
        <>
                <HeaderContainer>
                    <LogoContainer>
                    <DigiMediaFigure className="digi-logo">
                        <DigiMediaImage
                            afAlt="Jobbportalens logotyp"
                            afSrc="/img/jobbportalen-logo.png"
                            afWidth="400"
                            afUnlazy
                        />
                    </DigiMediaFigure>
                    </LogoContainer>

                    

                    {children}
                </HeaderContainer>
        </>
    )

}