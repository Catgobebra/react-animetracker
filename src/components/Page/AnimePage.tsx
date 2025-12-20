import {
  AppShell,
  SegmentedControl,
  Title,
  Text,
  Center,
  Avatar,
  Card,
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
  Divider
  /* Overlay */
} from "@mantine/core";
import {
  IconPlayerPlayFilled,
  IconPlus,
  IconHeart,
  IconShare,
  IconCalendarWeek,
  IconClockHour5,
  //IconCircleCheck
} from "@tabler/icons-react";

export function AnimePage() {
  return (
    <AppShell layout="alt" padding="lg">
      <AppShell.Main>
        <Container>
          <BackgroundImage
            src=""
          >
          <Flex gap={30}>
            <Image h={375} w={245} radius="lg" />
            <Stack justify="flex-end">
              <Text size="md" fw={500} mt="md">
                Jujutsu Kaisen
              </Text>
              <Group align="center">
                <Group gap="xs" align="center">
                  <IconCalendarWeek size={16} />
                  <Text size="sm">2024</Text>
                </Group>
                <Group gap="xs" align="center">
                  <IconClockHour5 size={16} />
                  <Text size="sm">24m per episode</Text>
                </Group>
                <Group>
                  <Badge tt="none" variant="default" color="gray">Anime</Badge>
                </Group>
              </Group>
              <Group>
                <Group gap={1}>
                  <RingProgress
                    size={90}
                    thickness={8}
                    label={
                      <Text size="xs" ta="center">
                        <Text size="sm">8.8</Text>
                        <Space h={1} />
                        <Center><Rating size="xs" defaultValue={2} count={1} readOnly/></Center>
                      </Text>
                    }
                    sections={[
                      { value: 80, color: '#b78700' },
                    ]}
                  />
                  <Stack gap={4}>
                    <Text size="md" fw={500}>
                      Rating
                    </Text>
                    <Text size="sm" c="dimmed">
                      IMDb Score
                    </Text>
                  </Stack>
                </Group>

                <Group gap={1}>
                  <RingProgress
                    size={90}
                    thickness={8}
                    label={
                      <Text size="xs" ta="center">
                        <Text size="sm">87%</Text>
                      </Text>
                    }
                    sections={[
                    ]}
                  />
                  <Stack gap={4}>
                    <Text size="md" fw={500}>
                      User Score
                    </Text>
                    <Text size="sm" c="dimmed">
                      3 reviews
                    </Text>
                  </Stack>
                </Group>
              </Group>
              <Group>
                <Button
                  leftSection={<IconPlayerPlayFilled size={14} />}
                  color="#9a0006"
                  variant="filled"
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
        <Container>
          <SegmentedControl
            withItemsBorders={false}
            size="md"
            radius="lg"
            data={[
              "Overview",
              "Episodes",
              "Characters",
              "Cast & Crew",
              "Reviews",
            ]}
            fullWidth
          />

          <Title order={3} mt="md">
            Synopsis
          </Title>
          <Text c="dimmed">
            A powerful story of jujutsu sorcerers fighting against cursed
            spirits to save humanity.
          </Text>

          <Title order={3} mt="md">
            Director
          </Title>
          <Text c="dimmed">Christopher Nolan</Text>

          <Text size="lg" mt="md">
            Featured Cast
          </Text>
          <Card
            shadow="sm"
            padding="sm"
            component="a"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            h={170}
            w={360}
            radius="lg"
          >
            <Center>
              <Avatar h={80} w={80} name={"Emma Stone"} src="image.png" />
            </Center>
            <Stack align="center">
              <Text size="md" mt={1}>Emma Stone</Text>
              <Text c="dimmed" size="sm">Actor</Text>
            </Stack>
          </Card>
        </Container>
        <Container>
          <Text size="lg">Episodes (1)</Text>
          <Stack w="100%">
            <Card w="100%">
              <Flex justify="space-between" align="flex-start">
                <Flex gap={15} align="flex-start">
                  <BackgroundImage
                  radius="md"
                  h={100}
                  w={160}
                  src="https://cdn.oneesports.gg/cdn-data/2022/06/Anime_KonoSuba-1024x576.jpg"
                  pos="relative"
                  >
                  <Flex h={100} align="center" justify="center" pos="relative">
                    {/* <ActionIcon size={40} color="teal" variant="transparent">
                      <IconCircleCheck size={40} />
                    </ActionIcon> */}
                    <Badge pos="absolute"
                      bottom={6}
                      right={6} 
                      color="black" tt="none" size="xs" radius="xs">24 min
                    </Badge>
                  </Flex>
                  </BackgroundImage>
                  <Stack gap={6} justify="center">
                    <Group>
                      <Text tt="uppercase" c="dimmed">EP 1</Text>
                      {/* <Badge variant="outline" color="teal" tt="none">Watched</Badge> */}
                    </Group>
                    <Text>Episode 1: Ryomen Sukuna</Text>
                    <Text c="dimmed" w={600} truncate="end">Yuji Itadori is a high school student with exceptional physical abilities who joins the Occult Research Club.</Text>
                  </Stack>
                </Flex>
                <Text size="sm" c="dimmed">
                  Jan 6, 2024
                </Text>
              </Flex>
            </Card> 
          </Stack>
        </Container>
        <Container>
          <Text size="lg">Characters & Seiyuu</Text>
          <Card>
            <Flex justify="space-between" align="center">
              <Flex gap={10} align="center">
                <Avatar h={80} w={80} name={"SG"} src="image.png" />
                <Stack gap={6} justify="center">
                  <Text>Satoru Gojo</Text>
                  <Badge variant="default" color="gray" tt="none">Main Character</Badge>
                  <Text c="dimmed">The strongest jujutsu sorcerer</Text>
                </Stack>
              </Flex>
              <Flex gap={10} align="center">
                <Divider orientation="vertical" />
                <Avatar h={80} w={80} name={"SG"} src="image.png" />
                <Stack gap={6} justify="center">
                  <Text>Yuichi Nakamura</Text>
                  <Text c="dimmed">Voice Actor (Seiyuu)</Text>
                </Stack>
              </Flex>
          </Flex>
          </Card>
        </Container>
        <Container>
          <Text size="lg">Full Cast</Text>
          <Stack>
            <Card>
              <Flex gap={10} align="center">
                <Avatar h={60} w={60} name={"ES"} src="image.png" />
                <Stack gap={6} justify="center">
                  <Text size="md">Emma Stone</Text>
                  <Text size="md" c="dimmed">Character Name</Text>
                </Stack>
              </Flex>
            </Card>
          </Stack>
          <Space h="md"/>
          <Text size="lg" fw={500}>Crew</Text>
          <Stack>
            <Group justify="space-between">
              <Text c="dimmed" size="lg">Director</Text>
              <Text size="lg">Christopher Nolan</Text>
            </Group>
          </Stack>
        </Container>
        <Container>
          <Group justify="space-between">
            <Text size="lg">User Reviews</Text>
            <Button variant="outline" color="gray" >Write a Review</Button>
          </Group>
          <Space h="xl" />
          <Stack>
            <Card>
               <Flex justify="space-between" align="flex-start">
                  <Stack>
                    <Flex gap={15} align="center">
                      <Avatar h={60} w={60} name={"ES"} src="image.png" />
                      <Stack gap={2} justify="center">
                        <Text size="md">Alex Morgan</Text>
                        <Text size="md" c="dimmed">Nov 15, 2024</Text>
                      </Stack>
                    </Flex>
                    <Text>An absolute masterpiece! The cinematography is breathtaking and the story keeps you on the edge of your seat.</Text>
                  </Stack>
                  <Badge radius="xs" color="yellow" leftSection={<Rating size="xs" color="white" defaultValue={2} count={1} readOnly/>}>9</Badge>
                </Flex>
            </Card>
          </Stack>            
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}

export default AnimePage;
