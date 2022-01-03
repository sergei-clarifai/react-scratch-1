import ReactDOM from 'react-dom';
import React from 'react';

import { css } from '@linaria/core';

const testClass = css`
  color: red;
  font-weight: bold;
`;

const App = () => {
  return <div className={testClass}>This is my React app 3!</div>;
}

ReactDOM.render(<App />, document.getElementById('app'));

