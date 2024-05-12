export function toHtmlEntities(text: string) {
	return text.replace(/./gm, function (s) {
		// return "&#" + s.charCodeAt(0) + ";";
		return s.match(/[a-z0-9\s]+/i) ? s : '&#' + s.charCodeAt(0) + ';';
	});
}
