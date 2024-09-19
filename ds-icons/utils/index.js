const toPascalCase = str => {
	return str
		.split('-') // Divide a string pelo hifen
		.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Converte a primeira letra para maiúscula e o restante para minúscula
		.join(''); // Junta as palavras sem separadores
};

export {
	toPascalCase
};