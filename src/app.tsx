import React from 'react';
import './app.scss';
import { Header } from "./components/header/header";

export const App: React.FC = () => {
  return (
    <div className="app-container">
      <Header/>
    </div>
  );
}

export default App;
