import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';//the CSS of App will have preference over index bcz it is below
import reportWebVitals from './reportWebVitals';
// import Practice from './practice';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <>
    <App></App>
    {/* <App></App> */}
    {/* <Practice></Practice> */}
    <Counter />

  </>
);

reportWebVitals();
