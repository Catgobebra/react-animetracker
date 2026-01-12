import {
  Text,
  Card,
  Container,
  Group,
  Stack,
  BackgroundImage,
  Badge,
  Flex,
  /* Overlay */
} from "@mantine/core";

import { animeApi } from '@/entities/anime';

import {formatDateUS} from '@/shared/lib/datetime'

export function Episodes() {
  const {data: animeResponse, /* error, */ isLoading : isLoadingAnime } = animeApi.useGetAnimeByIdQuery(30831)
  const {data: episodesResponse, isLoading : isLoadingEpisodes } = animeApi.useGetAnimeEpisodesQuery(30831)
  
  const anime = animeResponse?.data;
  const episodes = episodesResponse?.data ?? [];

  const isLoading = isLoadingAnime || isLoadingEpisodes

  if (isLoading) return <p>gay...</p>

    
  console.log(console.log(episodes))
  return (
      <Container>
      <Text size="lg" mt="md">Episodes ({episodes.length})</Text>
      <Stack w="100%">
        {episodes.map((episode, index) => {
          return (<Card w="100%" key={index}>
          <Flex justify="space-between" align="flex-start">
            <Flex gap={15} align="flex-start">
              <BackgroundImage
                radius="md"
                h={100}
                w={160}
                src={anime?.images.jpg.large_image_url || "https://placehold.co/180x110/333333/FFFFFF/png?text=No+Cover"}
                pos="relative"
              >
                <Flex h={100} align="center" justify="center" pos="relative">
                  {/* <ActionIcon size={40} color="teal" variant="transparent">
                    <IconCircleCheck size={40} />
                  </ActionIcon> */}
                  <Badge
                    pos="absolute"
                    bottom={6}
                    right={6}
                    color="black"
                    tt="none"
                    size="xs"
                    radius="xs"
                  >
                    {anime?.duration.substring(0,anime?.duration.indexOf('min')+3)}
                  </Badge>
                </Flex>
              </BackgroundImage>
              <Stack gap={6} justify="center">
                <Group>
                  <Text tt="uppercase" c="dimmed">
                    EP {episode.mal_id}
                  </Text>
                  {/* <Badge variant="outline" color="teal" tt="none">Watched</Badge> */}
                </Group>
                <Text>{episode.title}</Text>
              </Stack>
            </Flex>
            <Text size="sm" c="dimmed">
              {formatDateUS(new Date(episode.aired))}
            </Text>
          </Flex>
        </Card>)
        })}
      </Stack>
    </Container>
  )
}

export default Episodes