import * as React from 'react';

interface ISection1HomeProps {}

const Section1Home: React.FunctionComponent<ISection1HomeProps> = props => {
	const {} = props;
	return (
		<section className="relative">
			<div className="flex items-center flex-col justify-center text-center p-6 py-12 max-w-7xl mx-auto">
				<div className="flex flex-col pb-8">
					<h4 className="font-bold lg:text-4xl text-3xl">
						El mejor lugar para reservar tus viajes
					</h4>
					<p>
						tendras las mejores opciones al mejor precios y con
						gran confianza
					</p>
				</div>
			</div>
		</section>
	);
};

export default Section1Home;
