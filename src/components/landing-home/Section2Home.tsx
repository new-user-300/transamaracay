import * as React from 'react';

interface ISection2HomeProps {}

const Section2Home: React.FunctionComponent<ISection2HomeProps> = props => {
	const {} = props;
	return (
		<section className="p-6 py-12 max-w-7xl mx-auto">
			<div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
				<div className="flex items-start justify-start flex-col">
					<h6 className="font-bold text-3xl text-primary mb-6">
						¿Quiénes somos?
					</h6>

					<p className="mb-6">
						¿Cómo se llama el terminal de Maracay? El Terminal
						de Pasajeros de Maracay fue fundado en el mes de
						Noviembre de 1973 durante el Gobierno del Dr. Rafael
						Caldera. Era una dependencia del Concejo Municipal
						de Girardot, su Presidente de entonces era Víctor
						Manuel Hernández quien le asignó un administrador
						para que se encargara de su manejo administrativo.
					</p>

					<button className="btn btn-sm btn-primary md:px-12">
						Ver más
					</button>
				</div>

				<div className="flex items-center justify-center flex-col space-y-8">
					<span>
						<img
							src="/images/autobus-1.jpg"
							className="rounded-lg max-h-[300px] w-full"
							alt=""
						/>
					</span>
					<span>
						<img
							src="/images/autobus-2.jpg"
							alt=""
							className="rounded-lg max-h-[300px] w-full"
						/>
					</span>
				</div>
			</div>
		</section>
	);
};

export default Section2Home;
