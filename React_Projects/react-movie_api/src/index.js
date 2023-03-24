import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Footer from './Components/Footer';
import {BrowserRouter} from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <BrowserRouter>
            <App />
            <Footer />
        </BrowserRouter>
    </>
);
