import { InfoCardHeadingLevel, InfoCardSize, InfoCardType, InfoCardVariation } from "@digi/arbetsformedlingen";
import { TypographyStyle } from "../components/styled/TypographyStyle";
import { InfoCardStyle } from "../components/styled/InfoCardStyle";
import { ContainerStyled } from "../components/styled/ContainerStyled";


export const RecentGraduate = () => {
	return <>
		<ContainerStyled>

			<InfoCardStyle
				afHeading="Tips på att skriva CV"
				afHeadingLevel={InfoCardHeadingLevel.H2}
				afType={InfoCardType.TIP}
				afLinkHref="https://arbetsformedlingen.se/for-arbetssokande/cv-ansokan-och-intervju/skriva-cv"
				afLinkText="Läs mer på Arbetsförmedlingen"
				afVariation={InfoCardVariation.PRIMARY}
			afSize={InfoCardSize.STANDARD}
			>
				<TypographyStyle>

					<p>
						När du skriver ett bra CV är det viktigt att vara tydlig och strukturerad. Börja med att lista dina kontaktuppgifter och en kort sammanfattning av din profil. Fokusera på relevanta erfarenheter och färdigheter, och anpassa ditt CV efter den tjänst du söker. Använd gärna punktlistor för att göra det lättläst. Se till att inkludera utbildning och eventuella certifikat, och håll ditt CV kortfattat, helst en till två sidor. Avsluta med att noggrant korrekturläsa för att undvika stavfel och andra misstag
				
					</p>
					
				</TypographyStyle>
			</InfoCardStyle>
		</ContainerStyled>

		<ContainerStyled>
				<InfoCardStyle
					afHeading="Att tänka på inför arbetsintervjun"
					afHeadingLevel={InfoCardHeadingLevel.H2}
					afType={InfoCardType.TIP}
					afLinkHref="https://arbetsformedlingen.se/for-arbetssokande/cv-ansokan-och-intervju/jobbintervjun"
					afLinkText="Läs mer på Arbetsförmedlingen"
					afVariation={InfoCardVariation.PRIMARY}
					afSize={InfoCardSize.STANDARD}
					
					>
					<div>
					<TypographyStyle>
						<p>
							Inför arbetsintervjun är det viktigt att förbereda sig väl. Läs på om företaget och den roll du söker, och öva på att svara på vanliga intervjufrågor. Välj en professionell klädsel som passar företagskulturen, och se till att planera din resa så att du kommer i god tid. Slutligen, var dig själv och visa ditt genuina intresse under intervjun.
						</p>
					</TypographyStyle>
			</div>

				</InfoCardStyle>
		</ContainerStyled>

	</>
};
