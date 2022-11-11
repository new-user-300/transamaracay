import * as React from 'react';

interface IHeroPlataformasEducativasProps {}

const HeroPlataformasEducativas: React.FC<IHeroPlataformasEducativasProps> = props => {
	const {} = props;
	return (
		<div
			className="relative overflow-hidden h-[900px] bg-no-repeat bg-cover"
			style={{
				backgroundPosition: '50%',
				backgroundImage: "url('/images/hero-plataformas-educativas.png')",
				backgroundSize: 'cover',
			}}
		>
			<div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
				<div className="flex items-center h-full justify-center flex-wrap">
					<div className="text-white px-6 md:px-12 text-center">
						<h1 className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight mb-3">
							Te acompañamos en tus viajes
						</h1>
						<p className="text-2xl">
							Queremos llevarte a cualquier lugar
							alrededor de Venezuela
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroPlataformasEducativas;
