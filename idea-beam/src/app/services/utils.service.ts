export default (function() {
  const separator = '~';

  const keyEncode = function (a, b) {
    return [...arguments].join(separator);
  };

  const keyDecode = (key) => {
    return key.split(this.separator);
  };

  return {
    keyEncode,
    keyDecode
  };
})();
