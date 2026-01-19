import {
  AppShell,
  Grid,
  Container,
  Button,
  Skeleton,
  Text
} from "@mantine/core";

import AnimeCard from "@/entities/anime/ui/AnimeCard";
import { animeApi } from "@/entities/anime";

export function AnimeTop() {
  const {data : animesResponse, isLoading: isLoadingAnimes, fetchNextPage } = animeApi.useGetTopAnimeInfiniteQuery()
  const animes = animesResponse?.pages?.flatMap(page => page.data) ?? []

  if (isLoadingAnimes) return <Container><Skeleton m={6} radius="xl" /></Container>
  if (isLoadingAnimes) return <Container><Text c="red">Не удалось загрузить</Text></Container>

  const handleNextPage = async () => {
    await fetchNextPage()
  }

  return (
    <AppShell layout="alt" padding="lg">
      <AppShell.Main>
          <Container>
          <Grid justify="center" align="flex-start" gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}>
            {animes?.map((anime) =>
              <Grid.Col key={anime.mal_id} span="auto">
                <AnimeCard 
                animeType={anime.type}
                animeThemes={anime.themes}
                animeBadges={anime.genres}
                animeRating={anime.score} 
                animeSynopsis={anime.synopsis} 
                animeImg={anime.images.jpg.large_image_url}
                animeTitle={anime.title}/></Grid.Col>
            )
            }
          </Grid>
          <Button fullWidth mt={10} color="cyan" onClick={handleNextPage}>Next</Button>
          </Container>
      </AppShell.Main>
    </AppShell>
  );
}

export default AnimeTop;
