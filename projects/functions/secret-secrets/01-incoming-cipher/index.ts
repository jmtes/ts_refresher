// Write your createCipher function here! ✨
// You'll need to export it so the tests can run it.

type StringToString = (arg: string) => string;

export function createCipher(cipher: StringToString): StringToString {
	return (text: string) => {
		let str = "";

		for (const char of text) {
			str = str.concat(cipher(char));
		}

		return str;
	};
}
