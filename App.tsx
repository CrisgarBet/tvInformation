import {Login} from './src/screens';
import {ThemeProvider} from 'styled-components/native';

export default function App() {
  const theme = {
    colors: {
      primary: 'blue',
      secondary: 'green',
    },
  };
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  );
}
