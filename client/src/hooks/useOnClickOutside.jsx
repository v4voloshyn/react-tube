import { useEffect } from 'react';

export const useOnClickOutside = (burgerNode, handler) => {
	useEffect(() => {
		const listener = (event) => {
			if (!burgerNode.current || burgerNode.current.contains(event.target)) {
				return;
			}
			handler(event);
		};
		document.addEventListener('mousedown', listener);

		return () => {
			document.removeEventListener('mousedown', listener);
		};
	}, [burgerNode, handler]);
};
