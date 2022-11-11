import NextLink from '@/components/@common/Link';
import { colors } from '@/utils/colors';
import { Form, Formik } from 'formik';
import * as React from 'react';
import { RiFacebookFill } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';
import InputFormik from '@/components/@forms/InputFormik';
import ButtonFormik from '@/components/@forms/ButtonSubmitFormik';

const INITIAL_VALUES = {};

const SignupForm: React.FC = () => {
	const onSubmit = () => {};

	return (
		<React.Fragment>
			<p className="text-gray-800 text-center text-4xl font-bold mb-6">
				Crea una cuenta
			</p>
			<Formik initialValues={INITIAL_VALUES} onSubmit={onSubmit}>
				<Form>
					<InputFormik name="email" placeholder="Correo" />

					<InputFormik
						name="password"
						type={'password'}
						placeholder={'Contraseña'}
					/>

					<InputFormik
						name="passwordConfirm"
						type={'password'}
						placeholder={'Confirmar contraseña'}
					/>

					<ButtonFormik className="w-full btn-primary btn-sm">
						Registrate
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
					¿Ya tienes cuenta?{' '}
					<NextLink href="/login" className="link">
						Inicia Sesion
					</NextLink>
				</p>
			</div>
		</React.Fragment>
	);
};

export default SignupForm;
