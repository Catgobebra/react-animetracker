import {
  Text,
  Card,
  Container,
  Group,
  Stack,
  BackgroundImage,
  Badge,
  Flex,
  Center,
  Pagination
  /* Overlay */
} from "@mantine/core";

import { animeApi } from '@/entities/anime';

import Loading from "./Loading";
import Error from "./Error";

import { ITEMS_EP_PAGE } from "../constants/constants";

import {formatDateUS} from '@/shared/lib/datetime'

import usePagination from "./usePagination";

interface EpisodesProps {
    animeId : number
}

export function Episodes({animeId} : EpisodesProps) {
  const {data: animeResponse, isLoading : isLoadingAnime,
     isError : animeError} = animeApi.useGetAnimeByIdQuery(animeId)
  const {data: episodesResponse,
     isLoading : isLoadingEpisodes,
    isError : EpisodesError } = animeApi.useGetAnimeEpisodesQuery(animeId)
  
  const anime = animeResponse?.data;
  const episodes = episodesResponse?.data ?? [];

  const isLoading = isLoadingAnime || isLoadingEpisodes

  const {pages,
        currentPage,
        activePage,
        setPage,
        hasNext} = usePagination(episodes,ITEMS_EP_PAGE)

  if (isLoading) return <Loading height={400} />
  if (animeError || !animeResponse?.data) return <Error height={400} />
  if (EpisodesError || !episodesResponse?.data) return <Error height={400} />

  return (
      <Container>
      <Text size="lg" mt="md">Episodes ({episodes.length})</Text>
      <Stack w="100%" h={290}>
        {currentPage.map((episode) => {
          return (<Card w="100%" key={episode.mal_id}>
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
      {hasNext && <Center><Pagination total={pages} value={activePage} onChange={setPage} withEdges /></Center>}
    </Container>
  )
}

export default Episodes