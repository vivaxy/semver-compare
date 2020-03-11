/**
 * @since 2020-03-10 04:56
 * @author vivaxy
 */
function comparePrerelease(a: string | false, b: string | false) {
  // maybe `false`, `'xxx'`
  if (a === false) {
    if (b === false) {
      return 0;
    }
    return 1;
  }
  if (b === false) {
    return -1;
  }
  return a > b ? 1 : -1;
}

export default function compare(
  a: [number, number, number, string | false, string | false],
  b: [number, number, number, string | false, string | false],
) {
  for (let i = 0; i < a.length; i++) {
    if (i === 3) {
      return comparePrerelease(a[i], b[i]);
    }
    if (a[i] > b[i]) {
      return 1;
    }
    if (a[i] < b[i]) {
      return -1;
    }
  }
}
