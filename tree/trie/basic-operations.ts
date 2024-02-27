import Trie, { TrieNode } from "./trie";

const A_LOWER_IDX = "a".charCodeAt(0);

export const insertWord = (t: Trie, word: string) => {
  let n = t.root;

  for (let i = 0; i < word.length; i++) {
    const letterIdx = word.charCodeAt(i) - A_LOWER_IDX;
    n.children[letterIdx] ??= new TrieNode();
    n = n.children[letterIdx]!;
  }

  n.isEndOfWord = true;
};

const _removeWord = (
  w: string,
  n: TrieNode,
  depth: number
): TrieNode | undefined => {
  if (depth === w.length) {
    n.isEndOfWord = false;

    for (let i = 0; i < n.children.length; i++) {
      if (typeof n.children[i] !== "undefined") return n;
    }

    return undefined;
  }

  const letterIdx = w.charCodeAt(depth) - A_LOWER_IDX;

  if (typeof n.children[letterIdx] === "undefined") {
    for (let i = 0; i < n.children.length; i++) {
      if (typeof n.children[i] !== "undefined") return n;
    }
    return undefined;
  }

  n.children[letterIdx] = _removeWord(w, n.children[letterIdx]!, depth + 1);

  for (let i = 0; i < n.children.length; i++) {
    if (typeof n.children[i] !== "undefined") return n;
  }

  return undefined;
};

export const removeWord = (t: Trie, word: string) => {
  _removeWord(word, t.root, 0);
};

export const searchWord = (t: Trie, word: string): boolean => {
  let n = t.root;

  for (let i = 0; i < word.length; i++) {
    const letterIdx = word.charCodeAt(i) - A_LOWER_IDX;
    if (typeof n.children[letterIdx] === "undefined") return false;
    n = n.children[letterIdx]!;
  }

  return n.isEndOfWord;
};
