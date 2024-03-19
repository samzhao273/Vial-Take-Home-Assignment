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
