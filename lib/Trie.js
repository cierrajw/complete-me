import Node from "./Node";
import fs from 'fs';

class Trie{
  constructor(){
    this.rootNode = new Node();
    this.totalWords = 0;
  }

  insert(word = [], currentNode = this.rootNode){

    if(!word.length){
      currentNode.isEnd();
    }else if (!currentNode.keys.has(word[0])){
      currentNode.keys.set(word[0], new Node());
     
      return this.insert(word.slice(1), currentNode.keys.get(word[0]));

    }else{
      return this.insert(word.slice(1), currentNode.keys.get(word[0]));
    }
    if(currentNode.keys.has(word) && currentNode.keys.get(word).isEnd()){
      this.totalWords++;
      return true;
    }else{
      this.totalWords++;
      return "Sorry can't find that word";
    }

  }

  count(){

    return this.totalWords;

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

    if(currentNode.keys.has(word) && currentNode.keys.get(word).isEnd()){
      suggestions.push(word);
    }

    return suggestions;

  }

  populate(dictionary){
    dictionary.forEach(word => this.insert(word));
  }



}

module.exports = Trie;
