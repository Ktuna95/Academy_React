import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRrouter} from 'react-router-dom';

/**리덕스 구성을 위한 참조 */
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRrouter>
        <App />
      </BrowserRrouter>
    </Provider>
  </React.StrictMode>
);