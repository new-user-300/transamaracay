import Modal from '@/components/modal';
import { Reservacion } from '@/interfaces';
import * as React from 'react';
import FormCreateReservacion from './FormCreateReservacion';
import FormUpdateReservacion from './FormUpdateReservacion';
import TableReservaciones from './TableReservaciones';

interface IReservacionesFormularioProps {
	initialReservaciones: Reservacion[];
}

const ReservacionesFormulario: React.FC<IReservacionesFormularioProps> = props => {
	const [reservaciones, setReservaciones] = React.useState(props.initialReservaciones);
	const [showModal, setShowModal] = React.useState(false);
	const [idReservacion, setIdReservacion] = React.useState<number>(null);

	const reservacionSelected = reservaciones.find(r => r.idreservacion === idReservacion);
	return (
		<section className="container">
			<h5 className="text-center font-bold mb-12 mt-8 text-5xl">
				Lista de Reservaciones
			</h5>
			<TableReservaciones
				setReservaciones={setReservaciones}
				reservaciones={reservaciones}
				setShowModal={setShowModal}
				setIdReservacion={setIdReservacion}
			/>

			<Modal
				showModal={showModal}
				setShowModal={setShowModal}
				titulo={'Crear Reservación'}
				size={'md'}
			>
				<FormCreateReservacion
					setReservaciones={setReservaciones}
					reservaciones={reservaciones}
					setShowModal={setShowModal}
				/>
			</Modal>

			<Modal
				titulo={'Actualizar Reservación'}
				setShowModal={() => setIdReservacion(null)}
				showModal={Boolean(reservacionSelected)}
				size={'md'}
			>
				<FormUpdateReservacion
					setReservacion={setIdReservacion}
					reservacion={reservacionSelected}
					reservaciones={reservaciones}
					setReservaciones={setReservaciones}
				/>
			</Modal>
		</section>
	);
};

export default ReservacionesFormulario;
