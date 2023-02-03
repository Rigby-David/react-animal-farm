import React from 'react';
import Animal from '../Animal/Animal';
import './Main.css';

export default function Main({ animals }) {
  // loop through animal data array and render <Animal></Animal>
  return (
    <main>
      {animals.map((animal) => (
        <>
          <div key={animal.type}>
            <Animal animal={animal} />
          </div>
        </>
      ))}
    </main>
  );
}
