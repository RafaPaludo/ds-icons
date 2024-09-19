import { generateFonts } from 'fantasticon';
import { toPascalCase } from './utils/index.js';
import fs from 'fs';

const inputDir =  import.meta.dirname + '/ds-src';
const outputDir =  import.meta.dirname + '/ds-dist';

const init = () => {
  generateFonts({
    inputDir: inputDir, // (required)
    outputDir: outputDir, // (required)
    name: 'icons',
    fontTypes: ['ttf', 'woff', 'woff2'],
    assetTypes: ['css', 'html', 'json'],
    formatOptions: { json: { indent: 2 } },
    fontHeight: 300,
    tag: 'i',
    prefix: 'ds',
  })
  .then(({ options, codepoints }) => {
    const prefix = options?.prefix;
    const iconNames = Object.keys(codepoints);
  
    let iconAliases = {};
  
    iconNames.forEach(iconName => {
      const capitalizedName = toPascalCase(iconName);
      const objname = `${prefix}${capitalizedName}`;
      const objValue = `${prefix}-${iconName}`;
  
      return iconAliases[objname] = objValue;
    })
  
    // Gerando o conteúdo do arquivo .js
    const content = `const aliases = ${JSON.stringify(iconAliases, null, 2)};\nexport { aliases };`;
  
    fs.writeFile('./dist/aliases.js', content, 'utf8', err => {
      if (err) {
        console.error(err);
      } else {
        console.log('Ícones gerados com sucesso!');
      }
    });
  })
  .catch(err => {
    console.log(err)
  });
};
//console.log(import.meta.filename);
console.log(import.meta.dirname);

init();