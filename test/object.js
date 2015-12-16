import Plasticine from './../index.js';
import { assert } from 'chai';

import DataTest1 from './object/object-1.json';
import DataTest2 from './object/object-2.json';
import DataTest3 from './object/object-3.json';
import DataTest4 from './object/object-4.json';
import DataTest5 from './object/object-5.json';
import DataTest6 from './object/object-6.json';
import DataTest7 from './object/object-7.json';
import DataTest8 from './object/object-8.json';

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







});