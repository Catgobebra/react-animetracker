import React from 'react';
import { createRoot } from 'react-dom/client'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { store } from './redux/store.ts'
import { Provider } from 'react-redux'
import AnimeTop from '@/pages/AnimeTop.tsx/ui/AnimeTop.tsx';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <MantineProvider>
       <AnimeTop/>
    </MantineProvider>
  </Provider>,
)
