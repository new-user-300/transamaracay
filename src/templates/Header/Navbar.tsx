import * as React from 'react';
import { FaBars, FaHome, FaSignOutAlt } from 'react-icons/fa';
import { RenderIf } from '@/components/@common/RenderIf';
import NextLink from '@/components/@common/Link';
import { useRouter } from 'next/router';

const Navbar: React.FC = () => {
	const { pathname } = useRouter();
	const isHome = pathname === '/';

	return (
		<nav className="flex flex-grow text-black">
			<ul className="flex flex-grow justify-end flex-wrap items-center xl:space-x-6 space-x-2">
				<RenderIf isTrue={false}>
					<li className="hidden md:block">
						<NextLink
							href="/dashboard"
							className="text-gray-900 bg-gray-50 hover:bg-gray-300 ml-3 font-medium btn-sm"
						>
							<span>Dashboard</span>
							<FaHome className="w-3 h-3 fill-current text-gray-500 flex-shrink-0 ml-2 -mr-1" />
						</NextLink>
					</li>
					<li className="hidden md:block">
						<button className="btn btn-default btn-sm">
							<span>Logout</span> <FaSignOutAlt />
						</button>
					</li>
				</RenderIf>

				<RenderIf isTrue={true}>
					<li className="hidden md:block">
						<NextLink
							href="/signup"
							className="btn btn-default btn-sm shadow-3xl xl:px-7 px-4 py-2 xl:text-sm"
						>
							<span className="text-primary">
								Inscríbete
							</span>
						</NextLink>
					</li>
					<li className="hidden md:block">
						<NextLink
							href="/login"
							className="btn btn-primary btn-sm xl:px-7 px-4 py-2 xl:text-sm shadow-lg shadow-green-600"
						>
							Iniciar Sesión
						</NextLink>
					</li>
				</RenderIf>

				<li className="block md:hidden">
					<FaBars
						className={`cursor-pointer ${
							isHome ? 'text-white' : 'text-black'
						}`}
						size={25}
					/>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
