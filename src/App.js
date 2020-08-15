import React from 'react';
import Routes from './routes';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { ToastContainer } from 'react-toastify';

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#47b062",
    },
    secondary: {
      main: "#0260d2",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />  
      <Routes />
    </ThemeProvider>
  );
}

export default App;
