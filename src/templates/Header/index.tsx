import NextLink from '@/components/@common/Link';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import * as React from 'react';
import { FaBusAlt } from 'react-icons/fa';
import Navbar from './Navbar';
import NavigationDesktop from './NavigatioDesktop';

function Header() {
	const { pathname } = useRouter();
	const isHome = pathname === '/';

	let className: string;

	if (isHome) {
		className = classNames(
			'absolute w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out bg-transparent'
		);
	} else {
		className = classNames(
			'w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out bg-white'
		);
	}

	return (
		<header className={className}>
			<div className="px-4 xl:px-20">
				<div className="flex items-center justify-between h-16 md:h-20">
					<div className="flex-shrink-0 mr-4 flex">
						<NextLink
							href="/"
							className={classNames(
								'flex items-center h-full relative',
								{
									'text-white': isHome,
									'text-black': !isHome,
								}
							)}
							aria-label="Cruip"
						>
							<FaBusAlt className="text-2xl mr-2" />{' '}
							TransaMaracay
						</NextLink>

						<NavigationDesktop />
					</div>

					<Navbar />
				</div>
			</div>
		</header>
	);
}

export default Header;
