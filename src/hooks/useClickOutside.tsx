import * as React from 'react';

const useClickOutside = (onClose: () => void) => {
	const ref = React.useRef<HTMLDivElement>(null);

	const escapeListener = React.useCallback((e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			onClose();
		}
		// eslint-disable-next-line
	}, []);

	const clickListener = React.useCallback(
		(e: MouseEvent) => {
			if (!(ref.current as any).contains(e.target)) {
				onClose?.();
			}
		},
		// eslint-disable-next-line
		[ref.current]
	);

	React.useEffect(() => {
		document.addEventListener('click', clickListener);
		document.addEventListener('keyup', escapeListener);
		return () => {
			document.removeEventListener('click', clickListener);
			document.removeEventListener('keyup', escapeListener);
		};
		// eslint-disable-next-line
	}, [ref.current]);

	return ref;
};

export default useClickOutside;
