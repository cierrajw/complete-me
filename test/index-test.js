import { assert } from 'chai';
import { expect } from 'chai';
import Trie from '../lib/Trie.js';
import Node from '../lib/Node.js';
var chai = require('chai');
// var expect = chai.expect;

describe('trie class test', function() {

  it('it should have correct default properties', function() {
    let trie = new Trie();

    assert.deepEqual(trie, {
      totalWords: 0,
      rootNode: new Node()
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
    let trie = new Trie(this.word, this.rootNode);

    trie.insert('hello');
    trie.insert('whatssaaaaap');
    trie.insert('megalomaniac');

   });

  it.skip('should be able to add/insert a word', function(){
    let trie = new Trie(word);

    trie.insert(word);

   });

  it.skip('should increase totalWords each time we instatiate a new word', function() {
    let trie = new Trie();

    expect(trie.totalWords).to.eq(0);
    trie.insert('poop');
    expect(trie.totalWords).to.eq(1);

   });

  it.skip('it should not increase word count if there is a duplicate', function() {
    let trie = new Trie();


   });

  it.skip('should create child nodes for each letter of the word', function() {
    let trie = new Trie();

    trie.insert('hello');
    trie.insert('world')
    trie.insert('howdy');

    trie.suggest();

    console.log(Object.keys(trie.root.children));//prints [h, w, h] for the first letter of each word

    expect(Object.keys(trie.root.children).to.deep.eq('h', 'e', 'l', 'l', 'o'))

   });


 });


  describe('suggest test', function() {

    it.skip('it should be a function', function() {
    let trie = new Trie();

    assert.isFunction(trie.suggest);

   });

  it.skip('should start with zero elements', function() {
    let trie = new Trie();

    expect(trie.totalWords).to.equal(0);

   });

  it.skip('should return an empty array if there are no matches', function() {
    let trie = new Trie();


   });

  it.skip('if there are matches it should return only every single match', function() {
    let trie = new Trie();
    //here insert a variety of words that should/shouldn't be in the returned array: hey, hello, help, and then dog because dog is very different


   });


 });



 // expect(trie.rootNode).to.have.property('c');