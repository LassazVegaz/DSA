// trie is for strings. it is a tree data structure but it stores characters in a node.
// also each node store a flag that says if it is an end of a word

class TrieNode {
	children = new Array(26);
	endOfWord = false;

	constructor() {
		for (let i = 0; i < this.children.length; i++) this.children[i] = null;
	}
}

class Trie {
	root = new TrieNode();
	charCodeOf_a = "a".charCodeAt(0);

	/**
	 * @param {string} word
	 */
	insert(word) {
		if (!word) return;

		word = word.toLowerCase();

		let current = this.root;

		for (let i = 0; i < word.length; i++) {
			const charCode = word.charCodeAt(i) - this.charCodeOf_a;

			if (current.children[charCode] === null)
				current.children[charCode] = new TrieNode();

			current = current.children[charCode];
		}

		current.endOfWord = true;
	}
	// W is the length of the word
	// time complexity: O( W )
	// space complexity: O( W ) * 24 = O( W )

	/**
	 * @param {string} word
	 */
	search(word) {
		if (!word) return;

		word = word.toLowerCase();

		let current = this.root;

		for (let i = 0; i < word.length; i++) {
			const charCode = word.charCodeAt(i) - this.charCodeOf_a;

			if (!current.children[charCode]) return false;

			current = current.children[charCode];
		}

		return current.endOfWord;
	}
	// W is the length of the word
	// time complexity: O( W )
	// space complexity: O( 1 )

	/**
	 * @param {string} word
	 */
	deleteWord(word) {
		if (!word) return;

		if (this.isNodeEmpty(this.root)) return;

		word = word.toLowerCase();
		this.deleteNode(word, this.root, 0);
	}

	/**
	 * @param {string} word
	 * @param {TrieNode} node
	 * @param {number} depth
	 */
	deleteNode(word, node, depth) {
		if (!node) return null;

		if (depth === word.length) {
			if (this.isNodeEmpty(node)) return null;

			if (node.endOfWord) node.endOfWord = false;

			return node;
		}

		const charIndex = word.charCodeAt(depth) - this.charCodeOf_a;
		node.children[charIndex] = this.deleteNode(word, node, depth + 1);

		// in the above step, we remove the current char if it is coming from end of the branch
		// there we safely return null if this node is empty
		if (this.isNodeEmpty(node)) return null;

		return node;
	}
	// W is the length of the word
	// time complexity: O( W ) * 2 = O( W )
	// space complexity: O( W )

	/**
	 * @param {TrieNode} node
	 */
	isNodeEmpty(node) {
		for (let i = 0; i < node.children.length; i++)
			if (node.children[i] !== null) return false;

		return true;
	}
}

const trie = new Trie();

console.log("FIRST-----");
trie.insert("Cat");
trie.insert("Dog");
trie.insert("Hiruni");

console.log("Is Cat in: " + trie.search("Cat")); // true
console.log("Is Dog in: " + trie.search("Dog")); // true
console.log("Is Hiruni in: " + trie.search("Hiruni")); // true
console.log("Is Lasindu in: " + trie.search("Lasindu")); // false

trie.deleteWord("Cat");
trie.deleteWord("Dog");
trie.insert("Lasindu");

console.log("SECCOND-----");

console.log("Is Cat in: " + trie.search("Cat")); // false
console.log("Is Dog in: " + trie.search("Dog")); // false
console.log("Is Hiruni in: " + trie.search("Hiruni")); // true
console.log("Is Lasindu in: " + trie.search("Lasindu")); // true
