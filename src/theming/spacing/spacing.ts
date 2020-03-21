export type Spacing = (val1: number, val2?: number, val3?: number, val4?: number) => string;
export type SpacingFunction = (baseMultiplier: number) => Spacing;

export const spacingFunction: SpacingFunction =
  (baseMultiplier: number) =>
    (val1: number, val2?: number, val3?: number, val4?: number) => {
      if(!!val1 && !!val2 && !!val3 && val4) {
        return `${baseMultiplier * val1}px ${baseMultiplier * val2}px ${baseMultiplier * val3}px ${baseMultiplier * val4}px`
      } else if(!!val1 && !!val2 && !!val3) {
        return `${baseMultiplier * val1}px ${baseMultiplier * val2}px ${baseMultiplier * val3}px`
      }
      else if(!!val1 && !!val2) {
        return `${baseMultiplier * val1}px ${baseMultiplier * val2}px`
      }
      else return `${baseMultiplier * val1}px`
}
