export const getColor =
  (colorName) =>
  ({ theme }) =>
    theme.colors[colorName];

export const getFontFamily =
  (fontName) =>
  ({ theme }) =>
    theme.fontFamily[fontName];

export const getFontWeight =
  (fontWeightName) =>
  ({ theme }) =>
    theme.fontWeight[fontWeightName];

export const getFontSize =
  (fontSizeName) =>
  ({ theme }) =>
    theme.fontSize[fontSizeName];

export const getMedias =
  (mediasName) =>
  ({ theme }) =>
    theme.medias[mediasName];
