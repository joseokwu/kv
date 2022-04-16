
export const theme = {
  blue: {
    500: '#2E3192', // Deep blue
    400: '#0A6CF4', // Tab blue
    300: '#00ADEF', // Registration blue
    200: '#058DC1', // Mint blue
    100: '#DEF6FF', // Mint blue 100
  },
  purple: {
    500: '#40439A', // Skills text purple
    100: '#FAFAFC', // Registration input purple
  },
  red: {
    500: '#E31937', // Skills text red
    100: '#FFF1F3', // Skills text bg red
  },
  green: {
    500: '#35D662',
    100: '#ECFCF0',
  },
  grey: {
    500: '#717177',
    400: '#BDBDBD', // Registration placeholder
    300: '#C4C4C4',
    200: '#F4F4F4',
    100: '#F9F9FC',
  },
  white: {
    200: '#FFFBF2',
    100: '#FFFFFF',
  },
  black: {
    500: '#000000',
    300: '#3E3E3E',
  },
};

export const font = {
  sizes: {
    base: '1rem',
    xxs: '0.625rem',
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1.25rem',
    lg: '1.5rem',
    xl: '2.25rem',
    xxl: '2.875rem',
    xxxl: '3.625rem',
    xxxxl: '4.063rem',
  },
  weights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 500,
    bold: 700,
  },
};


export function bytesToSize(bytes) {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return 'n/a';
    const b = Math.log(bytes);
    const a = Math.log(1024);
    const c = b / a;
    const i = parseInt(`${c}`, 10);
    if (i === 0) return `${bytes} ${sizes[i]})`;
    return `${(bytes / 1024 ** i).toFixed(0)} ${sizes[i]}`;
  }