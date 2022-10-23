import { useEffect } from 'react';

export const useOnClickOutside = (overlay, handler) => {
	useEffect(() => {
		const listener = (event) => {
			console.log('e.target', event.target);
			if (overlay.current && overlay.current.contains(event.target)) {
				handler(event);
				return;
			}
			// Close sidebar on click menuItem with href
			event.path.forEach((node) => {
				if (node.nodeName === 'A') {
					handler(event);
				}
			});
		};
		document.addEventListener('mousedown', listener);

		return () => {
			document.removeEventListener('mousedown', listener);
		};
	}, [overlay, handler]);
};
