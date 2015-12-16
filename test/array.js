import Plasticine from './../index.js';
import { assert } from 'chai';

import arrayTest0 from './array/array-0.json';
import arrayTest1 from './array/array-1.json';
import arrayTest2 from './array/array-2.json';
import arrayTest3 from './array/array-3.json';
import arrayTest4 from './array/array-4.json';
import arrayTest5 from './array/array-5.json';
import arrayTest6 from './array/array-6.json';
import arrayTest7 from './array/array-7.json';
import arrayTest8 from './array/array-8.json';

describe('Array', () => {

    it("Operator $", function() {
        assert.deepEqual(new Plasticine(arrayTest0.data, arrayTest0.template), arrayTest0.result);
    });

    it("Operator @", function() {
        assert.deepEqual(new Plasticine(arrayTest1.data, arrayTest1.template), arrayTest1.result);
    });

    it("Operator *", function() {
        assert.deepEqual(new Plasticine(arrayTest2.data, arrayTest2.template), arrayTest2.result);
    });

    it("Operator ..", function() {
        assert.deepEqual(new Plasticine(arrayTest3.data, arrayTest3.template), arrayTest3.result);
    });

    it("Operator .<name>", function() {
        assert.deepEqual(new Plasticine(arrayTest4.data, arrayTest4.template), arrayTest4.result);
    });

    it("Operator ['<name> (, <name>)']", function() {
        assert.deepEqual(new Plasticine(arrayTest5.data, arrayTest5.template), arrayTest5.result);
    });

    it("Operator [<number> (, <number>)]", function() {
        assert.deepEqual(new Plasticine(arrayTest6.data, arrayTest6.template), arrayTest6.result);
    });

    it("Operator [?(<expression>)]", function() {
        assert.deepEqual(new Plasticine(arrayTest7.data, arrayTest7.template), arrayTest7.result);
    });

    it("Operator [(<expression>)]", function() {
        assert.deepEqual(new Plasticine(arrayTest8.data, arrayTest8.template), arrayTest8.result);
    });

});

/*
describe("Object", function() {

    describe("Dot-notated", function() {
        it("$.object.array[*].property", function() {
            assert.deepEqual(new Plasticine(DataTest1.data, DataTest1.template), DataTest1.result);
        });
        it("$..property", function() {
            assert.deepEqual(new Plasticine(DataTest2.data, DataTest2.template), DataTest2.result);
        });
        it("$.object.*", function() {
            assert.deepEqual(new Plasticine(DataTest3.data, DataTest3.template), DataTest3.result);
        });
        it("$.object..property", function() {
            assert.deepEqual(new Plasticine(DataTest4.data, DataTest4.template), DataTest4.result);
        });
        it("$..object[2]", function() {
            assert.deepEqual(new Plasticine(DataTest5.data, DataTest5.template), DataTest5.result);
        });
        it("$..array[2]", function() {
            assert.deepEqual(new Plasticine(DataTest6.data, DataTest6.template), DataTest6.result);
        });
        it("$..object[-1:]", function() {
            assert.deepEqual(new Plasticine(DataTest7.data, DataTest7.template), DataTest7.result);
        });
        it("$..array[-1:]", function() {
            assert.deepEqual(new Plasticine(DataTest8.data, DataTest8.template), DataTest8.result);
        });
        it("$..object[(@.length-1)]", function() {
            assert.deepEqual(new Plasticine(DataTest7.data, DataTest7.template), DataTest7.result);
        });
        it("$..array[(@.length-1)]", function() {
            assert.deepEqual(new Plasticine(DataTest8.data, DataTest8.template), DataTest8.result);
        });
    });

    describe("Bracket-notated", function() {
        it("$['object']['array'][*]['property']", function() {
            assert.deepEqual(new Plasticine(DataTest1.data, DataTest1.template), DataTest1.result);
        });
        it("$[*]['property']", function() {
            assert.deepEqual(new Plasticine(DataTest2.data, DataTest2.template), DataTest2.result);
        });
        it("$['object'][*]", function() {
            assert.deepEqual(new Plasticine(DataTest3.data, DataTest3.template), DataTest3.result);
        });
        it("$['object'][*]['property']", function() {
            assert.deepEqual(new Plasticine(DataTest4.data, DataTest4.template), DataTest4.result);
        });
        it("$[*]['object'][2]", function() {
            assert.deepEqual(new Plasticine(DataTest5.data, DataTest5.template), DataTest5.result);
        });
        it("$[*]['array'][2]", function() {
            assert.deepEqual(new Plasticine(DataTest6.data, DataTest6.template), DataTest6.result);
        });
        it("$[*]['object'][-1:]", function() {
            assert.deepEqual(new Plasticine(DataTest7.data, DataTest7.template), DataTest7.result);
        });
        it("$[*]['array'][-1:]", function() {
            assert.deepEqual(new Plasticine(DataTest8.data, DataTest8.template), DataTest8.result);
        });
        it("$[*]['object'][(@.length-1)]", function() {
            assert.deepEqual(new Plasticine(DataTest7.data, DataTest7.template), DataTest7.result);
        });
        it("$[*]['array'][(@.length-1)]", function() {
            assert.deepEqual(new Plasticine(DataTest8.data, DataTest8.template), DataTest8.result);
        });
    });







});*/
