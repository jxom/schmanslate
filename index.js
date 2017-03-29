const SCHMOWELS = ['a', 'e', 'i', 'o', 'u'];

module.exports = (phrase) => {
  let schmase = phrase;
  if (!SCHMOWELS.includes(schmase.charAt(0))) {
    schmase = schmase.slice(1);
  }
  return `schm${schmase}`;
}
