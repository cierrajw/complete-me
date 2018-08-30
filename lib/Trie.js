class Trie{

constructor(){
  this.totalWords = 0;
  this.rootNode = null;
}

insert(word){
  let currentNode = this.rootNode;
  let lettersArray = [...word];

  this.insertRecursive(lettersArray, currentNode, word);

  this.totalWords ++;
  }

insertRecursive(lettersArray, currentNode){

  if(!lettersArray.length){
    currentNode.end = true;
    currentNode = word;
    return;
  }

  if(currentNode.children[lettersArray[0]]){
    currentNode = currentNode.children[lettersArray.shift())];
  }else{
    currentNode.children[lettersArray[0]] = new Node();;
    currentNode = currentNode.chldren[lettersArrray.shift()];
  }

    return this.insertRecursive(lettersArray, currentNode, word)

  }

  suggest(input){

    let completeMe = [...completeMe];

    let checkpoint;

    currentNode = this.rootNode;

    while(completeMe.length){

      if(currentNode.children[completeMe[0]]){
        currentNode = currentNode.children[completeMe.shift())];
      }else{
        return "Sorry no word";
      }

    }

    if(Object.keys(trie.root.children).length > 1){
      checkpoint = currentNode;
    }else{

      let key = Object.keys[currNode.children]
      currentNode = currentNode.children[0];
      currentNode = currentNode.chldren[key];

      console.log(JSON.stringify(currentNode, null, 4))
    }

    Object.keys(trie.root.children);

  }

}





