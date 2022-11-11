import { getIn, useFormikContext } from 'formik';
import * as React from 'react';
import classNames from 'classnames';
import CurrencyFormat from 'react-currency-format';
import { RenderIf } from '../@common/RenderIf';
import LabelFormik from './LabelFormik';

interface ICurrencyFormatInputFormikProps {
	prefix?: string;
	suffix?: string;
	name: string;
	thousandSeparator?: boolean;
	label?: React.ReactNode;
	required?: boolean;
}

const CurrencyFormatInputFormik: React.FC<ICurrencyFormatInputFormikProps> = props => {
	const { prefix, suffix, name, thousandSeparator, required, label } = props;
	const { values, setFieldValue, touched, errors, setFieldTouched } = useFormikContext();

	const value = getIn(values, name);
	const error = getIn(errors, name);
	const isTouched = getIn(touched, name);
	const validateError = error && isTouched;

	return (
		<div className="form-group">
			<LabelFormik label={label} required={required} />
			<CurrencyFormat
				className={classNames('form-control form-control-sm')}
				thousandSeparator={thousandSeparator}
				prefix={prefix && `${prefix} `}
				suffix={suffix && ` ${suffix}`}
				name={name}
				id={name}
				value={value ? value : ''}
				onValueChange={values => {
					const { floatValue } = values;
					setFieldValue(name, floatValue ? floatValue : 0);
				}}
				onClick={() => setFieldTouched(name, true)}
			/>

			<RenderIf isTrue={validateError}>
				<small className="required text-xs">{error}</small>
			</RenderIf>
		</div>
	);
};

export default CurrencyFormatInputFormik;

/* className="form-input dark:bg-slate-800 bg-slate-200 py-2 rounded-l-0"
										thousandSeparator={
											true
										}
										prefix={
											currenciesCrypto.find(
												c =>
													c.name ===
													values.fromCurrency
											).symbol +
											' '
										}
										onValueChange={values => {
											const {
												floatValue,
											} = values;
											setFieldValue(
												'inputFrom',
												floatValue
													? floatValue
													: 0
											);
										}}
 */
