import { CheckboxGroupProps } from 'react-rainbow-components/components/CheckboxGroup';
import * as React from 'react';
import { getIn, useFormikContext } from 'formik';
import dynamic from 'next/dynamic';
import LabelFormik from './LabelFormik';
import { RenderIf } from '../@common/RenderIf';
import useBreakpoint from '@/hooks/useBreakpoint';

const CheckboxGroup = dynamic(() => import('react-rainbow-components/components/CheckboxGroup'), {
	ssr: false,
});

interface ICheckboxGroupFormikProps {
	options: CheckboxGroupProps['options'];
	orientation?: CheckboxGroupProps['orientation'];
	id?: string;
	name?: string;
	label?: string;
	classNameLabel?: string;
}

const CheckboxGroupFormik: React.FunctionComponent<ICheckboxGroupFormikProps> = props => {
	const { options, orientation = 'horizontal', name, label, classNameLabel } = props;
	const { values, setFieldValue, errors, setTouched, touched } = useFormikContext();
	const breakpoints = useBreakpoint();
	const value: string = getIn(values, name);

	const error = getIn(errors, name);
	const isTouched = getIn(touched, name);
	const validateError = error && isTouched;

	return (
		<div className="form-group">
			<LabelFormik label={label} className={classNameLabel} />
			<CheckboxGroup
				options={options}
				value={[value]}
				onChange={values => {
					const value = values[1] ? values[1] : values[0];
					setFieldValue(name, value);
					setTouched(name, true);
				}}
				orientation={
					breakpoints === 'mobile' || breakpoints === 'sm'
						? 'vertical'
						: orientation
				}
			/>

			<RenderIf isTrue={validateError}>
				<small className="required text-xs">{error}</small>
			</RenderIf>
		</div>
	);
};

export default CheckboxGroupFormik;
