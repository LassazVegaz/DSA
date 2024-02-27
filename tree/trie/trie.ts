export class TrieNode {
  readonly children: (TrieNode | undefined)[] = [];
  isEndOfWord = false;
}

export default class Trie {
  readonly root = new TrieNode();
}
