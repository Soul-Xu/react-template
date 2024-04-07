import React from 'react';
import ReactDOM from 'react-dom/client';
// 导入redux-persist提供PersistGate组件
import { PersistGate } from 'redux-persist/integration/react';
// 导入React Redux 提供的Provider 组件
import { Provider } from 'react-redux';
import { store } from './store/index.ts';
import './index.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Provider store={store}>
		  <App />
		</Provider>
  </React.StrictMode>
);
