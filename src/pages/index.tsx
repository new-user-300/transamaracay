import NextHead from '@/components/@common/next-head';
import HeroHome from '@/components/landing-home/HeroHome';
import Section1Home from '@/components/landing-home/Section1Home';
import Section2Home from '@/components/landing-home/Section2Home';
import Section3Home from '@/components/landing-home/Section3Home';
import Footer from '@/templates/Footer';
import Header from '@/templates/Header';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import * as React from 'react';

const FormContactoHome = dynamic(() => import('@/components/landing-home/FormContactoHome'));

interface IAppProps {}

const App: NextPage<IAppProps> = () => {
	return (
		<div className="flex flex-col min-h-screen overflow-x-hidden">
			<NextHead title={'TransaMaracay'} description={'TransaMaracay'} />
			<Header />
			<div className="flex-grow main-document">
				<HeroHome />
				<Section1Home />
				<Section2Home />
				<Section3Home />
				<FormContactoHome />
			</div>

			<Footer />
		</div>
	);
};

export default App;
