// Write your createCodeCracker function here! ✨
// You'll need to export it so the tests can run it.

type Settings = {
	attempts: number;
	makeGuess: (text: string, attempt: number) => string;
	validateGuess: (guess: string) => boolean;
};

export function createCodeCracker({
	attempts,
	makeGuess,
	validateGuess,
}: Settings): (text: string) => string | undefined {
	return (text) => {
		for (let i = 0; i < attempts; i++) {
			const guess = makeGuess(text, i);

			if (validateGuess(guess)) return guess;
		}
	};
}
