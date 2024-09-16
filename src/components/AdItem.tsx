import { InfoCardMultiHeadingLevel, InfoCardMultiType, LinkVariation } from "@digi/arbetsformedlingen"
import { IJobAdSearchResult } from "../models/IJobAdSearchResult"

import {  DigiLinkInternal, DigiMediaFigure, DigiMediaImage} from "@digi/arbetsformedlingen-react"

import { useNavigate } from "react-router-dom"
import parse from 'html-react-parser';
import { TypographyStyle } from "./styled/TypographyStyle";
import { InfocardMultiStyled } from "./styled/InfocardMultiStyled";
import { ImageWrapperStyled } from "./styled/ImageWrapperStyled";
import { getLogo } from "../ts/getLogo";
import { InnerContainerStyled } from "./styled/InnerContainerStyled";


interface IAdPresentationProps {
    job: IJobAdSearchResult
}

const AdItem = ({ job }: IAdPresentationProps) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/annons/${job.id}`);
    };


    return (
        
        <InfocardMultiStyled
            afHeading={job.headline}
            afHeadingLevel={InfoCardMultiHeadingLevel.H2}
            afType={InfoCardMultiType.RELATED}
        >
                    
   

            <InnerContainerStyled>

            <ImageWrapperStyled>
                <DigiMediaFigure>
                    <DigiMediaImage
                        afAlt={`logotyp tillhörande företaget ${job.employer.workplace}`}
                        afSrc={getLogo(job.logo_url)}
                        afWidth="150"
                        afUnlazy
                    ></DigiMediaImage>
                </DigiMediaFigure>
            </ImageWrapperStyled>


            <TypographyStyle>
                <p>{job.employer.name}</p>
                <p>{job.workplace_address.city}</p>
                <p>Publicerad: {job.publication_date}</p>
                <div className="truncated-description">
                    {parse(job.description.text_formatted)}
                </div>


                <DigiLinkInternal
                    afOverrideLink
                    afHref="/"
                    afVariation={LinkVariation.SMALL}
                    onClick={handleClick}
                >
                    Läs mer och ansök
                </DigiLinkInternal>
            </TypographyStyle>
            </InnerContainerStyled>


        </InfocardMultiStyled>
    )
}
export default AdItem