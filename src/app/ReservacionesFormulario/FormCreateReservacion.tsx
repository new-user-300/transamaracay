import InputFormik from '@/components/@forms/InputFormik';
import { ReactSelectOption, Reservacion, ReservacionDTO } from '@/interfaces';
import { Form, Formik } from 'formik';
import * as React from 'react';
import { estados } from '@/utils/estados';
import { toast } from 'react-toastify';
import TextAreaFormik from '@/components/@forms/TextAreaFormik';
import { useLoader } from '@/context/LoaderPageState';
import { clienteAxios } from '@/config/axios';
import ReactSelectFormik from '@/components/@forms/ReactSelectFormik';
import ButtonFormik from '@/components/@forms/ButtonSubmitFormik';
import { validationSchemaReservation } from './validationFormReservacion';

const estadosMap = estados.map(e => e.estado);
const estadosOptions: ReactSelectOption[] = estadosMap.map(e => ({ value: e, label: e }));

const INITIAL_VALUES: ReservacionDTO = {
	nombre: '',
	correo: '',
	estado: estadosMap[0],
	telefono: '',
	descripcion: '',
};

interface IFormCreateReservacionProps {
	setReservaciones: (reservaciones: Reservacion[]) => void;
	reservaciones: Reservacion[];
	setShowModal: (value: boolean) => void;
}

const FormCreateReservacion: React.FunctionComponent<IFormCreateReservacionProps> = props => {
	const { setReservaciones, reservaciones, setShowModal } = props;
	const { setLoader } = useLoader();

	const onSubmit = async (values: ReservacionDTO) => {
		try {
			setLoader(true);
			const { data } = await clienteAxios.post('/reservaciones', values);
			console.log(data);
			setReservaciones([data, ...reservaciones]);
			toast.success('Reservación creada correctamente');
			setShowModal(false);
		} catch (error) {
		} finally {
			setLoader(false);
		}
	};

	return (
		<Formik
			onSubmit={onSubmit}
			validationSchema={validationSchemaReservation}
			initialValues={INITIAL_VALUES}
		>
			<Form>
				<InputFormik
					name="nombre"
					label={'Nombre'}
					placeholder={'Introduzca su nombre'}
				/>

				<InputFormik
					name="correo"
					label={'Correo'}
					placeholder={'Introduzca su correo'}
				/>

				<InputFormik
					name="telefono"
					label={'Teléfono'}
					placeholder={'Introduzca su teléfono'}
				/>

				<TextAreaFormik
					name="descripcion"
					label={'Descripción'}
					placeholder={'Descripción de su viaje'}
				/>

				<ReactSelectFormik
					options={estadosOptions}
					nameLabel="estado"
					nameValue="estado"
					label={'Estado'}
				/>

				<ButtonFormik className="btn-info w-full">
					Crear Reservación
				</ButtonFormik>
			</Form>
		</Formik>
	);
};

export default FormCreateReservacion;
