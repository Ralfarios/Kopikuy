import 'react';

declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
