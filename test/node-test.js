import { expect } from 'chai';
import { assert } from 'chai';
import Node from '../lib/Node';

describe('NODE', () => {
  let node;

  beforeEach(() => {
    node = new Node();
  });

  describe('node class test', function() {

    it('should exist', () => {
      expect(node).to.exist;
    });

    it('it should have correct default properties', function() {

      let node = new Node();

      assert.deepEqual(node, {
        end: false,
        children: {},
        keys: new Map()
      });

     });

     it('should default end to false', () => {
       expect(node.end).to.equal(false);
     });

     it('should default children to an empty object', () => {
       expect(node.children).to.deep.equal({});
     });

 });

});
