import Head from 'next/head';
import * as React from 'react';

export interface INextHeadProps {
	title: React.ReactNode;
	description: string;
}

const NextHead: React.FunctionComponent<INextHeadProps> = props => (
	<Head>
		<title>{props.title}</title>
		<meta name="description" content={props.description} />
	</Head>
);

export default NextHead;
