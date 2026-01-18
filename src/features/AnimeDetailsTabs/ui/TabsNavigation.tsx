import {
    Container,
    SegmentedControl
} from "@mantine/core"

import { navigations } from '../constants/constants'

interface TabsNavigationProps {
  currentSegment: string;
  handleSegmentChange: (value: string) => void;
}

export function TabsNavigation({ currentSegment, handleSegmentChange }: TabsNavigationProps) {
  return (
    <Container>
              <SegmentedControl
                withItemsBorders={false}
                size="md"
                radius="lg"
                data={navigations}
                value={currentSegment}
                onChange={handleSegmentChange}
                fullWidth
              />
    </Container>
  )
}

export default TabsNavigation;
