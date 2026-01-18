import { useState } from "react";
import {
  Text,
  Avatar,
  Card,
  Container,
  Stack,
  Badge,
  Flex,
  Divider,
  Pagination,
  Center
  /* Overlay */
} from "@mantine/core";

import Loading from "./Loading";
import Error from "./Error";

import { animeApi } from "@/entities/anime";

import { ITEMS_CHAR_PAGE } from "../constants/constants";

interface CharactersProps {
  animeId : number
}

export function Characters({animeId} : CharactersProps) {
  const [activePage, setPage] = useState(1);

  const {data: characterResponse, isLoading : isLoadingCharacters, isError } = animeApi.useGetAnimeCharactersQuery(animeId)
  const characters = characterResponse?.data || []
  if (isLoadingCharacters) return <Loading height={400} />
  if (isError || !characterResponse?.data) return <Error height={400} />

  const pages = Math.ceil(characters.length/ITEMS_CHAR_PAGE)
  const currentPageCharacters = characters
  .slice(ITEMS_CHAR_PAGE*(activePage-1),activePage*ITEMS_CHAR_PAGE)

    return (
        <Container>
                <Text size="lg" mt="md">Characters & Seiyuu</Text>
                <Stack h={380}>
                  {currentPageCharacters.map(creature => (
                    <Card
                     key={creature.character.mal_id}
                     component="a"
                     href={creature.character.url}>
                    <Flex justify="space-between" align="center">
                      <Flex gap={10} align="center">
                        <Avatar h={80} w={80} name={creature.character.name} src={creature.character.images.jpg.image_url || ""} />
                        <Stack gap={6} justify="center">
                          <Text>{creature.character.name}</Text>
                          <Badge variant="default" color="gray" tt="none">
                            {creature.role}
                          </Badge>
                          <Text c="dimmed">Favorites : {creature.favorites}</Text>
                        </Stack>
                      </Flex>
                      <Flex gap={10} align="center">
                        <Divider orientation="vertical" />
                        <Avatar h={80} w={80} name={(creature.voice_actors.filter(actor =>
                            actor.language === "Japanese"
                          ))[0]?.person.name || "NA"} src="image.png" />
                        <Stack gap={6} justify="center">
                          <Text>{creature.voice_actors.map(actor =>
                            actor.language === "Japanese" && actor.person.name
                          )}</Text>
                          <Text c="dimmed">Voice Actor (Seiyuu)</Text>
                        </Stack>
                      </Flex>
                    </Flex>
                  </Card>
                  ))}
                </Stack>
                {pages > 1 && <Center><Pagination total={pages} value={activePage} onChange={setPage} withEdges /></Center>}
              </Container>
    )
}

export default Characters