import { createTheme, ThemeProvider } from "@mui/system";
import LandingPage from "./components/pages/LandingPage.jsx"

const theme = createTheme({
  palette: {
    primary: {
      main: '#551556',
      contrastText: "#fff"
    },
    secondary: {
      main: '#4B154A',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <LandingPage></LandingPage>
      </ThemeProvider>
    </div>
  );
}

export default App;
