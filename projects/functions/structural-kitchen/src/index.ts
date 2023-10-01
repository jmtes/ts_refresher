// Write your createKitchen function here! ✨
// You'll need to export it so the tests can run it.

type Ingredients = {
	breads: number;
	fruits: number;
	sauces: number;
	vegetables: number;
};

type KitchenState = {
	dirt: number;
	stock: Ingredients;
};

export type Cleaner = (dirt: number, time?: number) => number;

export type Supplier = (expense: number) => Ingredients;

type PreparationFailure = { succeeded: false };

type PreparationSuccess = {
	succeeded: true;
	newStock: Ingredients;
};

type PreparationResult = PreparationFailure | PreparationSuccess;

type IngredientsToPreparationResult = (
	ingredients: Ingredients
) => PreparationResult;

type Kitchen = {
	announce: () => string;
	clean: (time?: number) => void;
	purchase: (expense: number) => boolean;
	prepare: (recipe: IngredientsToPreparationResult) => boolean;
};

export function createKitchen(
	budget: number,
	cleaner: Cleaner,
	supplier: Supplier
): Kitchen {
	let kitchenBudget = budget;
	let kitchenState: KitchenState = {
		dirt: 0,
		stock: {
			breads: 0,
			fruits: 0,
			sauces: 0,
			vegetables: 0,
		},
	};

	const announce = () => {
		const { dirt, stock } = kitchenState;
		const { breads, fruits, sauces, vegetables } = stock;

		return `I have ${dirt} much dirt, ${kitchenBudget} budget, ${breads} bread(s), ${fruits} fruit(s), ${sauces} sauce(s), and ${vegetables} vegetable(s).`;
	};

	const clean: (time?: number) => void = (time) => {
		kitchenState = { ...kitchenState, dirt: cleaner(kitchenState.dirt, time) };
	};

	const purchase: (expense: number) => boolean = (expense) => {
		if (expense <= kitchenBudget) {
			kitchenBudget -= expense;
			const newIngredients = supplier(expense);
			const oldIngredients = kitchenState.stock;

			kitchenState = {
				...kitchenState,
				stock: {
					breads: oldIngredients.breads + newIngredients.breads,
					fruits: oldIngredients.fruits + newIngredients.fruits,
					sauces: oldIngredients.sauces + newIngredients.sauces,
					vegetables: oldIngredients.vegetables + newIngredients.vegetables,
				},
			};

			return true;
		}

		return false;
	};

	const prepare: (recipe: IngredientsToPreparationResult) => boolean = (
		recipe
	) => {
		if (kitchenState.dirt < 100) {
			kitchenState = { ...kitchenState, dirt: kitchenState.dirt + 1 };
			const result = recipe(kitchenState.stock);

			if (result.succeeded)
				kitchenState = { ...kitchenState, stock: result.newStock };

			return result.succeeded;
		}

		return false;
	};

	return {
		announce: announce,
		clean: clean,
		purchase: purchase,
		prepare: prepare,
	};
}
