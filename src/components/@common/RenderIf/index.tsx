import * as React from 'react';

interface IRenderIfProps {
	isTrue?: any;
	children?: React.ReactNode;
}

export const RenderIf: React.FunctionComponent<IRenderIfProps> = props => {
	if (!props.isTrue) return null;
	return <React.Fragment>{props.children}</React.Fragment>;
};
