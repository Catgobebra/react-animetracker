import { useState } from "react";

import {
  Text,
  Container,
  Group,
  Stack,
  Center,
  Pagination
} from "@mantine/core";

import Loading from "./Loading";
import Error from "./Error";
import { animeApi } from "@/entities/anime";

import { ITEMS_PER_PAGE } from "../constants/constants";

interface CastProps {
  animeId: number;
}

export function Cast({animeId} : CastProps) {
    const [activePage, setPage] = useState(1);

    const {data: staffResponse, isLoading : isLoadingStaff, isError } = animeApi.useGetAnimeStaffQuery(animeId)
    const staff = staffResponse?.data || []
    if (isLoadingStaff) return <Loading height={400} />
    if (isError || !staffResponse?.data) return <Error height={400} />

    const pages = Math.ceil(staff.length/ITEMS_PER_PAGE)
    const currentPageStaff = staff.slice(ITEMS_PER_PAGE*(activePage-1),activePage*ITEMS_PER_PAGE)

    return(
        <Container>
          <Text size="lg" mt="md" fw={500}>
            Crew
          </Text>
          <Stack h={260}>
            {currentPageStaff.map(person => (
              <Group justify="space-between" key={person.person.mal_id}>
                <Text c="dimmed" size="lg">
                  {person.positions?.join(", ") || "—"}
                </Text>
                <Text size="lg">{person.person.name}</Text>
            </Group>
            ))}
          </Stack>
          {pages > 1 && <Center><Pagination total={pages} value={activePage} onChange={setPage} withEdges /></Center>}
        </Container>
    )
}
export default Cast