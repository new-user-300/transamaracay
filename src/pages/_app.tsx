import '../../styles/globals.css';
import '../../styles/loader.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import LoaderPageState from '@/context/LoaderPageState';

const MyApp = ({ Component, pageProps }) => {
	return (
		<LoaderPageState>
			<ToastContainer position="bottom-right" theme="colored" />{' '}
			<Component {...pageProps} />
		</LoaderPageState>
	);
};

export default MyApp;
