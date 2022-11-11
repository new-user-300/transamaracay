import * as React from 'react';
import NextLink from '../@common/Link';

interface IHeroHomeProps {}

const HeroHome: React.FunctionComponent<IHeroHomeProps> = props => {
	const {} = props;
	return (
		<div
			className="relative overflow-hidden h-[900px] bg-no-repeat bg-cover"
			style={{
				backgroundPosition: '50%',
				backgroundImage: "url('/images/hero-home.png')",
				backgroundSize: 'cover',
			}}
		>
			<div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
				<div className="flex items-center h-full flex-wrap">
					<div className="text-white px-6 md:px-12">
						<h1 className="text-4xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-6">
							Rodando por toda Venezuela <br /> y dentro
							del pueblo Bolivariano
						</h1>
						<div className="flex flex-wrap">
							<span className="mt-2">
								<NextLink
									className="btn btn-success md:px-8 md:py-3 px-3 md:text-sm btn-sm"
									href="/reservaciones"
								>
									¡Reserva ya!
								</NextLink>
							</span>
							<span className="mt-2 sm:ml-2">
								<NextLink
									className="btn btn-danger md:px-8 md:py-3 px-3 md:text-sm btn-sm"
									href="/horarios"
								>
									Horarios disponibles
								</NextLink>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroHome;
