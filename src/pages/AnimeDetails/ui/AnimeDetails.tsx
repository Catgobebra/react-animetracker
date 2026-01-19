import {
  AppShell
} from "@mantine/core";

import { AnimeHeader } from '@/entities/anime';
import {AnimeAdditionalInfo} from "@/features/AnimeDetailsTabs"; 

export function AnimeDetails() {
  return (
    <AppShell layout="alt" padding="lg">
      <AppShell.Main>
        <AnimeHeader animeId={30831} />
        <AnimeAdditionalInfo animeId={30831} />
      </AppShell.Main>
    </AppShell>
  );
}

export default AnimeDetails;
