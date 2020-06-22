var patternMatching = function (pattern, value) {
  if (pattern === "") return value === "";
  let reg = pattern.replace("a", "(?<a>\\w*)").replace("b", "(?<b>\\w*)");
  reg = reg.replace(/(?<!\<)a/g, "\\k<a>").replace(/(?<!\<)b/g, "\\k<b>");
  let match = new RegExp("^" + reg + "$").exec(value);
  return !!match && match[1] !== match[2];
};
