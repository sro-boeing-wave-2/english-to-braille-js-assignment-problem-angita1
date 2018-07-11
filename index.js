import englishToBrailleLiteralSet from './english-to-braille.js';

/*
 * Converts text in english to braille code.
 * Write all code related to the DOM Manipulation here.
 * Using the english-to-braille mapper convert the text
 * in english language to that in the equivalent braille
 * code.
//  */
const mo = new Map(englishToBrailleLiteralSet);
function convert() {
  const ip = document.getElementById('sourceLangText').value;
  const array = ip.split('');
  const op = array.map(x => mo.get(x)).join('');
  document.getElementById('targetLangText').innerHTML = op;
}
document.getElementById('btnConvertEnglishToBraille').addEventListener('click', convert);
