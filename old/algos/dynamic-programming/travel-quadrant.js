// you are given a M x N reactangle/sqaure
// you have to find the ways you can travel from top left corner to right bottom corner
// you can only take a right or a down

/**
 * Ex:
 * 1 1 - 1
 * 1 2 - 1
 *
 * 2 1 - 1
 * 2 2 - 2
 *
 * 3 2 - 3
 * 2 3 - 3
 * 3 3 - 6
 *
 * 4 2 - 4
 * 2 4 - 4
 * 4 3 - 10
 * 3 4 - 10
 * 4 4 - 20
 */

/**
 * @param {number} m
 * @param {number} n
 * @param {Map<number, Map<number, number>>} mem
 */
function travel(m, n, mem = new Map()) {
	if (mem.has(m) && mem.get(m).has(n)) return mem.get(m).get(n);
	else if (mem.has(n) && mem.get(n).has(m)) return mem.get(n).get(m);
	else if (m === 2) return n;
	else if (n === 2) return m;
	else if (m === 1 || n === 1) return 1;
	else if (m === 0 || n === 0) return 0;
	else {
		const res = travel(m - 1, n, mem) + travel(m, n - 1, mem);
		if (!mem.has(m)) mem.set(m, new Map());
		mem.get(m).set(n, res);
		return res;
	}
}

console.log(travel(4, 2)); // 4
console.log(travel(3, 3)); // 6
console.log(travel(4, 4)); // 20
console.log(travel(10, 4)); // 20
console.log(travel(20, 15)); // 818809200
