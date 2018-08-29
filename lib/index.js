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
      //if the node doesn't have the first letter of the word we passed in (example letter 'b'), 
      //then create a node with the letter b:
    }else if (!currentNode.keys.has(word[0])){

      //name of "folder" is word[0], contents of "folder" is new Node
      //sets the first letter of the word you entered to a new node
      currentNode.keys.set(word[0], new Node());

      //this recursively takes each letter after the first letter and passes it to the add function again
      //here (recurively), instead of being at the root node, we're now at the letter 'b'  and so on and so on

      //gets the first letter of the word you entered
      return this.add(word.substr[1], currentNode.keys.get(word[0]));
    }else{
      return this.add(input.substr(1), currentNode.keys.get(word[0]));
    }
    //f the node has the last letter of the word we passed in (word) and it is the end (isEnd()) then return true
    if(currentNode.keys.has(word) && currentNode.keys.get(word).isEnd()){
      return true;

    //else return false
    }else{
      return false;
    }

    // return;

    // splitWord = word.toLowerCase().split('');


  }

  isWord(word){

    let currentNode = this.rootNode;

    while(word.length > 1){
      //if the root node does not have the first letter we entered (so for instance there is no letter 't' anywhere), then
      //return false

      if(!currentNode.keys.has(word[0])){
        return false;
      }else{
        //if the node does have the first letter we entered, then there is a word that starts with that letter, and we have to
        //set the current node equal to the first letter we entered as it will
        //now be our root node

        currentNode = currentNode.keys.has(word[0]);

        //and also add the rest of the letters of the word
        word = word.substr(1);
      }


    }

  }

  count(){

  }

  suggest(){

  }



}