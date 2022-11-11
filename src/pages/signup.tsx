import AuthLayout from '@/templates/AuthLayout';
import SignupForm from '@/templates/AuthLayout/SignupForm';
import { NextPage } from 'next';
import React from 'react';

const Signup: NextPage = () => {
	return (
		<AuthLayout>
			<SignupForm />
		</AuthLayout>
	);
};

export default Signup;
