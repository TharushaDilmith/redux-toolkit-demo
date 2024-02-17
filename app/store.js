const cofigureStore = require('@reduxjs/toolkit').configureStore;
const cakeReducer = require('../features/cake/cakeSlice');

const store = cofigureStore({
    reducer: {
        cake: cakeReducer
    }
});

module.exports = store;