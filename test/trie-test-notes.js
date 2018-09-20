 // import { assert } from 'chai';
 // import Trie from '../lib/Trie';

 // describe('assert test', function() {


 //  //testing:

 //  //for the node test:

 //  //just test that it exists
 //  //test that it's an instance of a node
 //  //has correct default properties
 //  //write a test to pass the default property values in?
 //  //it takes in a letter (if you did it like that)?

 //  //for the Trie test:

 //  //Insert:

 //  //just test that it exists
 //  //test that it's an instance of a trie
 //  //has correct default properties\
 //  //write a test to pass the default property values in?
 //  //should increment word count
 //  //test that it doesn't increment the wordCount if you insert a duplicate
 //  //should create child nodes for each letter of the word (should have node of d that has child of o that has child of g for example for the word dog)

 //  //Suggest:

 //  //it should return an empty array if there are no matches
 //  //if there are matches it should return every single match and nothing else
 //  //insert a variety of words that should/shouldn't be in the returned array: hey, hello, help, and then dog because dog is very different
 //  //


 //  it('it should be a function', function() {
 //    let trie = new Trie();

 //    assert.isFunction(trie.insert);

 //   });

 //  it('it should be an instance of a trie', function() {
 //    let trie = new Trie();

 //    assert.isFunction(trie.insert);

 //   });

 //  it('it should have correct default properties', function() {
 //    let trie = new Trie();

 //    assert.deepEqual()
 //   });

 //  it('should start with zero elements', function() {
 //    let trie = new Trie();

 //    expect(trie.totalWords).to.equal(0);

 //   });

 //  it('should set its default root to empty object', function() {
 //    let trie = new Trie();

 //     assert.isFunction(trie.add);

 //   });

 //  it('should be able to take in a word', function(){
 //    let trie = new Trie(word);

 //   });

 //  it('should be able to add/insert a word', function(){
 //    let trie = new Trie(word);

 //    trie.insert(word);

 //   });

 //  it('should create child nodes for each letter of the word', function() {
 //    let trie = new Trie();

 //    trie.insert('hello');
 //    trie.insert('world')
 //    trie.insert('howdy');

 //    trie.suggest();

 //    console.log(Object.keys(trie.root.children));//prints [h, w, h] for the first letter of each word

 //    expect(Object.keys(trie.root.children).to.deep.eq('h', 'e', 'l', 'l', 'o'))

 //   });

 //  it('should increase totalWords each time we instatiate a new word', function() {
 //    let trie = new Trie();

 //    expect(trie.totalWords).to.eq(0);
 //    trie.insert('poop');
 //    expect(trie.totalWords).to.eq(1);

 //   });

 //  it('it should not increase word count if there is a duplicate', function() {
 //    let trie = new Trie();


 //   });


 // });

 // describe('insert recursive test', function() {

 //  it('it should be a function', function() {
 //    let trie = new Trie();

 //    assert.isFunction(trie.insertRecursive);

 //   });

 //  it('should start with zero elements', function() {
 //    let trie = new Trie();

 //    expect(trie.totalWords).to.equal(0);

 //   });

 // });

 //  describe('suggest test', function() {

 //    //Suggest:

 //  //it should return an empty array if there are no matches
 //  //if there are matches it should return every single match and nothing else
 //  //insert a variety of words that should/shouldn't be in the returned array: hey, hello, help, and then dog because dog is very different
 //  //

 //    it('it should be a function', function() {
 //    let trie = new Trie();

 //    assert.isFunction(trie.suggest);

 //   });

 //  it('should start with zero elements', function() {
 //    let trie = new Trie();

 //    expect(trie.totalWords).to.equal(0);

 //   });

 //  it('should return an empty array if there are no matches', function() {
 //    let trie = new Trie();


 //   });

 //  it('if there are matches it should return only every single match', function() {
 //    let trie = new Trie();
 //      //insert a variety of words that should/shouldn't be in the returned array: hey, hello, help, and then dog because dog is very different


 //   });



 // });



 // // expect(trie.rootNode).to.have.property('c');
