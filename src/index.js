import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import App from './App';
import CartProvider from "./components/cart/context"

ReactDOM.render(
	// CartProvider helps provide context so we don't have to pass down values
	<CartProvider>
		<App /> 
	</CartProvider>,
	document.getElementById('root')
);
