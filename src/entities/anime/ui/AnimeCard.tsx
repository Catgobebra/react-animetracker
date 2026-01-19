import { Card, Image, Text, Badge, Group } from '@mantine/core';
import type { Genre, JikanResource } from '../model/types';

interface AnimeCardProps {
    animeTitle: string
    animeImg: string
    animeSynopsis : string
    animeRating : number
    animeType : string
    animeBadges : Genre[]
    animeThemes : JikanResource[]
}

export function AnimeCard({animeTitle,animeImg,
     animeSynopsis, animeRating,animeBadges,animeType, animeThemes} : AnimeCardProps) {
  return (
    <Card 
    shadow="sm"
    padding="lg"
    radius="md"
     withBorder>
      <Card.Section pos="relative">
        <Image  
          src={animeImg || "https://placehold.co/180x110/333333/FFFFFF/png?text=No+Cover"}
          height={230}
          alt="Norway"
          fit='cover'
        />
         <Badge pos="absolute"
          top={6}
          right={6}
          radius="sm"
          color="cyan">★ {animeRating}</Badge>
      </Card.Section>

        <Group mt={10}>
            <Badge tt="none" variant="filled" color="cyan">
                {animeType || "-"}
            </Badge>
            {animeBadges?.map((genre) => {
                return (<Badge key={genre.mal_id} tt="none" variant="default" color="gray">
                {genre.name}
            </Badge>)
            })}
            {animeThemes?.map((theme) => {
                return (<Badge key={theme.mal_id} tt="none" variant="default" color="gray">
                {theme.name}
            </Badge>)
            })}
        </Group>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500} lineClamp={2}>{animeTitle}</Text>
      </Group>

      <Text size="sm" c="dimmed" lineClamp={3}>
        {animeSynopsis}
      </Text>
    </Card>
  );
}

export default AnimeCard;
