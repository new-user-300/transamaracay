export type SizeModal = 'sm' | 'md' | 'lg' | 'xl';

export interface IModalProps {
	showModal: boolean;
	setShowModal(value: boolean): void;
	children?: React.ReactNode;
	titulo?: React.ReactNode;
	size?: SizeModal;
	content?: React.ReactNode;
}
