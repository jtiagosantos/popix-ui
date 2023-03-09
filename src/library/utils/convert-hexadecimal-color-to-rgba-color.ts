export const convertHexadecimalColorToRgbaColor = (color: string, alpha = 1) => {
  const match = color.match(/[0-9A-Fa-f]{2}/g);

  if (match) {
    const colors = match.map((i) => parseInt(i, 16));
    const [r, g, b] = colors;

    return `rgba(${r},${g},${b},${alpha})`;
  }
};
