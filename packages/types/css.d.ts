declare module '*.module.css' {
  const content: { [selector: string]: string };
  export default content;
}


declare module '*.module.scss' {
  const content: { [selector: string]: string };
  export default content;
}