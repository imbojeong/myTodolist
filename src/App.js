import { createGlobalStyle } from 'styled-components';
import './App.css';
import Header from './components/Header';
import Template from './components/Template';
import Create from './components/Create';
import {Provider} from './Context';
import List from './components/List';


function App() {
  const GlobalStyle = createGlobalStyle `
    body{
      background: white;
    }
  `;
  return (
    <Provider>
      <GlobalStyle />
        <Header />
        <List />
        <Create />
      <Template />
    </Provider>
  );
}
export default App;
