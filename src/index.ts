/**
 * @since 2020-03-10 04:56
 * @author vivaxy
 */
import parse from './parse';
import compare from './compare';

export default function semverCompare(a: string, b: string) {
  return compare(parse(a), parse(b));
}
