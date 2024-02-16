export const BREAKEPOINTS = {
  xs: 375,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
};

export const mediaQueries = (key: keyof typeof BREAKEPOINTS) => {
  return (style: TemplateStringsArray | string) => `@media (max-width: ${BREAKEPOINTS[key]}px) { ${style} }`;
};
