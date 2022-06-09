import React, { createContext } from 'react';
import Ablock from './components/A/a.js';
import './style.css';

const FirstNameContext = createContext();
export default function App() {
  return (
    <>
      <FirstNameContext.Provider value={'Hemant'}>
        <Ablock />
      </FirstNameContext.Provider>
    </>
  );
}
export { FirstNameContext };
