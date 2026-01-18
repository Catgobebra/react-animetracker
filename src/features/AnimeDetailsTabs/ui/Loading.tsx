import {
  Skeleton,
  Container,
} from "@mantine/core";

interface LoadingProps{
    height : number
}

export function Loading({height} : LoadingProps) {
  return <Container><Skeleton height={height} m={6} radius="xl" /></Container>
}

export default Loading