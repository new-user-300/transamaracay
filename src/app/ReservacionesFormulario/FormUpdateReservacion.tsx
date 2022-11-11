import ButtonFormik from '@/components/@forms/ButtonSubmitFormik';
import InputFormik from '@/components/@forms/InputFormik';
import ReactSelectFormik from '@/components/@forms/ReactSelectFormik';
import TextAreaFormik from '@/components/@forms/TextAreaFormik';
import { ReactSelectOption, Reservacion, ReservacionDTO } from '@/interfaces';
import { Form, Formik } from 'formik';
import * as React from 'react';
import { estados } from '@/utils/estados';
import { clienteAxios } from '@/config/axios';
import { useLoader } from '@/context/LoaderPageState';
import { toast } from 'react-toastify';
import { validationSchemaReservation } from './validationFormReservacion';

const estadosMap = estados.map(e => e.estado);
const estadosOptions: ReactSelectOption[] = estadosMap.map(e => ({ value: e, label: e }));

interface IFormUpdateReservacionProps {
	setReservaciones: (reservaciones: Reservacion[]) => void;
	reservaciones: Reservacion[];
	reservacion: Reservacion;
	setReservacion: (reservacion: number) => void;
}

const FormUpdateReservacion: React.FunctionComponent<IFormUpdateReservacionProps> = props => {
	const { setReservaciones, reservacion, setReservacion, reservaciones } = props;
	const { setLoader } = useLoader();
	const INITIAL_VALUES: ReservacionDTO = {
		nombre: reservacion.nombre,
		telefono: reservacion.telefono,
		correo: reservacion.correo,
		estado: reservacion.estado,
		descripcion: reservacion.descripcion,
	};

	const onSubmit = async (values: ReservacionDTO) => {
		try {
			setLoader(true);
			const { data } = await clienteAxios.put(
				`/reservaciones/${reservacion.idreservacion}`,
				values
			);
			setReservaciones(
				reservaciones.map(r =>
					r.idreservacion === reservacion.idreservacion
						? { ...r, ...data }
						: r
				)
			);
			setReservacion(null);
			toast.success('Reservación actualizada correctamente');
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
					Actualizar Reservación
				</ButtonFormik>
			</Form>
		</Formik>
	);
};

export default FormUpdateReservacion;
