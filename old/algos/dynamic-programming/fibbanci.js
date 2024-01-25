/**
 * @param {number} n
 * @param {Map<number, number>} mem
 */
function fibbanaci(n, mem) {
	mem = mem ?? new Map();

	if (mem.has(n)) return mem.get(n);
	else if (n === 1) return 1;
	else if (n === 2) return 1;
	else {
		const res = fibbanaci(n - 1, mem) + fibbanaci(n - 2, mem);
		mem.set(n, res);
		return res;
	}
}

console.log(fibbanaci(1));
console.log(fibbanaci(2));
console.log(fibbanaci(3));
console.log(fibbanaci(4));
console.log(fibbanaci(5));
console.log(fibbanaci(6));
console.log(fibbanaci(7));
console.log(fibbanaci(50));
