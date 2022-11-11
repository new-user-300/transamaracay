import ReservacionesFormulario from '@/app/ReservacionesFormulario';
import NextHead from '@/components/@common/next-head';
import { clienteAxios } from '@/config/axios';
import { Reservacion } from '@/interfaces';

import Footer from '@/templates/Footer';
import Header from '@/templates/Header';
import { NextPage } from 'next';
import * as React from 'react';

interface IReservacionesPageProps {
	reservaciones: Reservacion[];
}

const ReservacionesPage: NextPage<IReservacionesPageProps> = props => {
	const { reservaciones } = props;
	return (
		<div className="flex flex-col min-h-screen overflow-x-hidden">
			<NextHead title={'Reservaciones'} description={'Reservaciones'} />
			<Header />
			<div className="flex-grow">
				<ReservacionesFormulario initialReservaciones={reservaciones} />
			</div>

			<Footer />
		</div>
	);
};

export default ReservacionesPage;

ReservacionesPage.getInitialProps = async () => {
	const reservaciones = await clienteAxios.get('/reservaciones');
	return { reservaciones: reservaciones.data };
};
