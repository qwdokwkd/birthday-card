/**
 *
 * @param base Base class name
 * @param additional Additional class names
 * @param modifiers Class modifiers
 *
 * @example
 * const className = buildClassName('a', ['b'], { 'c': true, 'd': false }) // 'a b c'
 */
export const buildClassName = (
  base: string,
  additional: string[] = [],
  modifiers: Record<string, boolean> = {},
) => {
  return [
    base,
    ...additional,
    ...Object.entries(modifiers).reduce<string[]>((arr, [modifier, value]) => {
      if (value) arr.push(modifier);
      return arr;
    }, []),
  ].join(" ");
};
