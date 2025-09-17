import chroma from "chroma-js";


export const randomColor = (): string => chroma.random().hex();

export const warmPalette = (): string =>
  chroma.hsl(Math.random() * 60, 0.7, 0.5).hex();

export const coolPalette = (): string  =>
  chroma.hsl(120 + Math.random() * 120, 0.7, 0.5).hex();

export const gradientColor = (baseColor: string, t: number = 0.5): string => {
  const targetColor = chroma(baseColor).brighten(1); 

  return chroma.mix(baseColor, targetColor, t, 'rgb').hex();
};