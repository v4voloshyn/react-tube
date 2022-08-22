import { useEffect } from 'react';

export const useOnClickOutside = (menuNode, burgerNode, handler) => {
	useEffect(() => {
		const listener = (event) => {
			if (
				!menuNode.current ||
				menuNode.current.contains(event.target) ||
				!burgerNode.current ||
				burgerNode.current.contains(event.target)
			) {
				return;
			}
			handler(event);
		};
		document.addEventListener('mousedown', listener);

		return () => {
			document.removeEventListener('mousedown', listener);
		};
	}, [menuNode, burgerNode, handler]);
};
