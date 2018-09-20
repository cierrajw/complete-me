export default class Node {
  constructor () {
    this.end = false;
    this.keys = new Map();
    this.children = {};
    this.word;
  }
}
