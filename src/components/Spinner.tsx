import { LoaderSkeletonVariation, LoaderSpinnerSize } from "@digi/arbetsformedlingen";
import { DigiLayoutContainer, DigiLoaderSkeleton, DigiLoaderSpinner } from "@digi/arbetsformedlingen-react";

export const Spinner = () => {
  return (
    
<DigiLoaderSkeleton
	afVariation={LoaderSkeletonVariation.SECTION}
	afCount={4}
>
</DigiLoaderSkeleton>


//   <DigiLayoutContainer>
//     <DigiLoaderSpinner 
// 	afSize={LoaderSpinnerSize.MEDIUM}
// 	afText="Laddar">
// </DigiLoaderSpinner>
//   </DigiLayoutContainer>
  )
};

export default Spinner;
