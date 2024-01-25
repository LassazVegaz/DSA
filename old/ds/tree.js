class Company {
	name;
	subCompanies;

	constructor(value, children = []) {
		this.name = value;
		this.subCompanies = children;
	}
}

const root = new Company("A");
root.subCompanies = [new Company("B"), new Company("C"), new Company("D")];
root.subCompanies[1].subCompanies = [new Company("E")];
root.subCompanies[2].subCompanies = [new Company("F"), new Company("G")];

const findParent = (company) => {
	let stack = [];
	let parent = null;

	if (!root) {
		console.log("Company list is empty");
		return;
	}

	let current = root;

	while (true) {
		console.log(`Checking: ${current.name}`);

		if (current.name === company) {
			if (!parent) console.log(`${company} is the root company`);
			else console.log(`parent of ${company} is ${parent}`);
			return;
		}

		if (current.subCompanies && current.subCompanies.length > 0) {
			stack.push(...current.subCompanies);
		} else if (stack.length === 0) {
			console.log(`No company named ${company}`);
			return;
		}

		parent = current.name;
		current = stack.pop();
	}
};

console.log("Finding parent of A");
findParent("A");

console.log("Finding parent of F");
findParent("F");

console.log("Finding parent of C");
findParent("C");

console.log("Finding parent of Z");
findParent("Z");
