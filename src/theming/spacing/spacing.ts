export type Spacing = (val1: number, val2?: number, val3?: number, val4?: number) => string;
export type SpacingFunction = (baseMultiplier: number) => Spacing;

export const spacingFunction: SpacingFunction =
  (baseMultiplier: number) =>
    (...args: any[]) => {
      if(args.length === 4) {
        return `${baseMultiplier * args[0]}px ${baseMultiplier * args[1]}px ${baseMultiplier * args[2]}px ${baseMultiplier * args[3]}px`
      } if(args.length === 3) {
        return `${baseMultiplier * args[0]}px ${baseMultiplier * args[1]}px ${baseMultiplier * args[2]}px`
      }
      if(args.length === 2) {
        return `${baseMultiplier * args[0]}px ${baseMultiplier * args[1]}px`
      }
      return `${baseMultiplier * args[0]}px`
    }
