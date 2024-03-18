// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { createTheme, MantineProvider } from '@mantine/core';
import SubjectDataHome from "./pages/subjectDataHome";

const theme = createTheme({
  /** Your theme override here */
});


function App() {

  return (
    <MantineProvider theme = {theme}>
      <SubjectDataHome />
    </MantineProvider>
  )
}

export default App
