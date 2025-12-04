
/**
 * Rensar en sträng från HTML-taggar och tar bort mellanslag i början och slutet.
 *
 * @param {string} str - Text som kan innehålla HTML-taggar eller extra mellanslag.
 * @returns {string} En sanerad sträng. Returnerar en tom sträng om argumentet inte är en sträng.
 *
 * @example
 * sanitizeInput("  <b>Hej</b>  "); // "Hej"
 * sanitizeInput("<script>alert(1)</script>John"); // "John"
 * sanitizeInput(123); // ""
 */
function sanitizeInput(str) {
	if (typeof str !== "string") return "";
	return str.replace(/<[^>]*>/g, "").trim();
}


/**
 * Beräknar medelvärdet av en array med tal.
 *
 * @param {number[]} numbers - En array med tal.
 * @returns {number|null} Medelvärdet av talen. Returnerar null för tom array
 * eller om argumentet inte är en array. Returnerar NaN om arrayen innehåller
 * icke-numeriska värden.
 *
 * @example
 * average([2, 4, 6]); // 4
 * average([]); // null
 * average("hej"); // null
 * average([1, "a", 3]); // NaN
 */
function average(numbers) {
	if (!Array.isArray(numbers) || numbers.length === 0) return null;

	let sum = 0;
	for (const n of numbers) {
		sum += n;
	}
	return sum / numbers.length;
}

/**
 * Hämtar ett användarnamn från ett user-objekt.
 * Returnerar "Okänd" om namn saknas, är tomt eller inte är en sträng.
 *
 * @param {Object} user - Ett objekt som förväntas innehålla egenskapen name.
 * @param {string} [user.name] - Namnet på användaren.
 * @returns {string} Ett trimmat namn eller "Okänd" om ogiltigt.
 *
 * @example
 * getUserName({ name: " Anna " }); // "Anna"
 * getUserName({ name: "" }); // "Okänd"
 * getUserName({ name: 123 }); // "Okänd"
 * getUserName(null); // "Okänd"
 */
function getUserName(user) {
	if (!user) return "Okänd";
	if (typeof user.name === "string" && user.name.trim() !== "") {
		return user.name.trim();
	}
	return "Okänd";
}

/**
 * Returnerar en ny array sorterad efter egenskapen `date` i stigande ordning.
 * Objekt utan `date` placeras sist. Originalarrayen muteras inte.
 *
 * @param {Object[]} items - En array av objekt som kan innehålla egenskapen date.
 * @param {string} [items[].date] - Ett datum i ett format som kan tolkas av new Date().
 * @returns {Object[]} En ny sorterad array. Returnerar tom array om argumentet inte är en array.
 *
 * @example
 * sortByDate([
 *   { name: "A", date: "2023-01-01" },
 *   { name: "B", date: "2022-05-10" }
 * ]);
 * // [
 * //   { name: "B", date: "2022-05-10" },
 * //   { name: "A", date: "2023-01-01" }
 * // ]
 *
 * sortByDate([{ name: "No date" }]);
 * // [{ name: "No date" }]
 */
function sortByDate(items) {
	if (!Array.isArray(items)) return [];

	return [...items].sort((a, b) => {
		if (!a.date) return 1;
		if (!b.date) return -1;
		return new Date(a.date) - new Date(b.date);
	});
}

module.exports = {
	sanitizeInput,
	average,
	getUserName,
	sortByDate
};
