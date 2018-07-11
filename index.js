import englishToBrailleLiteralSet from './english-to-braille.js';

/**
 * Converts text in english to braille code.
 * Write all code related to the DOM Manipulation here.
 * Using the english-to-braille mapper convert the text
 * in english language to that in the equivalent braille
 * code.
//  */
const mo = new Map(englishToBrailleLiteralSet);
function convert() {
  const ip = document.getElementById('sourceLangText').value;
  let op = '';
  for (let i = 0; i < ip.length; i += 1) {
    op += mo.get(ip[i]);
  }
  document.getElementById('targetLangText').innerHTML = op;
}
document.getElementById('btnConvertEnglishToBraille').addEventListener('click', convert);
