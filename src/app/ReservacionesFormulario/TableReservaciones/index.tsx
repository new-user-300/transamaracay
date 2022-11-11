import { Reservacion } from '@/interfaces';
import * as React from 'react';
import { FaPlus } from 'react-icons/fa';
import TbodyReservaciones from './TbodyReservaciones';

interface ITableReservacionesProps {
	reservaciones: Reservacion[];
	setReservaciones: React.Dispatch<React.SetStateAction<Reservacion[]>>;
	setShowModal: (value: boolean) => void;
	setIdReservacion: (value: number) => void;
}

const TableReservaciones: React.FunctionComponent<ITableReservacionesProps> = props => {
	const { reservaciones, setShowModal, setIdReservacion, setReservaciones } = props;
	return (
		<div className="tile">
			<div className="btn-group justify-start mb-4">
				<button
					className="btn btn-info btn-sm"
					onClick={() => setShowModal(true)}
				>
					<FaPlus />
				</button>
			</div>
			<div className="table-container">
				<table className="table">
					<thead>
						<tr>
							<th>ID</th>
							<th>Nombre</th>
							<th>Correo</th>
							<th>Teléfono</th>
							<th>Estado</th>
							<th>Descripción</th>
							<th>Acciones</th>
						</tr>
					</thead>
					<TbodyReservaciones
						setReservaciones={setReservaciones}
						reservaciones={reservaciones}
						setReservacionId={setIdReservacion}
					/>
				</table>
			</div>
		</div>
	);
};

export default TableReservaciones;
