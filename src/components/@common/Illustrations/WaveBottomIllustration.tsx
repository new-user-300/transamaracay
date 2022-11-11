import * as React from 'react';

interface IWaveBottomIllustrationProps {}

const WaveBottomIllustration: React.FunctionComponent<IWaveBottomIllustrationProps> = props => {
	const {} = props;
	return (
		<svg
			width="767"
			height="954"
			viewBox="0 0 767 954"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M631.004 2.12039C808.696 27.0955 738.236 393.865 833.515 581.088C903.206 718.03 1100.71 749.962 1093.82 911.559C1086.69 1078.91 938.696 1197.18 805.864 1230.07C697.48 1256.91 631.859 1088.83 525.338 1052.32C348.655 991.761 73.0781 1168.88 8.29926 956.704C-53.9279 752.882 250.6 684.255 361.204 514.703C470.101 347.769 458.713 -22.0957 631.004 2.12039Z"
				fill="url(#paint0_linear_149_543)"
				fillOpacity="0.1"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_149_543"
					x1="547"
					y1="0.986389"
					x2="547"
					y2="1232.96"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#e74c3c" />
					<stop offset="0.520833" stopColor="#e74c3c" />
					<stop offset="1" stopColor="#FCFCFC" />
				</linearGradient>
			</defs>
		</svg>
	);
};

export default WaveBottomIllustration;
