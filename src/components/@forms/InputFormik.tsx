import classNames from 'classnames';
import { Field, getIn, useFormikContext } from 'formik';
import * as React from 'react';
import { RenderIf } from '../@common/RenderIf';
import LabelFormik from './LabelFormik';

interface IInputFormikProps {
	label?: React.ReactNode;
	name: string;
	disabled?: boolean;
	type?: React.HTMLInputTypeAttribute;
	placeholder?: string;
	autoFocus?: boolean;
	onChange?(value: string | number): string | number;
	required?: boolean;
	className?: string;
	classNameInput?: string;
}

const InputFormik: React.FunctionComponent<IInputFormikProps> = props => {
	const { disabled, name, label, type = 'text', autoFocus, required, placeholder } = props;
	const classContainer = classNames('form-group', props.className);
	const classInput = classNames('form-control', props.classNameInput);

	const { errors, touched, values } = useFormikContext();
	const value = getIn(values, name);
	const error = getIn(errors, name);
	const isTouched = getIn(touched, name);
	const validateError = error && isTouched;

	return (
		<div className={classContainer}>
			<LabelFormik
				name={name}
				required={required}
				validateError={validateError}
				label={label}
			/>

			<Field
				value={value}
				id={name}
				type={type}
				disabled={disabled}
				name={name}
				autoFocus={autoFocus}
				className={classInput}
				placeholder={placeholder}
			/>

			<RenderIf isTrue={validateError}>
				<small className="required text-xs">{error}</small>
			</RenderIf>
		</div>
	);
};

export default InputFormik;
