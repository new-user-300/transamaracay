import * as React from 'react';
import { FaTimes } from 'react-icons/fa';
import { domAnimation, LazyMotion, m } from 'framer-motion';
import { IModalProps } from './interfaces';

const Modal: React.FC<IModalProps> = props => {
	const { showModal, setShowModal } = props;

	React.useEffect(() => {
		const handleEsc = (event: KeyboardEvent) => {
			if (event.keyCode === 27) {
				setShowModal(false);
			}
		};
		window.addEventListener('keydown', handleEsc);

		return () => {
			window.removeEventListener('keydown', handleEsc);
		};
		// eslint-disable-next-line
	}, []);

	let maxWidth: string;

	if (props.size === 'sm') {
		maxWidth = 'max-w-md';
	} else if (props.size === 'md') {
		maxWidth = 'max-w-2xl';
	} else if (props.size === 'lg') {
		maxWidth = 'max-w-4xl';
	} else if (props.size === 'xl') {
		maxWidth = 'max-w-6xl';
	} else {
		maxWidth = 'max-w-lg';
	}

	if (!showModal) return null;
	return (
		<div className="modal">
			<LazyMotion features={domAnimation}>
				<m.div
					className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[1000] outline-none focus:outline-none"
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 50 }}
				>
					<div
						className={`px-4 w-full py-6 mx-auto h-full overflow-auto ${maxWidth} flex lg:items-start items-center`}
					>
						<div className="border-0 rounded-lg shadow-lg lg:mt-44 flex flex-col w-full bg-white outline-none focus:outline-none">
							<div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
								<h3 className=" text-lg md:text-2xl font-semibold">
									{props.titulo}
								</h3>
								<button
									className="p-1 ml-auto bg-transparent border-0 text-black opacity-85 float-right text-lg leading-none font-semibold outline-none focus:outline-none"
									onClick={() =>
										setShowModal(false)
									}
								>
									<span>
										<FaTimes />
									</span>
								</button>
							</div>
							<div className="relative p-6 flex-auto text-lg">
								{props.children}
							</div>
						</div>
					</div>
				</m.div>
			</LazyMotion>
			<div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
		</div>
	);
};

export default Modal;
