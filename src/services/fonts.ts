const OPEN_SANS_FONT_NAME = 'Open Sans';

const getFonts = (urlPrefix: string = '/fonts/') => {
  return [
    {
      name: OPEN_SANS_FONT_NAME,
      url: `url(${urlPrefix}OpenSans-Regular.ttf)`,
      options: { style: 'normal', weight: 'normal' }
    },
    {
      name: OPEN_SANS_FONT_NAME,
      url: `url(${urlPrefix}OpenSans-Bold.ttf)`,
      options: { style: 'normal', weight: 'bold' }
    },
  ];
};

export function loadFont() {
  // @ts-ignore
  if (document.fonts.check('12px Open Sans')) return;

  const isDev = location.hostname === 'localhost' ||  location.protocol === 'file:';
  const urlPrefix = isDev ? './fonts/' : '/fonts/';
  const fonts = getFonts(urlPrefix);
  console.log('fonts');
  fonts.map(({ name, url, options}) => {
    // @ts-ignore
    const fontFace = new FontFace(name, url, options);
    fontFace.load();
    // @ts-ignore
    document.fonts.add(fontFace);
  });
}