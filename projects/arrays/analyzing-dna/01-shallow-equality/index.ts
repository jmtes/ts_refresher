// Write your shallowEquality function here! ✨
// You'll need to export it so the tests can run it.

type arrayOfStrings = string[];

export function shallowEquality(a: arrayOfStrings, b: arrayOfStrings): boolean {
	for (let i = 0; i < Math.max(a.length, b.length); i++) {
		if (a[i] !== b[i]) return false;
	}
	return true;
}
