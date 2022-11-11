import NextLink from '@/components/@common/Link';
import classNames from 'classnames';
import * as React from 'react';
import { BiMenu } from 'react-icons/bi';
import { FaBus } from 'react-icons/fa';

interface INavbarAuthProps {}

const NavbarAuth: React.FunctionComponent<INavbarAuthProps> = props => {
	const {} = props;
	const [openedDrawer, setOpenedDrawer] = React.useState(false);
	const toggleDrawer = () => setOpenedDrawer(!openedDrawer);

	const classContainer = classNames(
		'flex flex-wrap gap-2 items-center min-h-[4rem] md:px-10 p-4'
	);

	return (
		<div className={classContainer}>
			<NextLink href="/">
				<span className="flex items-center mr-2">
					<FaBus className="mr-1" />{' '}
					<span className="font-bold">Transamaracay</span>
				</span>
			</NextLink>

			<div className="flex-grow md:justify-between justify-end md:text-start text-end">
				<ul className="md:flex hidden gap-x-6 items-center text-gray-700 font-semibold m-md:order-last">
					<li className="cursor-pointer hover:underline">
						<NextLink href="/nosotros">Nosotros</NextLink>
					</li>
					<li className="cursor-pointer hover:underline">
						<NextLink href="/reservaciones">
							Reservaciones
						</NextLink>
					</li>
				</ul>

				<BiMenu
					className="text-3xl ml-auto md:hidden inline"
					onClick={toggleDrawer}
				/>
			</div>
		</div>
	);
};

export default NavbarAuth;
