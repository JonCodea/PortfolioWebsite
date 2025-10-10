declare module 'flubber' {
  
  export function interpolate(
    a: string,
    b: string,
    options?: { maxSegmentLength?: number }
  ): (t: number) => string

  export function interpolateAll(
    paths: string[],
    options?: { maxSegmentLength?: number }
  ): (t: number) => string

  const _default: {
    interpolate: typeof interpolate
    interpolateAll: typeof interpolateAll
  }
  export default _default
}
