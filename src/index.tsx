import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './normalize.css';
import './animation.css';
import { Routes } from './components/routes';
// import { ScrollContext } from "react-router-scroll-4";
import { ParallaxProvider } from 'react-scroll-parallax';

ReactDOM.render(
  <BrowserRouter>
    <ParallaxProvider>
      {/*<ScrollContext>*/}
      <Routes />
      {/*</ScrollContext>*/}
    </ParallaxProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
