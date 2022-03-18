import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Wrapper } from "@googlemaps/react-wrapper";

const render = (status) => {
  return <h1>{status}</h1>;
};

ReactDOM.render(
  <React.StrictMode>
    <Wrapper er apiKey={"AIzaSyB17GD92tUgaeHbejY7j9w-1pFlwfZQS4U"} render={render}>
      <App />
    </Wrapper>
  </React.StrictMode>,
  document.getElementById('root')
);
