import NextHead from '@/components/@common/next-head';
import HeroPlataformasEducativas from '@/components/landing-plataformas-educativas/Hero';
import Section2PE from '@/components/landing-plataformas-educativas/Section2';
import Footer from '@/templates/Footer';
import Header from '@/templates/Header';
import { NextPage } from 'next';
import * as React from 'react';

interface INosotrosProps {}

const Nosotros: NextPage<INosotrosProps> = props => {
	const {} = props;
	return (
		<div className="flex flex-col min-h-screen overflow-x-hidden">
			<NextHead
				title={'Programas Educativos'}
				description={'Programas Educativos'}
			/>
			<Header />
			<div className="flex-grow">
				<HeroPlataformasEducativas />
				<Section2PE />
			</div>

			<Footer />
		</div>
	);
};

export default Nosotros;
