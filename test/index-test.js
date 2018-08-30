 import { assert } from 'chai';
 import Trie from '../lib/Trie';
    
 describe('test', function() {



  it('should start with zero elements', function() {
    let trie = new Trie();

    expect(trie.totalWords).to.equal(0);

   });

  it('should set its default root to empty object', function() {
    let trie = new Trie();

     assert.isFunction(trie.add);

   });

  it('should increase totalWords each time we instatiate a new word', function() {
    let trie = new Trie();

    expect(trie.totalWords).to.eq(0);
    trie.insert('poop');
    expect(trie.totalWords).to.eq(1);

   });

  it('shoudl insert word correctly when calling insert', function() {
    let trie = new Trie();

    trie.insert('hello');
    trie.insert('world')
    trie.insert('howdy');

    trie.suggest();

    console.log(Object.keys(trie.root.children));//prints [h, w, h] for the first letter of each word

    expect(Object.keys(trie.root.children).to.deep.eq('h', 'e', 'l', 'l', 'o'))

   });













   it('insert should be a function', function() {
    let trie = new Trie();

     assert.isFunction(trie.add);

   });

   it('should be able to take in a word', function(){
    let trie = new Trie(word);

   });

   it('should be able to add/insert a word', function(){
    let trie = new Trie(word);

    trie.insert(word);

   });

   it('should be able to keep count of added words', function(){
    let trie = new Trie(word);

    trie.insert(word);

   });
 });




 expect(trie.rootNode).to.have.property('c');