import * as React from 'react';
import { Placement } from '@popperjs/core';
import usePopper from '@/hooks/usePopper';
import useClickOutside from '@/hooks/useClickOutside';

interface IDropdownProps {
	CustomPopover?: React.ReactNode;
	children?: React.ReactNode;
	placement: Placement;
}

const Dropdown: React.FC<IDropdownProps> = props => {
	const { children, CustomPopover, placement } = props;
	const [
		btnDropdownRef,
		popoverDropdownRef,
		dropdownPopoverShow,
		{ openToggle, closeToggle },
	] = usePopper({ placement });

	const onClickPopover = (e: React.MouseEvent) => {
		e.preventDefault();
		openToggle();
	};

	const refContainer = useClickOutside(closeToggle);

	return (
		<div ref={refContainer}>
			<span
				className="text-gray-500 block cursor-pointer"
				ref={btnDropdownRef}
				onClick={onClickPopover}
			>
				{CustomPopover}
			</span>

			<div
				ref={ref => (popoverDropdownRef.current = ref)}
				className={
					(dropdownPopoverShow ? 'block ' : 'hidden ') +
					'text-base z-50 float-left p-4 list-none text-left rounded min-w-48'
				}
				onClick={closeToggle}
			>
				{children}
			</div>
		</div>
	);
};

export default Dropdown;
