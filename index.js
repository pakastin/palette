const colors = [];

for (let shift = -30; shift <= 30; shift += 7.5) {
  const _colors = [];
  const s = 70 + shift * 0.8;
  const l = 50 + shift * 1.2;

  _colors.push({
    h: 0,
    s: 0,
    l: 50 + shift * 1.5
  });

  for (let _h = 0; _h < 360; _h += 30) {
    const h = Math.round(_h - shift / 4 + 4);
    _colors.push({ h, s, l });
  }

  colors.push(_colors);
}

module.exports = colors;
