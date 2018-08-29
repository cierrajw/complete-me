 import { assert } from 'chai';
 import Trie from '../lib/Trie';
    
 describe('test', function() {
   it('should return true', function() {
     assert.equal(true, true);
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