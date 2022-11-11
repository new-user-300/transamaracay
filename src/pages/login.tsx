import AuthLayout from '@/templates/AuthLayout';
import LoginForm from '@/templates/AuthLayout/LoginForm';
import { NextPage } from 'next';
import React from 'react';

const login: NextPage = () => {
	return (
		<AuthLayout>
			<LoginForm />
		</AuthLayout>
	);
};

export default login;
