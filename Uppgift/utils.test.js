const { sanitizeInput, average, getUserName, sortByDate } = require("./utils");

describe("sanitizeInput", () => {
	test("ta bort HTML och trim: <div> Johannes </div>", () => {
		expect(sanitizeInput("<div> Johannes         </div>")).toBe("Johannes");
	});
});

describe("average", () => {
	test("returnerar null för tom array", () => {
		expect(average([])).toBeNull();
	});

	test("returnerar null när input inte är en array", () => {
		expect(average(null)).toBeNull();
		expect(average(undefined)).toBeNull();
		expect(average("hej")).toBeNull();
		expect(average({})).toBeNull();
	});

	test("beräknar medelvärde för positiva tal", () => {
		expect(average([2, 4, 6])).toBe(4);
	});

	test("beräknar medelvärde för negativa tal", () => {
		expect(average([-2, -4, -6])).toBe(-4);
	});

	test("hanterar flyttal (precision)", () => {
		expect(average([0.1, 0.2, 0.3])).toBeCloseTo(0.2, 10);
	});

});

describe("getUserName", () => {
	test("Okänd om inte User", () => {
		expect(getUserName()).toBe("Okänd")
	})
})

test("Username inget innehåll", () => {
	const user = { name: ""}

	expect(getUserName(user)).toBe("Okänd")
})

describe("sortByDate", () => {
	test("Returnerar en tom array", () => {
		const items = []
		expect(sortByDate(items)).toEqual([])
	})

	test("Om rangordningen på datum är okej", () => {
		const items = [
			{ date: "2024-01-01" },
			{ date: "2025-02-02" },
			{ date: "2026-03-03" }
		]
		const result = sortByDate(items)
		expect(result).toEqual([
			{ date: "2024-01-01" },
			{ date: "2025-02-02" },
			{ date: "2026-03-03" }
		])
	})
})





