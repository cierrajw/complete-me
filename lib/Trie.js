import Node from "./Node";

class Trie{
  constructor(){
    this.rootNode = new Node();
    this.totalWords = 0;
  }

  insert(word = [], currentNode = this.rootNode){

    if(!word.length){
      currentNode.setEnd();
    }else if (!currentNode.keys.has(word[0])){
      currentNode.keys.set(word[0], new Node());
     
      return this.insert(word.slice(1), currentNode.keys.get(word[0]));

    }else{
      return this.insert(word.slice(1), currentNode.keys.get(word[0]));
    }
    if(currentNode.keys.has(word) && currentNode.keys.get(word).isEnd()){
      return true;
    }else{
      return false;
    }

    count();

  }

  count(){

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
        word = word.substr(1);
      }

    }

    if(currentNode.keys.has(word) && currentNode.keys.get(word).isEnd()){
      suggestions.push(word);
    }

  }

  populate(){

  }



}

module.exports = Trie;


