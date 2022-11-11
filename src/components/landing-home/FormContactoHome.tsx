import { Form, Formik, FormikHelpers } from 'formik';
import * as yup from 'yup';
import * as React from 'react';
import Divider from '../@common/Divider';
import InputFormik from '../@forms/InputFormik';
import ReactSelectFormik from '../@forms/ReactSelectFormik';
import TextAreaFormik from '../@forms/TextAreaFormik';
import ButtonFormik from '../@forms/ButtonSubmitFormik';
import { ReactSelectOption } from '@/interfaces';
import { estados } from '@/utils/estados';
import { toast } from 'react-toastify';

const estadosMap = estados.map(e => e.estado);
const estadosOptions: ReactSelectOption[] = estadosMap.map(e => ({ value: e, label: e }));

interface IFormContactoHomeProps {}

const FormContactoHome: React.FC<IFormContactoHomeProps> = props => {
	const {} = props;

	const onSubmit = (values, actions: FormikHelpers<any>) => {
		toast.success('Datos enviados correctamente.');
		actions.resetForm();
	};

	const initialValues = {
		name: '',
		nameEmpresa: '',
		telefono: '',
		correo: '',
		municipio: '',
		estado: estadosMap[0],
		msg: '',
	};

	const validationSchema = yup.object({
		name: yup.string().required('El nombre es requerido'),
		telefono: yup.string().required('Teléfono es requerido'),
		correo: yup
			.string()
			.required('Correo es requerido')
			.email('El correo no es váldio'),
		municipio: yup.string().required('Municipio es requerido'),
		estado: yup.string().required('Estado es requerido'),
		msg: yup.string().required('Es necesario escribir un mensaje'),
	});

	return (
		<div className="relative">
			<section className="py-6 px-3 max-w-7xl mx-auto">
				<div className="font-bold text-center mb-6">
					<h2 className="text-4xl">Contáctanos</h2>
					<h5 className="text-xl mt-2">
						Estamos todos juntos en{' '}
						<span className="text-primary">Transamaracay</span>
					</h5>
				</div>

				<Formik
					onSubmit={onSubmit}
					initialValues={initialValues}
					validationSchema={validationSchema}
				>
					<Form>
						<div className="grid lg:grid-cols-2 grid-cols-1 gap-x-6">
							<InputFormik
								name="name"
								placeholder="Nombre Completo"
							/>

							<InputFormik
								name="nameEmpresa"
								placeholder="Nombre de la empresa (si aplica)"
							/>

							<InputFormik
								name="telefono"
								placeholder="Teléfono"
							/>

							<InputFormik
								name="correo"
								placeholder="Correo"
							/>

							<ReactSelectFormik
								options={estadosOptions}
								placeholder={'Seleccionar Estado'}
								nameLabel="estado"
								nameValue="estado"
							/>

							<InputFormik
								name="municipio"
								placeholder="Municipio"
							/>
						</div>

						<Divider className="bg-green-100" />

						<div className="grid lg:grid-cols-2 grid-cols-1 gap-x-6">
							<TextAreaFormik
								name="msg"
								placeholder="Por favor, escriba un mensaje"
							/>

							<div className="flex items-center justify-center">
								<ButtonFormik className="btn-primary shadow-lg shadow-green-300 md:px-20 md:w-auto w-full">
									Enviar
								</ButtonFormik>
							</div>
						</div>
					</Form>
				</Formik>
			</section>
		</div>
	);
};

export default FormContactoHome;
