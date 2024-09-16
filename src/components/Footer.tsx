import { FooterCardVariation, FooterVariation, } from "@digi/arbetsformedlingen"
import { DigiFooterCard, DigiIconAccessibilityUniversal, DigiIconEnvelope, DigiIconGlobe, DigiMediaFigure, DigiMediaImage } from "@digi/arbetsformedlingen-react"
import { Link } from "react-router-dom"
import { FooterStyle } from "./styled/FooterStyle"


  export const Footer = () => {
    return <>


  <FooterStyle afVariation={FooterVariation.SMALL}>
  <div slot="content-top">
    <div>
      <DigiFooterCard afType={FooterCardVariation.ICON}>
        <ul>
          <li>
            <a href="https://arbetsformedlingen.se/om-webbplatsen/tillganglighet">
              <DigiIconAccessibilityUniversal></DigiIconAccessibilityUniversal>
              <p>Tillgänglighetsredogörelse</p>
            </a>
          </li>
          <li>
            <a href="https://arbetsformedlingen.se/other-languages">
              <DigiIconGlobe></DigiIconGlobe>
              <p>Other languages</p>
            </a>
          </li>
          <li>
            <a href="kontakt">
              <DigiIconEnvelope></DigiIconEnvelope>
              <p>Mejla vår funktionbrevlåda</p>
            </a>
          </li>
        </ul>
      </DigiFooterCard>
	  </div>
   <div>
      <DigiFooterCard afType={FooterCardVariation.BORDER}>
        <a href="#">Om JobbPortalen</a>
        <p>Systemversion: 0.9 <br/> Ansvariga: Patrik, Erduan, Caroline</p>
      </DigiFooterCard>
    </div>
    <div>
      <DigiFooterCard afType={FooterCardVariation.BORDER}>
        <a href="kontakt">Kontakta JobbPortalen</a>
        <p>Telefon: 0771-123-456 <br/> Öppettider: Vardagar 08:00-16:30</p>
      </DigiFooterCard>
    </div>
  </div>
</FooterStyle>


    
    </>

  }