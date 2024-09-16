import { LinkVariation } from "@digi/arbetsformedlingen";
import { DigiLayoutContainer, DigiLinkExternal, DigiMediaImage } from "@digi/arbetsformedlingen-react";
import parse from 'html-react-parser';

import { useJobs } from "../contexts/JobsContext";
import { useNavigate, useParams } from "react-router-dom";
import { TypographyStyle } from "../components/styled/TypographyStyle";
import { SearchForm } from "../components/SearchForm";


import { Suspense } from "react";
import Spinner from "../components/Spinner";
import { FilterContainerStyled } from "../components/styled/ContainerStyled";

import { AdContainerStyle } from "../components/styled/AdContainerStyle";
import { getLogo } from "../ts/getLogo";
import { ImageWrapperStyled } from "../components/styled/ImageWrapperStyled";
import { OccupationFieldFitler } from "../components/OccupationFieldFilter";
import { RegionFilter } from "../components/RegionFilter";
import { LinkStyled } from "../components/styled/LinkStyled";



export const AdPresentation = () => {
  const { id } = useParams<{ id: string }>();
  const { jobs } = useJobs();

  const job = jobs.find(job => job.id === id);
  const navigate = useNavigate()

  if (!job) return <p>Job not found</p>;
  
const handleClick = () => {
  navigate('/annonser')
}

  return (
    <>
      <DigiLayoutContainer>

        <FilterContainerStyled>
          <SearchForm />
        </FilterContainerStyled>

        <FilterContainerStyled>
          <OccupationFieldFitler />
        </FilterContainerStyled>

        <FilterContainerStyled>
          <RegionFilter />
        </FilterContainerStyled>


        <AdContainerStyle>

          <div id="back-to-ads">
        <LinkStyled hideVisitedColor={true} afHref="/"
                            onAfOnClick={() => { handleClick() }}
                            afOverrideLink={true}
                            >
                           Till annonser
                        </LinkStyled>
                          </div>

          <Suspense fallback={<Spinner />}>
            {/* <DigiTypography afVariation={TypographyVariation.SMALL}> */}
            <TypographyStyle>

              <h2>{job.headline}</h2>
              <ImageWrapperStyled>

                <DigiMediaImage
                  afAlt={`logotyp tillhörande företaget ${job.employer.workplace}`}
                  afSrc={getLogo(job.logo_url)}
                  afUnlazy

                ></DigiMediaImage>
              </ImageWrapperStyled>
              <h3 className="employer-name">{job.employer.name}</h3>
              <p>{job.workplace_address.region}</p>
              <p>Publicerad: {job.publication_date}</p>
              <div id="job-description-long">
                {parse(job.description.text_formatted)}
              </div>

              <p>Typ av anställning: {job.employment_type.label} </p>
              <p>Ansök senast: {job.application_deadline}</p>
              <DigiLinkExternal
                afHref={job.application_details.url}
                afTarget="_blank"
                afVariation={LinkVariation.SMALL}
              >
                Ansök nu
              </DigiLinkExternal>

            </TypographyStyle>
            {/* </DigiTypography> */}
          </Suspense>

        </AdContainerStyle>

      </DigiLayoutContainer>

    </>
  );
};
