import { Field, getIn, useFormikContext } from 'formik';
import * as React from 'react';
import { RenderIf } from '../@common/RenderIf';
import LabelFormik from './LabelFormik';

interface ITextAreaFormikProps {
	name?: string;
	label?: React.ReactNode;
	cols?: number;
	rows?: number;
	placeholder?: string;
}

const TextAreaFormik: React.FunctionComponent<ITextAreaFormikProps> = props => {
	const { name, label, cols = 30, rows = 5, placeholder } = props;

	const { errors, touched } = useFormikContext();
	const error = getIn(errors, name);
	const isTouched = getIn(touched, name);
	const validateError = error && isTouched;

	return (
		<div className="form-group">
			<LabelFormik name={name} label={label} />
			<Field
				as={'textarea'}
				name={name}
				id={name}
				cols={cols}
				rows={rows}
				className={'form-control'}
				placeholder={placeholder}
			/>

			<RenderIf isTrue={validateError}>
				<small className="required text-xs">{error}</small>
			</RenderIf>
		</div>
	);
};

export default TextAreaFormik;
