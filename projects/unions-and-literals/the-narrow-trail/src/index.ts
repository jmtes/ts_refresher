function roll() {
	return Math.floor(Math.random() * 6) + 1;
}

export function runCommands() {
	// Declare your variables and runtime logic here! ✨
	let numberRolled = 1 | 2 | 3 | 4 | 5 | 6;
	let availableResource: "food" | "water" | undefined;
	let day = 1;
	let food = 5;
	let water = 5;

	availableResource = undefined;

	while (day <= 7) {
		numberRolled = roll();

		switch (numberRolled) {
			case 1:
				availableResource = "food";
				break;
			case 2:
				availableResource = "water";
				break;
			default:
				if (availableResource === "food") {
					food += numberRolled;
					availableResource = undefined;
					break;
				} else if (availableResource === "water") {
					water += numberRolled;
					availableResource = undefined;
					break;
				} else if (numberRolled % 2 === 0) {
					availableResource = "food";
					break;
				} else {
					availableResource = "water";
					break;
				}
		}

		food -= 1;
		water -= 1;

		if (food === 0 || water === 0) {
			return false;
		}

		day += 1;
	}

	return true;
}
