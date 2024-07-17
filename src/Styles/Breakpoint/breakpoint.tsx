type Size = {
    sm: string;
    md: string;
    bg: string;
  };
  
  type Breakpoints = {
    sm: string;
    md: string;
    bg: string;
  };
  
  const size: Size = {
    sm: '300px',
    md: '505px',
    bg: '1090px',
  };
  
  const breakpoints: Breakpoints = {
    sm: `(max-width: ${size.sm})`,
    md: `(max-width: ${size.md})`,
    bg: `(max-width: ${size.bg})`,
  };
  
  export default breakpoints;
  