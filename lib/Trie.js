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

    //

    let completeMe = [...completeMe];

    let checkpoint;

    let array = finalArray;

    currentNode = this.rootNode;

    while(completeMe.length){

      if(currentNode.children[completeMe[0]]){
        currentNode = currentNode.children[completeMe.shift())];
      }else{
        return "Sorry no word";
      }

      this.suggestRecursive(currentNode, finalArray);

      return fnalArray;

    }

    suggestRecursive(currentNode, finalArray){

      if(Object.keys(currentNode.children).length > 1){
        let keysArr = Object.keys(currentNode.children);
        let checkpoint = currentNode;
        this.suggestRecursive(currentNode, finalArray)
      }else{

      }

    }



}





