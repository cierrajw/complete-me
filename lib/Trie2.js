COMPLETEME INDEX.JS WITH NOTES (using map object)

 class Trie{
  constructor(){
    this.rootNode = null;
    // this.currentNode = null;
    this.previousNode = null;
    this.totalWords = 0;
  }

  add(word, currentNode = this.rootNode){

    this.rootNode = new Node();

    if(word.length === 0){
      currentNode.setEnd();

    }else if (!currentNode.keys.has(word[0])){

      currentNode.keys.set(word[0], new Node());

      return this.add(word.substr[1], currentNode.keys.get(word[0]));
    }else{
      return this.add(input.substr(1), currentNode.keys.get(word[0]));
    }

    if(currentNode.keys.has(word) && currentNode.keys.get(word).isEnd()){
      return true;

    }else{
      return false;
    }

  }

  isWord(word){

    let currentNode = this.rootNode;

    while(word.length > 1){

      if(!currentNode.keys.has(word[0])){
        return false;
      }else{

        currentNode = currentNode.keys.has(word[0]);

        word = word.substr(1);
      }

    }

  }

  suggest(input){


  }

}