import Node from "./Node";

export default class Trie {
  constructor() {
    this.totalWords = 0;
    this.rootNode = new Node();
  }

  insert(word, wordArray, currentNode = this.rootNode) {

    wordArray = [...word];

    if(!wordArray.length){
      currentNode.end = true;
      word = currentNode.children[wordArray[0]];
      console.log(word);
      return wordArray;
    }

    if(!currentNode.children[wordArray[0]]){
      currentNode.children[wordArray[0]] = new Node();
      return this.insert(wordArray.slice(1), wordArray, currentNode.children[wordArray[0]]);
    } else if(currentNode.children[wordArray[0]]) {
        return this.insert(wordArray.slice(1), wordArray, currentNode.children[wordArray[0]]);
    }

    if(currentNode.children[word]){
      return true;
    }else{
      return "Sorry can't find that word";
    }
    this.totalWords++;
  }

   suggest(word){

    let currentNode = this.rootNode;

    var suggestions = [];

    while(word.length > 1){
      if(!currentNode.keys.has(word[0])){
        return false;
      }else{
        currentNode = currentNode.keys.has(word[0]);
        word = word.slice(1);
        suggestions.push(word)
      }
    }
    return suggestons;
  }

  populate(dictionary) {
    dictionary.forEach(word => {
      this.insert(word);
    });
  }

    count() {
      return this.totalWords;
    }

}
