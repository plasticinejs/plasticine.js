import Plasticine from './../src/main.js';
import { assert } from 'chai';

import test0 from './object/object-0.js';
import test1 from './object/object-1.js';
import test2 from './object/object-2.js';
import test3 from './object/object-3.js';
import test4 from './object/object-4.js';
import test5 from './object/object-5.js';
import test6 from './object/object-6.js';
import test7 from './object/object-7.js';

describe('Object', () => {
    it('0. Selector `$`', () => assert.deepEqual(new Plasticine(test0.data, test0.template), test0.result));
    it('1. Selector `$.*`', () => assert.deepEqual(new Plasticine(test1.data, test1.template), test1.result));
    it('2. Selector `$.store.*`', () => assert.deepEqual(new Plasticine(test2.data, test2.template), test2.result));
    it('3. Selector `$.store.bicycle`', () => assert.deepEqual(new Plasticine(test3.data, test3.template), test3.result));
    it('4. Selector `$.undefined`', () => assert.deepEqual(new Plasticine(test4.data, test4.template), test4.result));
    it('5. Selector `$.undefined.undefined`', () => assert.deepEqual(new Plasticine(test5.data, test5.template), test5.result));
    it('6. Selector `$.*.bicycle`', () => assert.deepEqual(new Plasticine(test6.data, test6.template), test6.result));
    it('7. Selector `$..bicycle`', () => assert.deepEqual(new Plasticine(test7.data, test7.template), test7.result));
});