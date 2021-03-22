export const getRandomColor = (h, s, l, a) => {
  const hue = getRandomNumber(h[0], h[1]);
  const saturation = getRandomNumber(s[0], s[1]);
  const lightness = getRandomNumber(l[0], l[1]);
  const alpha = getRandomNumber(a[0] * 100, a[1] * 100) / 100;

  return {
    h: hue,
    s: saturation,
    l: lightness,
    a: alpha,
  };
};

export const getRandomNumber = (low, high) => {
  const r = Math.floor(Math.random() * (high - low + 1)) + low;
  return r;
};
