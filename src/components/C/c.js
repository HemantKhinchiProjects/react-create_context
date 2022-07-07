import React from 'react';
import { FirstNameContext, LastNameContext } from '../../App';
export default function C(props) {
  return (
    <>
      <FirstNameContext.Consumer>
        {(fname) => {
          return (
            <LastNameContext.Consumer>
              {(lname) => {
                return (
                  <h1>
                    my name is {fname} {lname}
                  </h1>
                );
              }}
            </LastNameContext.Consumer>
          );
        }}
      </FirstNameContext.Consumer>
    </>
  );
}
