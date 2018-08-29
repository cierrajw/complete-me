
insert(word){
  this.wordCount ++;

  led wordArray = word.split('');

  if(!this.root){
    this.root = new Node()
  }

  let currentNode = this.root;

  wordArray.forEach(arrayletter){
    if(!currentNode.children[arrayletter]{
      currentNOde.children[arrayletter] = new Node(arrayLetter)
      currentNode = currentNode.children[arrayletter]
    }else if(currentNode.children[arrayletter]){
      currentNode = currentNode.children[arrayletter]

    }
    });

      currentNode.wordEnding = newWord;


  }

}

suggest(word){
  let wordArray = word.split('');

  let currentNode = this.root;

  wordArray.forEach(){
    if(!currentNode.children[arrayletter])
  }
}