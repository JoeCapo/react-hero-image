import convertToRgb from './convertToRgb';

export default (color, opacity) => {
	// Regex to check if hex code
	const regex = RegExp(/^#(?:[0-9a-f]{3}){1,2}$/i);

	// Check if the color is a hex code
	const isHex = regex.test(color);

	if (isHex) {
		// Convert hex code to RGB
		const rgb = convertToRgb(color);

		// Add in opacity
		const rgba = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;

		// Currently only supports linear-gradients
		return `linear-gradient(${rgba},${rgba})`;
	}
};
