// Write your deepDifferences function here! ✨
// You'll need to export it so the tests can run it.

import { shallowDifferences } from "../02-shallow-differences/index";

type arrayOfArraysOfStrings = string[][];
type arrayOfStringsOrUndefined = (string | undefined)[];
type arrayOfArraysOfStringsOrUndefined = (
	| undefined
	| arrayOfStringsOrUndefined
)[];

export function deepDifferences(
	a: arrayOfArraysOfStrings,
	b: arrayOfArraysOfStrings
): undefined | arrayOfArraysOfStringsOrUndefined {
	let diff: arrayOfArraysOfStringsOrUndefined = [];

	for (let i = 0; i < Math.max(a.length, b.length); i++) {
		diff[i] =
			a[i].length !== b[i].length ? undefined : shallowDifferences(a[i], b[i]);
	}

	return diff;
}
