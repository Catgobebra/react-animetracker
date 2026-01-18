import { useState } from "react";
import {
  Text,
  Avatar,
  Card,
  Container,
  Button,
  Group,
  Stack,
  Space,
  Badge,
  Spoiler,
  Center,
  Pagination,
} from "@mantine/core";

import Error from "./Error";
import Loading from "./Loading";
import { animeApi } from "@/entities/anime";
import { formatDateUS } from "@/shared/lib/datetime";

interface ReviewsProps {
  animeId: number;
}

export function Reviews({ animeId }: ReviewsProps) {
  const [page, setPage] = useState(1);
  const [maxKnownPages, setMaxKnownPages] = useState(1);

  const { data: reviewsResponse, isLoading, isError, isFetching } =
    animeApi.useGetAnimeReviewsQuery({ animeId, page });

  const reviews = reviewsResponse?.data ?? [];
  const pagination = reviewsResponse?.pagination;

  if (pagination && !isLoading) {
    const currentLast = pagination.last_visible_page;
    const nextPossible = pagination.has_next_page ? currentLast + 1 : currentLast;

    if (nextPossible > maxKnownPages) {
      setMaxKnownPages(nextPossible);
    }
  }

  const displayTotalPages = maxKnownPages;

  if (isLoading && page === 1) return <Loading height={400} />;
  if (isError || (!reviewsResponse && !isLoading)) return <Error height={400} />;

  if (reviews.length === 0 && page === 1) {
    return (
      <Center py="xl">
        <Text c="dimmed" size="lg">
          Empty
        </Text>
      </Center>
    );
  }

  return (
    <Container>
      <Group justify="space-between" mt="md" mb="xl">
        <Text size="lg" fw={600}>
          User Reviews
        </Text>
        <Button variant="outline" color="gray">
          Write a Review
        </Button>
      </Group>

      <Stack gap="xl">
        {reviews.map((review) => (
          <Card key={review.mal_id} withBorder radius="md" p="md" shadow="sm">
            <Group justify="space-between" align="flex-start" wrap="nowrap">
              <Group gap="md" align="flex-start">
                <Avatar
                  size={60}
                  radius="xl"
                  src={review.user?.images?.jpg?.image_url}
                  name={review.user?.username || "User"}
                />
                <Stack gap={4}>
                  <Text fw={500}>{review.user?.username || "Аноним"}</Text>
                  <Text size="sm" c="dimmed">
                    {formatDateUS(new Date(review.date))}
                  </Text>
                </Stack>
              </Group>

              <Badge size="lg" variant="light" color="yellow" radius="md">
                ★ {review.score ?? "—"}
              </Badge>
            </Group>

            <Space h="md" />

            <Spoiler maxHeight={140} showLabel="Show more" hideLabel="Hide">
              <Text c="dimmed" lh={1.6}>
                {review.review}
              </Text>
            </Spoiler>
          </Card>
        ))}
      </Stack>

      {displayTotalPages > 1 && (
        <Center mt="xl">
          <Pagination
            total={displayTotalPages}
            value={page}
            onChange={(newPage) => {
              if (isFetching) return;
              const maxAllowed = maxKnownPages + (pagination?.has_next_page ? 1 : 0);
              if (newPage >= 1 && newPage <= maxAllowed) {
                setPage(newPage);
              }
            }}
            withEdges
            disabled={isFetching}
            size="sm"
          />
        </Center>
      )}
    </Container>
  );
}

export default Reviews;