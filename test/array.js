import Plasticine from './../src/main.js';
import { assert } from 'chai';

import test0 from './array/array-0.js';
import test1 from './array/array-1.js';
import test2 from './array/array-2.js';
import test3 from './array/array-3.js';
import test4 from './array/array-4.js';
import test5 from './array/array-5.js';
import test6 from './array/array-6.js';
import test7 from './array/array-7.js';
import test8 from './array/array-8.js';
import test9 from './array/array-9.js';

describe('Array', () => {
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
    it('8. Selector `$.store.bicycle.color&price`', () => {
        let palsticine = new Plasticine(test8.template);

        assert.deepEqual(palsticine.transform(test8.data), test8.result);
    });
    it('9. Selector `$.store.bicycle.color|price`', () => {
        let palsticine = new Plasticine(test9.template);

        assert.deepEqual(palsticine.transform(test9.data), test9.result);
    });
});

describe('JSON string Array', () => {
    it('0. Selector `$`', () => {
        let palsticine = new Plasticine(test0.template);

        assert.deepEqual(palsticine.transform(JSON.stringify(test0.data)), JSON.stringify(test0.result));
    });
    it('1. Selector `$.*`', () => {
        let palsticine = new Plasticine(test1.template);

        assert.deepEqual(palsticine.transform(JSON.stringify(test1.data)), JSON.stringify(test1.result));
    });
    it('2. Selector `$.store.*`', () => {
        let palsticine = new Plasticine(test2.template);

        assert.deepEqual(palsticine.transform(JSON.stringify(test2.data)), JSON.stringify(test2.result));
    });
    it('3. Selector `$.store.bicycle`', () => {
        let palsticine = new Plasticine(test3.template);

        assert.deepEqual(palsticine.transform(JSON.stringify(test3.data)), JSON.stringify(test3.result));
    });
    it('4. Selector `$.undefined`', () => {
        let palsticine = new Plasticine(test4.template);

        assert.deepEqual(palsticine.transform(JSON.stringify(test4.data)), JSON.stringify(test4.result));
    });
    it('5. Selector `$.undefined.undefined`', () => {
        let palsticine = new Plasticine(test5.template);

        assert.deepEqual(palsticine.transform(JSON.stringify(test5.data)), JSON.stringify(test5.result));
    });
    it('6. Selector `$.*.bicycle`', () => {
        let palsticine = new Plasticine(test6.template);

        assert.deepEqual(palsticine.transform(JSON.stringify(test6.data)), JSON.stringify(test6.result));
    });
    it('7. Selector `$..bicycle`', () => {
        let palsticine = new Plasticine(test7.template);

        assert.deepEqual(palsticine.transform(JSON.stringify(test7.data)), JSON.stringify(test7.result));
    });
    it('8. Selector `$.store.bicycle.color&price`', () => {
        let palsticine = new Plasticine(test8.template);

        assert.deepEqual(palsticine.transform(JSON.stringify(test8.data)), JSON.stringify(test8.result));
    });
    it('9. Selector `$.store.bicycle.color|price`', () => {
        let palsticine = new Plasticine(test9.template);

        assert.deepEqual(palsticine.transform(JSON.stringify(test9.data)), JSON.stringify(test9.result));
    });
});