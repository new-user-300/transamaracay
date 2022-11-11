import * as React from 'react';
import NextLink from '../@common/Link';
import { FaCogs, FaHeart } from 'react-icons/fa';
import { IoMdFlash } from 'react-icons/io';

const Section3Home: React.FC = () => {
	return (
		<section className="py-6 px-3 max-w-7xl text-center mx-auto md:block hidden">
			<div className="flex flex-col pb-8">
				<h4 className="font-bold lg:text-4xl text-3xl">
					Razones para confiar en nosotros
				</h4>
			</div>
			<div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-3">
				<div className="tile px-3">
					<FaCogs className="mx-auto text-6xl text-success mb-3" />
					<h6 className="pt-4 border-t border-gray-200 font-bold text-lg mb-3">
						Escoge y paga más rápido
					</h6>
					<p className="text-sm">
						Con nuestro servicios de puntos, pagar se volver
						mucho mas facil
					</p>
				</div>
				<div className="tile px-3">
					<IoMdFlash className="mx-auto text-6xl text-success mb-3" />
					<h6 className="pt-4 border-t border-gray-200 font-bold text-lg mb-3">
						Guarda tu forma de pago
					</h6>
					<p className="text-sm">
						Facilitaremos mucho mas tu compra y reserva al
						guadar tus metodos de pago
					</p>
				</div>
				<div className="tile px-3">
					<FaHeart className="mx-auto text-6xl text-success mb-3" />
					<h6 className="pt-4 border-t border-gray-200 font-bold text-lg mb-3">
						Gestiona tu viajes con facilidad
					</h6>
					<p className="text-sm">
						Podrás manejar y organizar de manera sencilla tu
						viajes en tu propia "agenda"
					</p>
				</div>
				<div className="tile px-3">
					<FaCogs className="mx-auto text-6xl text-success mb-3" />
					<h6 className="pt-4 border-t border-gray-200 font-bold text-lg mb-3">
						Atención al cliente
					</h6>
					<p className="text-sm">
						Nuestros servicios cuentan con ayuda para todo aquel
						que necesite orientacion sobre el uso
					</p>
				</div>
			</div>
		</section>
	);
};

export default Section3Home;
