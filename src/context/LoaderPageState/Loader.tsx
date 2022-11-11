import classNames from 'classnames';
import * as React from 'react';

interface ILoaderProps {
	loading: boolean;
	texto: string;
	hightScreen?: boolean;
	position?: 'fixed' | 'absolute';
	overrideClassNameContainer?: string;
	opacity?: number;
}

const Loader: React.FunctionComponent<ILoaderProps> = props => {
	const { loading, hightScreen = true, position = 'fixed' } = props;
	if (!loading) return null;

	const classNamesLoader = classNames(
		{ 'h-screen': hightScreen },
		position,
		'w-full',
		'flex',
		'items-center',
		'justify-center',
		'bg-slate-700',
		'opacity-75',
		props.overrideClassNameContainer
	);

	return (
		<div className={classNamesLoader} style={{ zIndex: 999999 }}>
			<div className="flex flex-col justify-center items-center">
				<span className="loader" />
			</div>
		</div>
	);
};

export default Loader;
