import TabsNavigation from "./TabsNavigation";
import useSelectSegment from "./useSelectSegment";

import Overview from "./Overview";
import Episodes from "./Episodes";
import Characters from "./Characters";
import Cast from "./Cast";
import Reviews from "./Reviews"

interface AnimeAdditionalInfoProps {
  animeId : number
}

export function AnimeAdditionalInfo({animeId} : AnimeAdditionalInfoProps) {

  const [currentSegment, handleSegmentChange] = useSelectSegment()
  return (
    <>
      <TabsNavigation
      currentSegment={currentSegment}
      handleSegmentChange={handleSegmentChange}
      />
      {currentSegment === "Overview" && (
        <Overview animeId={animeId} />
      )}
      {currentSegment === "Episodes" && (
        <Episodes animeId={animeId} />
      )}
      {currentSegment === "Characters" && (
        <Characters animeId={animeId} />
      )}
      {currentSegment === "Cast & Crew" && (
        <Cast animeId={animeId} />
      )}
      {currentSegment === "Reviews" && (
        <Reviews animeId={animeId} />
      )}
    </>
  );
}

export default AnimeAdditionalInfo;
