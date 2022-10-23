export const setFullURL = (url = '') => {
	return url.includes('https://') || url.includes('http://') ? url : `https://${url}`;
};
