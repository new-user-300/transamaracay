import { ReactSelectOption } from '@/interfaces';
import { getIn, useFormikContext } from 'formik';
import * as React from 'react';
import Select from 'react-select';
import { RenderIf } from '../@common/RenderIf';
import LabelFormik from './LabelFormik';

interface IReactSelectFormikFormProps {
	options?: ReactSelectOption[];
	label?: React.ReactNode;
	required?: boolean;
	nameValue: string;
	nameLabel: string;
	placeholder?: React.ReactNode;
}

const ReactSelectFormik: React.FunctionComponent<IReactSelectFormikFormProps> = props => {
	const {
		options = [],
		nameLabel,
		nameValue,
		label: labelFormik,
		required,
		placeholder,
	} = props;
	const { values, setFieldValue, setTouched, errors, touched } = useFormikContext();
	const [label, value] = [getIn(values, nameLabel), getIn(values, nameValue)];
	const valueSelected: ReactSelectOption = { label, value };

	const error = getIn(errors, nameValue);
	const isTouched = getIn(touched, nameValue);
	const validateError = error && isTouched;

	return (
		<div className="form-group">
			<LabelFormik label={labelFormik} required={required} />
			<Select
				styles={{
					valueContainer: base => ({
						...base,
						padding: '0.7rem',
						background: '#f9fafb',
					}),
					indicatorsContainer: base => ({
						...base,
						background: '#f9fafb',
					}),
				}}
				placeholder={placeholder}
				options={options}
				value={valueSelected.label ? valueSelected : null}
				onChange={value => {
					setFieldValue(nameLabel, value.label);
					setFieldValue(nameValue, value.value);
					setTouched(nameValue, true);
				}}
			/>

			<RenderIf isTrue={validateError}>
				<small className="required text-xs">{error}</small>
			</RenderIf>
		</div>
	);
};

export default ReactSelectFormik;
