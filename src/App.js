import React, { createContext } from 'react';
import Ablock from './components/A/a.js';
import './style.css';

const FirstNameContext = createContext();
const LastNameContext = createContext();
export default function App() {
  return (
    <>
      <FirstNameContext.Provider value={'Hemant'}>
        <LastNameContext.Provider value={'Khinchi'}>
          <Ablock />
        </LastNameContext.Provider>
      </FirstNameContext.Provider>
    </>
  );
}
export { FirstNameContext, LastNameContext };
