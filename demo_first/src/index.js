import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Arithmetic from './Arithmetic';
//import CheckEvenOdd from './CheckEvenOdd';
//import ArrayState from './ArrayState';
//import PrimeOrNot from  './PrimeOrNot';
//import AreaOf from './AreaOf'
//import CelsiusToFarenheit from './CelsiusToFarenheit';
import SimpleInterest from './SimpleInterest';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
/*
root.render(
  <React.StrictMode>u.
    <App />
  </React.StrictMode>
);

root.render(
  <React.StrictMode>
    <Arithmetic/>
  </React.StrictMode>
)

root.render(
  <React.StrictMode>
    <CheckEvenOdd/>
  </React.StrictMode>
)

root.render(
  <React.StrictMode>
    <ArrayState/>
  </React.StrictMode>
)

root.render(
  <React.StrictMode>
    <PrimeOrNot/>
  </React.StrictMode>
)

root.render(
  <React.StrictMode>
    <AreaOf/>
 </React.StrictMode>
)

root.render(
  <React.StrictMode>
    <CelsiusToFarenheit/>
  </React.StrictMode>
)
*/

root.render(
  <React.StrictMode>
    <SimpleInterest/>
  </React.StrictMode>
)
















// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
