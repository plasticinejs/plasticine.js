import data from './data';

export default {
    data,
    template : {
        root : '$..bicycle'
    },
    result : [{
        root : [{
            color : 'red',
            price : 19.95
        }, {
            color : 'yellow',
            price : 33.50
        }, {
            color : 'blue',
            price : 10.99
        }]
    }, {
        root : [{
            color : 'red',
            price : 19.95
        }, {
            color : 'yellow',
            price : 33.50
        }, {
            color : 'blue',
            price : 10.99
        }]
    }]
}