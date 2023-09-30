// Write your createAdvancedCipher function here! ✨
// You'll need to export it so the tests can run it.

type StringToString = (arg: string) => string;

function isVowel(char: string): boolean {
	const vowelRegex = new RegExp("[aeiou]", "i");
	return vowelRegex.test(char);
}

function isConsonant(char: string): boolean {
	const consonantRegex = new RegExp("[bcdfghjklmnpqrstvwxyz]", "i");
	return consonantRegex.test(char);
}

export function createAdvancedCipher(
	onVowel: StringToString,
	onConsonant: StringToString,
	onPunctuation: StringToString
): StringToString {
	return (text: string) => {
		let str = "";

		for (const char of text) {
			const decodedChar = isVowel(char)
				? onVowel(char)
				: isConsonant(char)
				? onConsonant(char)
				: onPunctuation(char);
			str += decodedChar;
		}

		return str;
	};
}
