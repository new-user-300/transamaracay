import { clienteAxios } from '@/config/axios';
import { useLoader } from '@/context/LoaderPageState';
import { Reservacion } from '@/interfaces';
import * as React from 'react';
import { FaPen, FaTrash } from 'react-icons/fa';

interface IButtonsReservacionProps {
	resevacion: Reservacion;
	setReservacionId: (id: number) => void;
	setReservaciones: React.Dispatch<React.SetStateAction<Reservacion[]>>;
}

const ButtonsReservacion: React.FunctionComponent<IButtonsReservacionProps> = props => {
	const { resevacion, setReservacionId, setReservaciones } = props;
	const { setLoader } = useLoader();

	const onSelectUpdateReservacion = () => {
		setReservacionId(resevacion.idreservacion);
	};

	const onClickDeleteReservacion = async () => {
		try {
			setLoader(true);
			await clienteAxios.delete(`/reservaciones/${resevacion.idreservacion}`);
			setReservaciones(r =>
				r.filter(r => r.idreservacion !== resevacion.idreservacion)
			);
		} catch (error) {
			console.log(error);
		} finally {
			setLoader(false);
		}
	};

	return (
		<div className="btn-group justify-center">
			<button
				className="btn btn-sm btn-success"
				onClick={onSelectUpdateReservacion}
			>
				<FaPen />
			</button>

			<button
				className="btn btn-sm btn-danger"
				onClick={onClickDeleteReservacion}
			>
				<FaTrash />
			</button>
		</div>
	);
};

export default ButtonsReservacion;
