import classNames from 'classnames';
import { useFormikContext } from 'formik';
import * as React from 'react';
import { RenderIf } from '../@common/RenderIf';
import { ImSpinner8 } from 'react-icons/im';

interface IButtonFormikProps {
	children?: React.ReactNode;
	className?: string;
	disabled?: boolean;
}

const ButtonFormik: React.FunctionComponent<IButtonFormikProps> = props => {
	const { className, disabled } = props;
	const { isSubmitting } = useFormikContext();

	return (
		<button
			className={classNames('btn', className)}
			disabled={isSubmitting || disabled}
			type="submit"
		>
			<RenderIf isTrue={!isSubmitting}>{props.children}</RenderIf>
			<RenderIf isTrue={isSubmitting}>
				<ImSpinner8 className="ml-1 animate-spin" />
			</RenderIf>
		</button>
	);
};

export default ButtonFormik;
