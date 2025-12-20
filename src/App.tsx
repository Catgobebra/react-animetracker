import React from 'react';
import AnimePage from './components/Page/AnimePage'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <MantineProvider>
      <AnimePage/>
    </MantineProvider>
  )
}

export default App
