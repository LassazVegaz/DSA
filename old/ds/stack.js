class StackEle {
	constructor(data) {
		this.data = data;
		this.previous = null;
	}
}

class Stack {
	top = null;

	push(data) {
		if (this.top === null) {
			this.top = new StackEle(data);
		} else {
			const stackEle = new StackEle(data);
			stackEle.previous = this.top;
			this.top = stackEle;
		}
	}

	pop() {
		if (this.top === null) throw new Error("Stack is empty");
		const temp = this.top;
		this.top = this.top.previous;
		return temp;
	}

	peek() {
		return this.top?.data;
	}

	isEmpty() {
		return this.top === null;
	}
}

const validate = (input) => {
	const stack = new Stack();

	for (const c of input.split("")) {
		switch (c) {
			case "]":
				if (stack.isEmpty() || stack.peek() !== "[") return false;
				else stack.pop();
				break;
			case "}":
				if (stack.isEmpty() || stack.peek() !== "{") return false;
				else stack.pop();
				break;
			case ")":
				if (stack.isEmpty() || stack.peek() !== "(") return false;
				else stack.pop();
				break;
			default:
				stack.push(c);
		}
	}

	return true;
};

run = (inputs) => {
	inputs.forEach((i) => {
		const isValid = validate(i);
		console.log(`${i} is ${isValid}`);
	});
};

const inputs = ["{[}", "[[]{([])}]", "{{}}[]([)"];
run(inputs);
