import chroma from "chroma-js";


export const randomColor = (): string => chroma.random().hex();

export const warmPalette = (): string =>
  chroma.hsl(Math.random() * 60, 0.7, 0.5).hex();

export const coolPalette = (): string  =>
  chroma.hsl(120 + Math.random() * 120, 0.7, 0.5).hex();


export const gradientColor = (baseColor: string): string => {
  const targetColor = chroma(baseColor).brighten(1); 

const t: number = Math.random() * (1 - 0) + 0;
  return chroma.mix(baseColor, targetColor, t, 'rgb').hex();
};

export const complementaryColor = (baseColor: string): string => {
  const hue = chroma(baseColor).get('hsl.h');
  const complementaryHue = (hue + 180) % 360; 

  const saturation: number = Math.random() * (0.9 - 0.5) + 0.5; 
  const lightness: number = Math.random() * (0.6 - 0.4) + 0.4;  

  return chroma.hsl(complementaryHue, saturation, lightness).hex();
};