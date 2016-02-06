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
import test8 from './object/object-8.js';
import test9 from './object/object-9.js';
import test10 from './object/object-10.js';
import test11 from './object/object-11.js';

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
    it('8. Selector `$.store.bicycle.(color&price)`', () => {
        let palsticine = new Plasticine(test8.template);

        assert.deepEqual(palsticine.transform(test8.data), test8.result);
    });
    it('9. Selector `$.store.bicycle.(color|price)`', () => {
        let palsticine = new Plasticine(test9.template);

        assert.deepEqual(palsticine.transform(test9.data), test9.result);
    });
    it('10. Selector `$.store.bicycle.(color&price&undefined)`', () => {
        let palsticine = new Plasticine(test10.template);

        assert.deepEqual(palsticine.transform(test10.data), test10.result);
    });
    it('11. Selector `$.store.bicycle.(color|price|undefined)`', () => {
        let palsticine = new Plasticine(test11.template);

        assert.deepEqual(palsticine.transform(test11.data), test11.result);
    });
});

describe('JSON string Object', () => {
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
    it('8. Selector `$.store.bicycle.(color&price)`', () => {
        let palsticine = new Plasticine(test8.template);

        assert.deepEqual(palsticine.transform(JSON.stringify(test8.data)), JSON.stringify(test8.result));
    });
    it('9. Selector `$.store.bicycle.(color|price)`', () => {
        let palsticine = new Plasticine(test9.template);

        assert.deepEqual(palsticine.transform(JSON.stringify(test9.data)), JSON.stringify(test9.result));
    });
    it('10. Selector `$.store.bicycle.(color&price&undefined)`', () => {
        let palsticine = new Plasticine(test10.template);

        assert.deepEqual(palsticine.transform(JSON.stringify(test10.data)), JSON.stringify(test10.result));
    });
    it('11. Selector `$.store.bicycle.(color|price|undefined)`', () => {
        let palsticine = new Plasticine(test11.template);

        assert.deepEqual(palsticine.transform(JSON.stringify(test11.data)), JSON.stringify(test11.result));
    });
});