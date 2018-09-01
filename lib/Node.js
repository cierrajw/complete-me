class Node{

  constructor(){

    this.end = false;
    this.keys = new Map();

  }

  setEnd(){
    this.end = true;
  }

  isEnd(){
    return this.end;
  }

}

module.exports = Node;
