  import { assert } from 'chai';
import { expect } from 'chai';
import Trie from '../lib/Trie.js';
import Node from '../lib/Node.js';
const text = "/usr/share/dict/words";
const dictionary = fs.readFileSync(text).toString().trim().split('\n');
import fs from 'fs';



// describe('TRIE', () => {
//   let trie;

//   beforeEach(() => {
//     trie = new Trie();
//   });

//   it('should exist', () => {
//     expect(trie).to.exist;
//   });

//   it('should start with zero elements', () => {
//     expect(trie.totalWords).to.equal(0);
//   });

//   it('should set its default root to empty object', () => {
//     expect(trie.root.children).to.deep.eq({});
//   });

//   it('should increase totalWords each time we instantiate a new word', () => {
//     expect(trie.totalWords).to.eq(0);
//     trie.insert('poop');
//     expect(trie.totalWords).to.eq(1);
//   });

//   it ('should insert word correctly when calling insert', () => {
//     trie.insert ('hey');
//     trie.insert ('cool');
//     trie.insert ('popeye');
//     // console.log(JSON.stringify(trie, null, 4));
//     expect(Object.keys(trie.root.children)).to.deep.eq([ 'h', 'c', 'p' ]);
//   });

//   it ('should return an array of all possible suggestions', () => {
//     trie.insert ('hellen');
//     trie.insert ('hello');
//     trie.insert ('hellocopter');
//     trie.insert ('hey');
//     trie.insert ('hi');

//     expect (trie.suggest ('he')).to.deep.equal(['hellen', 'hello', 'hellocopter', 'hey']);
//     expect (trie.suggest ('he')).to.deep.equal(['hellen', 'hello', 'hellocopter', 'hey']);
//   });

//   it ('should populate when passing in the dictionary', () => {
//     expect (trie.count()).to.eq(0);
//     trie.populate(dictionary);
//     expect (trie.count()).to.eq(235886);

//     console.log(JSON.stringify(trie, null, 4)) 

//   });
// });




describe('trie class test', function() {

  // let trie;

  // beforeEach(() => {
  //   trie = new Trie();
  // });

  it('should have correct default properties', function() {
    let trie = new Trie();

    assert.deepEqual(trie, {
      totalWords: 0,
      rootNode: new Node(),
    });

   });

    it('should exist', () => {
      let trie = new Trie();
      expect(trie).to.exist;
    });

});

 describe('insert test', function() {

  it('should be a function', function() {
    let trie = new Trie();

    assert.isFunction(trie.insert);

   });

  it('should be an instance of a trie', function() {
    let trie = new Trie();

    assert.instanceOf(trie, Trie);

   });


  it('should start with zero elements', function() {
    let trie = new Trie();

    expect(trie.totalWords).to.equal(0);

   });

  it('should be able to take in a word', function(){
    let node = new Node();
    let trie = new Trie();

    trie.insert('hello', node);
    trie.insert('whatssaaaaap', node);
    trie.insert('megalomaniac', node);

    console.log(JSON.stringify(trie.rootNode, null, 4));

   });

  it('should insert words correctly', () => {
    let trie = new Trie();
    trie.insert ('what');
    trie.insert ('is');
    trie.insert ('up');

    
    console.log(JSON.stringify(trie, null, 4));
    //     expect(Object.keys(trie.root.children)).to.deep.eq([ 'h', 'c', 'p' ]);

    expect(Object.keys(trie.rootNode.keys).to.deep.eq([ 'w', 'i', 'u' ]);

   });

  it('should increase totalWords each time we add a new word', function() {
    let trie = new Trie();

    expect(trie.totalWords).to.eq(0);

    trie.insert('howdy');

    trie.insert('horse');

    expect(trie.totalWords).to.eq(2);

    console.log(JSON.stringify(trie.rootNode.keys, null, 4)) 

   });

  it.skip('it should not increase word count if there is a duplicate', function() {
    let trie = new Trie();

    expect(trie.totalWords).to.eq(0);

    trie.insert('howdy');

    trie.insert('howdy');

    // expect(trie.totalWords).to.eq(1);

    if(!trie.insert(this.word)){
      expect(trie.totalWords).to.eq(2);
    }else if(trie.insert(this.word)){
      expect(trie.totalWords).to.eq(1);
    }

   });

 });


  describe('suggest test', function() {

    it('it should be a function', function() {
    let trie = new Trie();

    assert.isFunction(trie.suggest);

   });

  it.skip('should return an empty array if there are no matches', function() {
    let trie = new Trie();




   });

  it.skip('if there are matches it should return only every single match', function() {
    let trie = new Trie();
    //here insert a variety of words that should/shouldn't be in the returned array: hey, hello, help, and then dog because dog is very different


   });

 });

  describe('populate test', function() {


  it('should populate the trie with the default dictionary', () => {
    let trie = new Trie();
    const path = '/usr/share/dict/words'
    const dictionary = fs.readFileSync(path).toString().trim().split('\n');

    expect (trie.count()).to.eq(0);

    trie.populate(dictionary);

    const count = trie.count();

    expect (trie.count()).to.eq(235886);

  });

});


//  // expect(trie.rootNode).to.have.property('c');