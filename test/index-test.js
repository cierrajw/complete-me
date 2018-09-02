import { assert } from 'chai';
import { expect } from 'chai';
import Trie from '../lib/Trie.js';
import Node from '../lib/Node.js';
const text = "/usr/share/dict/words";
import fs from 'fs';
// var chai = require('chai');
// var expect = chai.expect;

describe('trie class test', function() {

  it('it should have correct default properties', function() {
    let trie = new Trie();

    assert.deepEqual(trie, {
      totalWords: 0,
      rootNode: new Node(),
    });

   });


});

 describe('insert test', function() {

  it('it should be a function', function() {
    let trie = new Trie();

    assert.isFunction(trie.insert);

   });

  it('it should be an instance of a trie', function() {
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

  it.skip('should be able to add/insert a word', function(){
    let trie = new Trie(word);

    trie.insert(word);

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

  it('should create child nodes for each letter of the word', function() {
    let trie = new Trie();

    trie.insert('hello');
    // trie.insert('world')
    // trie.insert('howdy');

    trie.suggest('hello');


    console.log(JSON.stringify(trie.rootNode.keys, null, 4)) 



    // console.log(Object.keys(trie.root.children));//prints [h, w, h] for the first letter of each word

    expect(trie.rootNode.keys).to.deep.eq('h', 'e', 'l', 'l', 'o');

    // expect(trie.rootNode.keys).to.deep.eq('w', 'o', 'r', 'l', 'd');

    // expect(trie.rootNode.keys).to.deep.eq('h', 'o', 'w', 'd', 'y');

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

    trie.populate(dictionary);

    const count = trie.count();

    // assert.equal(count, 235886)
  });

});


 // expect(trie.rootNode).to.have.property('c');