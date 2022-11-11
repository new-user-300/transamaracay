import { Reservacion } from '@/interfaces';
import * as React from 'react';
import TrReservacion from './TrReservacion';

interface ITbodyReservacionesProps {
	reservaciones: Reservacion[];
	setReservacionId: (id: number) => void;
	setReservaciones: React.Dispatch<React.SetStateAction<Reservacion[]>>;
}

const TbodyReservaciones: React.FunctionComponent<ITbodyReservacionesProps> = props => {
	const { reservaciones, setReservacionId, setReservaciones } = props;
	return (
		<tbody>
			{reservaciones.map(r => (
				<TrReservacion
					key={r.idreservacion}
					reservacion={r}
					setReservacionId={setReservacionId}
					setReservaciones={setReservaciones}
				/>
			))}
		</tbody>
	);
};

export default TbodyReservaciones;
