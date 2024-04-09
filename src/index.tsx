import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ButonDemoPage from './pages/ButtonDemo';
import TodoPage from './pages/TodoDemo';

const router = createBrowserRouter([
	{
		path: '',
		Component: MainLayout,
		children: [
			{
				path: '/button-demo',
				Component: ButonDemoPage,
			},
			{
				path: '/todo-demo',
				Component: TodoPage,
			},
		],
	},
]);

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<>
		<RouterProvider router={router} />
	</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
