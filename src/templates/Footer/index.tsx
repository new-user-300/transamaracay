import NextLink from '@/components/@common/Link';
import * as React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { FaBusAlt } from 'react-icons/fa';

const Footer: React.FunctionComponent = () => {
	return (
		<footer>
			<div className="grid md:grid-cols-3 grid-cols-1 bg-primary p-4 md:px-8 md:py-10 gap-y-4">
				<NextLink
					href="/"
					className="flex items-center md:mt-0 mt-2 justify-center md:justify-start text-gray-50"
				>
					<FaBusAlt className="text-2xl mr-2" /> TransaMaracay
				</NextLink>
				<ul className="flex flex-wrap items-center justify-center text-sm md:text-base text-gray-50">
					<li>
						<NextLink
							href="/nosotros"
							className="pr-2 border-r border-white hover:underline"
						>
							Nosotros
						</NextLink>
					</li>

					<li>
						<NextLink
							href="/reservaciones"
							className="px-2 hover:underline"
						>
							Reservaciones
						</NextLink>
					</li>
				</ul>

				<ul className="flex flex-wrap flex-col md:items-end items-center justify-center text-sm md:text-base text-white">
					<li>
						<strong>Teléfono: </strong> +58 0424-xxxxxxxxx
					</li>
					<li>
						<strong>Correo: </strong> diegoOberto@gmail.com
					</li>
				</ul>
			</div>

			<div className="flex md:justify-between justify-center md:flex-row flex-col p-3 md:px-8 md:py-6 bg-[#0F0A0A] md:text-sm text-xs text-white">
				<span className="md:text-start text-center md:mb-0 mb-2">
					Copyright © 2022 Oberto - Todos los derechos reservados.
				</span>

				<span className="flex items-center justify-center">
					Conéctate con nosotros{' '}
					<BsFacebook className="ml-2 hover:text-slate-200 cursor-pointer" />
				</span>
			</div>
		</footer>
	);
};

export default Footer;
