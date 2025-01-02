declare module '*.svg';
declare module '*.png';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';
declare module '*.less';
declare module '*.css';

declare module '*.jpg' {
  const value: string;
  export default value;
}