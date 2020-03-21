export type Spacing = (val1: number, val2?: number, val3?: number, val4?: number) => string;

export const spacing: Spacing = (val1: number, val2?: number, val3?: number, val4?: number) => {
  if(!!val1 && !!val2 && !!val3 && val4) {
    return `${val1}px ${val2}px ${val3}px ${val4}px`
  } else if(!!val1 && !!val2 && !!val3) {
    return `${val1}px ${val2}px ${val3}px`
  }
  else if(!!val1 && !!val2) {
    return `${val1}px ${val2}px`
  }
  else return `${val1}px`
}
