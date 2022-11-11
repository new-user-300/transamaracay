import classNames from 'classnames';
import * as React from 'react';

interface IDividerProps {
	className?: string;
}

const Divider: React.FunctionComponent<IDividerProps> = props => {
	const { className } = props;
	return <span className={classNames('w-full p-px lg:w-1/2 block my-4', className)}></span>;
};

export default Divider;
