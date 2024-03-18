import React from 'react';
import Authentication from './components/Authentication';
import { GlobalStyle } from './utils/GlobalStyle';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Authentication />
    </div>
  );
}

export default App;
