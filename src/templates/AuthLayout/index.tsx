import WaveBottomIllustration from '@/components/@common/Illustrations/WaveBottomIllustration';
import WaveTopIllustration from '@/components/@common/Illustrations/WaveTopIllustration';
import * as React from 'react';
import NavbarAuth from './NavbarAuth';

interface IAuthLayoutProps {
	children?: React.ReactNode;
}

const AuthLayout: React.FunctionComponent<IAuthLayoutProps> = props => {
	return (
		<div className="relative overflow-hidden min-h-screen main-document">
			<div className="absolute lg:-top-40 lg:-left-40 -top-80 -left-80 -z-10 rotate-180">
				<WaveTopIllustration />
			</div>
			<div className="absolute lg:-bottom-96 lg:-right-10 -right-60 -z-10">
				<WaveBottomIllustration />
			</div>
			<div>
				<NavbarAuth />
				<div className="flex justify-center items-center pt-10 md:pt-32 px-3">
					<div className="md:w-96">{props.children}</div>
				</div>
			</div>
		</div>
	);
};

export default AuthLayout;
