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
    it('0. Selector `$`', () => {
        let palsticine = new Plasticine(test0.template);

        assert.deepEqual(palsticine.transform(test0.data), test0.result);
    });
    it('1. Selector `$.*`', () => {
        let palsticine = new Plasticine(test1.template);

        assert.deepEqual(palsticine.transform(test1.data), test1.result);
    });
    it('2. Selector `$.store.*`', () => {
        let palsticine = new Plasticine(test2.template);

        assert.deepEqual(palsticine.transform(test2.data), test2.result);
    });
    it('3. Selector `$.store.bicycle`', () => {
        let palsticine = new Plasticine(test3.template);

        assert.deepEqual(palsticine.transform(test3.data), test3.result);
    });
    it('4. Selector `$.undefined`', () => {
        let palsticine = new Plasticine(test4.template);

        assert.deepEqual(palsticine.transform(test4.data), test4.result);
    });
    it('5. Selector `$.undefined.undefined`', () => {
        let palsticine = new Plasticine(test5.template);

        assert.deepEqual(palsticine.transform(test5.data), test5.result);
    });
    it('6. Selector `$.*.bicycle`', () => {
        let palsticine = new Plasticine(test6.template);

        assert.deepEqual(palsticine.transform(test6.data), test6.result);
    });
    it('7. Selector `$..bicycle`', () => {
        let palsticine = new Plasticine(test7.template);

        assert.deepEqual(palsticine.transform(test7.data), test7.result);
    });
});
