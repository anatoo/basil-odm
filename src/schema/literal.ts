import { SchemaFragment } from './types';
import { inspect } from 'util';
import { schemaFragmentFrag } from './symbols';

export function literal<const T extends string | boolean | number | null>(
  value: T
): SchemaFragment<T> {
  if (
    typeof value !== 'string' &&
    typeof value !== 'number' &&
    typeof value !== 'boolean' &&
    value !== null
  ) {
    throw TypeError(
      `First parameter must be a string, number, boolean, or null: ${inspect(value)}`
    );
  }

  return {
    [schemaFragmentFrag]: true,

    buildASTNode() {
      return {
        kind: 'literal',
        value,
      };
    },
  };
}
