// Write your shallowDifferences function here! ✨
// You'll need to export it so the tests can run it.

type arrayOfStrings = string[];
type arrayOfStringsOrUndefined = (string | undefined)[];

export function shallowDifferences(
	a: arrayOfStrings,
	b: arrayOfStrings
): arrayOfStringsOrUndefined | undefined {
	if (a.length !== b.length) return undefined;

	let diff: arrayOfStringsOrUndefined = [];

	for (let i = 0; i < a.length; i++) {
		diff[i] = a[i] === b[i] ? a[i] : undefined;
	}

	return diff;
}
