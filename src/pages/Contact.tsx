import { ButtonSize, ButtonVariation, FormInputMode, FormInputType, FormInputValidation, FormInputVariation, FormReceiptType, FormReceiptVariation, FormTextareaValidation, FormTextareaVariation, TypographyHeadingJumboLevel } from "@digi/arbetsformedlingen"
import { DigiButton, DigiDialog, DigiFormInput, DigiFormReceipt, DigiFormTextarea, DigiLayoutContainer, DigiTypographyHeadingJumbo, DigiTypographyPreamble } from "@digi/arbetsformedlingen-react"
import { TypographyStyle } from "../components/styled/TypographyStyle"
import { useState } from "react"


export const Contact = () => {

	const [isReceiptVisible, setIsReceiptVisible] = useState(false)

	const handleButtonClick = () => {
		setIsReceiptVisible(true);
	};

	return <>
		<DigiLayoutContainer>
			<DigiTypographyHeadingJumbo
				afText="Kontakta oss"
				afLevel={TypographyHeadingJumboLevel.H1}
			></DigiTypographyHeadingJumbo>
			<TypographyStyle>
				<DigiTypographyPreamble>
					Har du frågor? Tveka inte på att skicka ett meddelande till oss! VI svarar vanligtvis inom 1-2 arbetsdagar.
				</DigiTypographyPreamble>

				<DigiFormInput
					afLabel="Namn"
					afVariation={FormInputVariation.MEDIUM}
					afType={FormInputType.TEXT}
					afValidation={FormInputValidation.NEUTRAL}
					afInputmode={FormInputMode.TEXT}
				></DigiFormInput>

				<DigiFormInput
					afLabel="E-post"
					afVariation={FormInputVariation.MEDIUM}
					afType={FormInputType.EMAIL}
					afValidation={FormInputValidation.NEUTRAL}
					afInputmode={FormInputMode.EMAIL}
				></DigiFormInput>

				<DigiFormInput
					afLabel="Telefonnummer"
					afVariation={FormInputVariation.MEDIUM}
					afType={FormInputType.TEL}
					afValidation={FormInputValidation.NEUTRAL}
					afInputmode={FormInputMode.NUMERIC}
				></DigiFormInput>

				<DigiFormTextarea
					afLabel="Meddelande"
					afVariation={FormTextareaVariation.LARGE}
					afValidation={FormTextareaValidation.NEUTRAL}
					afLabelDescription="Vad behöver du hjälp med? Beskriv här"
				></DigiFormTextarea>

				<DigiButton
					afSize={ButtonSize.LARGE}
					afVariation={ButtonVariation.PRIMARY}
					afFullWidth={false}
					onClick={handleButtonClick}>
					Skicka
				</DigiButton>

		
				<DigiDialog
					afShowDialog={isReceiptVisible}
	
				>

					<DigiFormReceipt
						afText="Tack, din rapport är inskickad!"
						afVariation={FormReceiptVariation.FULLWIDTH}
						afType={FormReceiptType.START}
					/>
				</DigiDialog>


			</TypographyStyle>
		</DigiLayoutContainer>
	</>
}