import {
  Text,
  Center,
  Container,
  Image,
  Button,
  ActionIcon,
  Group,
  Stack,
  RingProgress,
  Space,
  Rating,
  BackgroundImage,
  Badge,
  Flex,
  Skeleton
} from "@mantine/core";

import {
  IconPlayerPlayFilled,
  IconPlus,
  IconHeart,
  IconShare,
  IconCalendarWeek,
  IconClockHour5,
} from "@tabler/icons-react";

import { useGetAnimeByIdQuery } from "../api/animeApi";
import type {Genre } from '../model/types';

interface AnimeHeaderProps {
  animeId: number;
}

export function AnimeHeader({animeId}: AnimeHeaderProps) {
  const {data : animeResponse, isLoading: isLoadingAnime } = useGetAnimeByIdQuery(animeId)
  const anime = animeResponse?.data;

  const year = anime?.aired?.from 
  ? new Date(anime.aired.from).getFullYear() 
  : "—";

  if (isLoadingAnime) return <Container><Skeleton height={400} m={6} radius="xl" /></Container>
  return (
    <Container>
      <BackgroundImage src="">
        <Flex gap={30}>
          <Image h={375} w={245} radius="lg"
           src={anime?.images.jpg.large_image_url || "https://placehold.co/180x110/333333/FFFFFF/png?text=No+Cover"} />
          <Stack justify="flex-end">
            <Text size="md" fw={500} mt="md">
              {anime?.title_english || "Error"}
            </Text>
            <Group align="center">
              <Group gap="xs" align="center">
                <IconCalendarWeek size={16} />
                <Text size="sm">{year}</Text>
              </Group>
              <Group gap="xs" align="center">
                <IconClockHour5 size={16} />
                <Text size="sm">{anime?.duration || "-"}</Text>
              </Group>
              <Group>
                <Badge tt="none" variant="default" color="gray">
                  {anime?.type || "-"}
                </Badge>
                {anime?.genres.map((genre : Genre) => {
                  return (<Badge key={genre.mal_id} tt="none" variant="default" color="gray">
                  {genre.name}
                </Badge>)
                })}
              </Group>
            </Group>
            <Group>
              <Group gap={1}>
                <RingProgress
                  size={90}
                  thickness={8}
                  label={
                    <Text size="xs" ta="center">
                      <Text size="sm">{anime?.score}</Text>
                      <Space h={1} />
                      <Center>
                        <Rating size="xs" defaultValue={2} count={1} readOnly />
                      </Center>
                    </Text>
                  }
                  sections={[{ value: (anime?.score || 0)*10 , color: "#b78700" }]}
                />
                <Stack gap={4}>
                  <Text size="md" fw={500}>
                    Rating
                  </Text>
                  <Text size="sm" c="dimmed">
                    Scored by {anime?.scored_by || 0}
                  </Text>
                </Stack>
              </Group>

              <Group gap={1}>
                <RingProgress
                  size={90}
                  thickness={8}
                  label={
                    <Text size="xs" ta="center">
                      <Text size="sm">{anime?.rank || 0}</Text>
                    </Text>
                  }
                  sections={[]}
                />
                <Stack gap={4}>
                  <Text size="md" fw={500}>
                    Place in the ranking
                  </Text>
                  <Text size="sm" c="dimmed">
                    Favorited by {anime?.favorites || 0} users
                  </Text>
                </Stack>
              </Group>
            </Group>
            <Group>
              <Button
                component="a"
                leftSection={<IconPlayerPlayFilled size={14} />}
                color="#9a0006"
                variant="filled"
                href={anime?.trailer.url || ""}
              >
                Watch Trailer
              </Button>
              <Button leftSection={<IconPlus size={14} />} variant="default">
                WatchList
              </Button>
              <ActionIcon variant="default" size="lg">
                <IconHeart size={18} />
              </ActionIcon>
              <ActionIcon variant="default" size="lg">
                <IconShare size={18} />
              </ActionIcon>
            </Group>
          </Stack>
        </Flex>
        <Space h={30} />
      </BackgroundImage>
    </Container>
  );
}

export default AnimeHeader;
