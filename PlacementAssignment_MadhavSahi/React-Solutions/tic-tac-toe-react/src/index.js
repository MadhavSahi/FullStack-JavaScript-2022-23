import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

class Root extends Component {
  componentDidMount() {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }

  render() {
    return null;
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
