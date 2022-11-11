import NextLink from '@/components/@common/Link';
import { useRouter } from 'next/router';
import * as React from 'react';

interface INavigationDesktopProps {}

const NavigationDesktop: React.FunctionComponent<INavigationDesktopProps> = props => {
	const {} = props;
	const { pathname } = useRouter();
	const isHome = pathname === '/';

	return (
		<ul
			className={`flex-grow justify-end flex-wrap items-center xl:space-x-16 space-x-4 xl:ml-32 ml-4 xl:text-base text-sm md:flex hidden font-semibold ${
				isHome ? 'text-white' : 'text-black'
			}`}
		>
			<li>
				<NextLink className="hover:underline" href="/nosotros">
					Nosotros
				</NextLink>
			</li>
			<li>
				<NextLink className="hover:underline" href="/reservaciones">
					Reservaciones
				</NextLink>
			</li>
		</ul>
	);
};

export default NavigationDesktop;
