export default class Node{

  constructor(letter){

    this.val = letter;
    this.children = {};
    this.end = false;
    this.keys = new Map();
    //if you get to your final node then this.ending will be true


  }

  setEnd(){
    this.end = true;
  }

  isEnd(){
    return this.end;
  }

}