import { expect } from 'chai';
import { assert } from 'chai';

import Node from '../lib/Node';


describe('node class test', function() {

  it('it should have correct default properties', function() {

    let node = new Node();

    assert.deepEqual(node, {
      end: false,
      keys: new Map()
    });

   });

});