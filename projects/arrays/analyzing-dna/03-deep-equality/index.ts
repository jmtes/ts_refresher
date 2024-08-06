// Write your deepEquality function here! ✨
// You'll need to export it so the tests can run it.

type arrayOfArraysOfStrings = string[][];

export function deepEquality(
	a: arrayOfArraysOfStrings,
	b: arrayOfArraysOfStrings
): boolean {
	for (let i = 0; i < Math.max(a.length, b.length); i++) {
		for (let j = 0; j < Math.max(a[i].length, b[i].length); j++) {
			if (a[i][j] !== b[i][j]) return false;
		}
	}

	return true;
}
