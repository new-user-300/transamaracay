import { Reservacion } from '@/interfaces';
import * as React from 'react';
import ButtonsReservacion from './Buttons';

interface ITrReservacionProps {
	reservacion: Reservacion;
	setReservacionId: (id: number) => void;
	setReservaciones: React.Dispatch<React.SetStateAction<Reservacion[]>>;
}

const TrReservacion: React.FunctionComponent<ITrReservacionProps> = props => {
	const { reservacion, setReservacionId, setReservaciones } = props;
	return (
		<tr>
			<td>{reservacion.idreservacion}</td>
			<td>{reservacion.nombre}</td>
			<td>{reservacion.correo}</td>
			<td>{reservacion.telefono}</td>
			<td>{reservacion.estado}</td>
			<td>{reservacion.descripcion}</td>
			<td>
				<ButtonsReservacion
					resevacion={reservacion}
					setReservaciones={setReservaciones}
					setReservacionId={setReservacionId}
				/>
			</td>
		</tr>
	);
};

export default TrReservacion;
