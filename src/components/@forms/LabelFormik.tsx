import * as React from 'react';
import { FormikTouched } from 'formik';
import classNames from 'classnames';

interface ILabelFormikProps {
	name?: string;
	label?: React.ReactNode;
	required?: boolean;
	validateError?: boolean | FormikTouched<any> | FormikTouched<any>[];
	className?: string;
}

const LabelFormik: React.FunctionComponent<ILabelFormikProps> = props => {
	const { name, label, required, validateError, className } = props;
	if (!label) return null;

	return (
		<div className="flex justify-between">
			<label htmlFor={name} className={classNames('label-input', className)}>
				{validateError ? <span className="required">{label}</span> : label}{' '}
				{required && <span className={'required'}>(*)</span>}
			</label>
		</div>
	);
};

export default LabelFormik;
