import * as yup from 'yup';

export const validationSchemaReservation = yup.object({
	nombre: yup.string().required('El nombre es requerido'),
	telefono: yup.string().required('Teléfono es requerido'),
	correo: yup.string().required('Correo es requerido').email('El correo no es váldio'),
	estado: yup.string().required('Estado es requerido'),
});
