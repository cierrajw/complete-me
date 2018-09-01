export default class Node{

  constructor(letter){

    this.val = letter;
    this.children = {};
    this.end = false;
    this.keys = new Map();

  }

  setEnd(){
    this.end = true;
  }

  // isEnd(){
  //   return this.end;
  // }

}