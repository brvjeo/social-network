import React from 'react';
import ReactDom from 'react-dom/client';
import App from '@components/App';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router-dom';
import '@styles/index.scss';

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);
