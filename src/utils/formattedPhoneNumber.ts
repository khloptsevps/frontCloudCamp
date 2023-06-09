export default (number: string): string => {
  let result = '';
  let cleaned = number.replace(/\D/g, '');
  if (['7', '8', '9'].indexOf(cleaned[0]) > -1) {
    if (cleaned[0] === '9') cleaned = '7' + cleaned;

    const firstSymbols = cleaned[0] === '8' ? '8' : '+7';
    result = firstSymbols + ' ';
    if (cleaned.length > 1) {
      result += '(' + cleaned.substring(1, 4);
    }
    if (cleaned.length >= 5) {
      result += ') ' + cleaned.substring(4, 7);
    }
    if (cleaned.length >= 8) {
      result += '-' + cleaned.substring(7, 9);
    }
    if (cleaned.length >= 10) {
      result += '-' + cleaned.substring(9, 11);
    }
  } else {
    result = '+' + cleaned.substring(0, 16);
  }
  return result;
};
