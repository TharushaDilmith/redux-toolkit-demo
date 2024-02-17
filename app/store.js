const cofigureStore = require('@reduxjs/toolkit').configureStore;
const cakeReducer = require('../features/cake/cakeSlice');
const iceCreamReducer = require('../features/icecream/iceCreamSlice');

const store = cofigureStore({
    reducer: {
        cake: cakeReducer,
        iceCream: iceCreamReducer
    }
});

module.exports = store;