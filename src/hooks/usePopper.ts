import { createPopper, OptionsGeneric } from '@popperjs/core';
import type { Modifier } from '@popperjs/core';
import * as React from 'react';

export type PoppoverOptions = Partial<OptionsGeneric<Partial<Modifier<any, any>>>>;
export type ElementHtmlPoppover = HTMLDivElement | HTMLButtonElement | HTMLSpanElement;
type UsePoppoverRetuns = [
	React.MutableRefObject<ElementHtmlPoppover>,
	React.MutableRefObject<ElementHtmlPoppover>,
	boolean,
	{
		openToggle: () => void;
		closeToggle: () => void;
		toggle: () => void;
	}
];

const usePopper = (popperConfig: PoppoverOptions): UsePoppoverRetuns => {
	const [toggledState, setToggledState] = React.useState(false);

	const triggerRef = React.useRef<ElementHtmlPoppover>();
	const popupRef = React.useRef<ElementHtmlPoppover>();

	const toggle = React.useCallback(() => {
		setToggledState(!toggledState);
	}, [toggledState]);

	const openToggle = React.useCallback(() => {
		setToggledState(true);
	}, []);

	const closeToggle = React.useCallback(() => {
		setToggledState(false);
	}, []);

	React.useEffect(() => {
		const popper = createPopper(
			triggerRef.current,
			popupRef.current,
			popperConfig || {}
		);
		return () => popper.destroy();
	}, [popperConfig]);

	return [triggerRef, popupRef, toggledState, { toggle, openToggle, closeToggle }];
};

export default usePopper;
