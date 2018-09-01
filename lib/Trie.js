class Trie{
  constructor(){
    this.rootNode = null;
    this.previousNode = null;
    this.totalWords = 0;
  }

  insert(word, currentNode = this.rootNode){

    this.rootNode = new Node();

    if(word.length === 0){
      currentNode.setEnd();
    }else if (!currentNode.keys.has(word[0])){
      currentNode.keys.set(word[0], new Node());
     
      return this.insert(word.substr[1], currentNode.keys.get(word[0]));

    }else{
      return this.insert(word.substr(1), currentNode.keys.get(word[0]));
    }
    if(currentNode.keys.has(word) && currentNode.keys.get(word).isEnd()){
      return true;
    }else{
      return false;
    }

  }

  count(){

    this.totalWords ++;

  }

  suggest(word){

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

  populate(){

  }



}


// class Trie{

// constructor(){
//   this.totalWords = 0;
//   this.rootNode = null;
// }

// insert(word){
//   let currentNode = this.rootNode;
//   let wordArray = word.split('');

//   this.insertRecursive(wordArray, currentNode, word);

//   this.totalWords ++;
//   }

// insertRecursive(wordArray, currentNode, word){

//   if(!wordArray.length){
//     currentNode.end = true;
//     currentNode = word;
//     return;
//   }

//   if(currentNode.children[wordArray[0]]){
//     currentNode = currentNode.children[wordArray.shift()];
//   }else{

//     currentNode.children[wordArray[0]] = new Node();;
//     currentNode = currentNode.chldren[lettersArrray.shift()];
//   }

//     return this.insertRecursive(wordArray, currentNode, word)

//   }

//   suggest(input){


//     let completeMe = [...completeMe];

//     let currentNode = this.rootNode;

//     let finalArray = [];

//     currentNode = this.rootNode;

//     while(completeMe.length){

//       if(currentNode.children[completeMe[0]]){
//         currentNode = currentNode.children[completeMe.shift()];
//       }else{
//         return "Sorry no word";
//       }

//       this.suggestRecursive(currentNode, finalArray);

//       return finalArray;

//     }

// }


//   suggestRecursive(currNode, finalArr, word) {
//     //base case

//     if (Object.keys(currNode.children).length > 1) {
//       let keysArr = Object.keys(currNode.children);
//       let checkpoint = currNode;

//       keysArr.forEach(key => {
//         currNode = checkpoint;
//         currNode = currNode.children[key];
//         this.suggestRecursive(currNode, finalArr);
//       });
//     } else {
//       if (!currNode.end) {
//         let key = Object.keys(currNode.children);

//         currNode = currNode.children[key];
//         // console.log(JSON.stringify(currNode, null, 4))
//         this.suggestRecursive(currNode, finalArr);
//       } else {
//         finalArr.push(currNode.word);
//         currNode.end = !currNode.end;
//         let key = Object.keys(currNode.children);

//         if (key.length >= 1) {
//           this.suggestRecursive(currNode, finalArr);
//         }
//         currNode.end = !currNode.end;
//       }
//     }
//   }


// populate(dictionary){

      
// }

// }

module.exports = Trie;




