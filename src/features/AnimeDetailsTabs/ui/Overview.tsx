import {
  Title,
  Text,
  Center,
  Avatar,
  Card,
  Container,
  Stack,
  Group,
  Pagination,
  ScrollArea
} from "@mantine/core";

import { animeApi } from '@/entities/anime';
import type { Anime } from '@/entities/anime';

import Error from "./Error";
import Loading from "./Loading";

import { ITEMS_PRODUC_PAGE } from "../constants/constants";

import usePagination from "./usePagination";

interface OverviewProps {
  animeId : number
}

export function Overview({animeId} : OverviewProps) {

  const {data, isLoading, isError } = animeApi.useGetAnimeByIdQuery(animeId)
  const anime = data?.data as Anime;

  const {pages,
  currentPage,
  activePage,
  setPage,
  hasNext} = usePagination(anime.producers,ITEMS_PRODUC_PAGE)

  if (isLoading) return <Loading height={400}/>
  if (isError || !data?.data) return <Error height={400}/>

  return (
    <Container>
      <Title order={3} mt="md">
        Synopsis
      </Title>
      <ScrollArea 
        scrollbarSize={6}
        scrollHideDelay={600}
        h={100}
      >
        <Text c="dimmed" lh={1.5} pr="md">
          {anime.synopsis}
        </Text>
      </ScrollArea>
      <Text size="lg" mt="md">
        Producers
      </Text>
      <Group>
      {currentPage.map((producer) => (<Card
        shadow="sm"
        padding="sm"
        component="a"
        href={producer.url}
        target="_blank"
        h={170}
        w={298}
        radius="lg"
        key={producer.mal_id}
      >
        <Center>
          <Avatar h={80} w={80} name={producer.name} src="image.png" />
        </Center>
        <Stack align="center">
          <Text size="md" mt={1}>
            {producer.name}
          </Text>
          <Text c="dimmed" size="sm">
            {producer.type}
          </Text>
        </Stack>
      </Card>))}
      </Group>
      {hasNext && <Center><Pagination mt={10} total={pages} value={activePage} onChange={setPage} withEdges /></Center>}
    </Container>
  );
}

export default Overview;
