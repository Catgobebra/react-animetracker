import {
  Text,
  Container,
} from "@mantine/core";

interface LoadingProps{
    height : number
}

export function Error({height} : LoadingProps) {
  return <Container h={height}>
    <Text c="red">Не удалось загрузить</Text>
  </Container>
}

export default Error