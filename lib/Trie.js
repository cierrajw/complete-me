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

  count() {

    return this.totalWords;
  }

}

  suggest(input) {
    let completeMe = [...input];
    let currNode = this.root;
    let finalArr = [];

    while (completeMe.length) {
      if (currNode.children[completeMe[0]]) {
        currNode = currNode.children[completeMe.shift()];
      } else {
        return "Sorry couldn't find what you were looking for";
      }
    }

    if (Object.keys(currNode.children).length > 1) {
      let keysArr = Object.keys(currNode.children);
      let checkpoint = currNode;

      keysArr.forEach(key => {
        currNode = checkpoint;
        currNode = currNode.children[key];
        this.suggestRecursive(currNode, finalArr);
      });
    } else {
      if (!currNode.end) {
        let key = Object.keys(currNode.children);

        currNode = currNode.children[key];
        // console.log(JSON.stringify(currNode, null, 4))
        this.suggestRecursive(currNode, finalArr);
      } else {
        finalArr.push(currNode.word);
        currNode.end = !currNode.end;
        let key = Object.keys(currNode.children);

        if (key.length >= 1) {
          this.suggestRecursive(currNode, finalArr);
        }
        currNode.end = !currNode.end;
      }
    }

    return finalArr;

  }

    suggest(word = []){

    let currentNode = this.rootNode;

    var suggestions = [];

    while(word.length > 1){
      if(!currentNode.keys.has(word[0])){
        return false;
      }else{
        currentNode = currentNode.keys.has(word[0]);
        word = word.slice(1);
      }

    }

  populate(dictionary) {
    dictionary.forEach(word => {
      this.insert(word);
    });
  }
}
