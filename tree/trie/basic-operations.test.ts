import Trie from "./trie";
import * as basicOps from "./basic-operations";

const main = () => {
  const t = new Trie();
  const words = ["hello", "world", "wow", "happy"];
  const removeWord = "happy";

  console.log(`Inserting [ ${words} ] into the Trie`);
  words.forEach((w) => basicOps.insertWord(t, w));

  console.log(`Removing word ${removeWord}`);
  basicOps.removeWord(t, removeWord);

  console.log("\nSearch words...");
  console.log(`hello = ${basicOps.searchWord(t, "hello")}`);
  console.log(`world = ${basicOps.searchWord(t, "world")}`);
  console.log(`helloworld = ${basicOps.searchWord(t, "helloworld")}`);
  console.log(`wow = ${basicOps.searchWord(t, "wow")}`);
  console.log(`happy = ${basicOps.searchWord(t, "happy")}`);
  console.log(`abcd = ${basicOps.searchWord(t, "abcd")}`);
};

main();
