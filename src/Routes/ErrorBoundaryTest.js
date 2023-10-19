import React from 'react';
import '../style.css';
import { useState } from 'react';
import ErrorBoundary from './ErrorBoundary';

function NewComponent() {
  const [errorFlag, setErrorFlag] = useState(false);

  const throwCustomError = () => {
    if (errorFlag) {
      throw new Error('There is an error somewhere in this page');
    }
  };

  return (
    <div className="errorpagetest">
      <h1>Error Boundary Test:</h1>
      <p>
        {throwCustomError()}
        <button className="errorbtn" onClick={() => setErrorFlag(true)}>
          ErrorBoundary
        </button>
        <ErrorBoundary />
      </p>
    </div>
  );
}

export default NewComponent;
