import ButtonFormik from '@/components/@forms/ButtonSubmitFormik';
import InputFormik from '@/components/@forms/InputFormik';
import { Formik, Form } from 'formik';
import * as React from 'react';
import { RiFacebookFill } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';

import { colors } from '@/utils/colors';
import NextLink from '@/components/@common/Link';
const INITIAL_VALUES = {};

const LoginForm: React.FC = () => {
	const onSubmit = () => {};

	return (
		<React.Fragment>
			<p className="text-gray-800 text-center text-4xl font-bold pb-6">
				¡Bienvenido!
			</p>
			<Formik initialValues={INITIAL_VALUES} onSubmit={onSubmit}>
				<Form>
					<InputFormik name="email" placeholder="Correo" />

					<InputFormik
						name="password"
						type={'password'}
						placeholder={'Contraseña'}
					/>

					<ButtonFormik className="w-full btn-primary btn-sm">
						Iniciar sesión
					</ButtonFormik>
				</Form>
			</Formik>

			<div className="flex items-center mt-6">
				<div className="h-px flex-1 bg-gray-500"></div>
				<h2 className="p-2 text-center text-xs text-gray-500">
					O hazlo por medio de otras cuentas
				</h2>
				<div className="h-px flex-1 bg-gray-500"></div>
			</div>
			<div className="flex justify-center items-center space-x-3 mb-6 mt-2">
				<span className="card-social-media">
					<RiFacebookFill color={colors.facebook} />
				</span>
				<span className="card-social-media">
					<FcGoogle />
				</span>
			</div>
			<div>
				<p className="text-center font-bold text-sm">
					¿Aún no tienes cuenta?{' '}
					<NextLink href="/signup" className="link underline">
						Regístrate
					</NextLink>
				</p>
			</div>
		</React.Fragment>
	);
};

export default LoginForm;
