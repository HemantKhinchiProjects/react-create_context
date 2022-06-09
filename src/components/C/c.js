import React from 'react';
import {FirstNameContext} from '../../App';
export default function A() {
  return (
    <>
      <FirstNameContext.Consumer>
        {(fname) => {
          return <h1> my name is {fname}</h1>;
        }}
      </FirstNameContext.Consumer>
    </>
  );
}
