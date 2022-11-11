import { Reservacion } from '@/interfaces';
import * as React from 'react';

interface IActionsReservacionProps {
	reservacion: Reservacion;
}

const ActionsReservacion: React.FunctionComponent<IActionsReservacionProps> = props => {
	const {} = props;
	return <div className="button-group"></div>;
};

export default ActionsReservacion;
