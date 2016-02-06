import data from './data';

export default {
    data,
    template : {
        root : '$.store.bicycle.(color|price)'
    },
    result : {
        root : 'red'
    }
}