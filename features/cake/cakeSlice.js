const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
    numOfCakes: 10
};

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        buyCake: (state, action) => {
            state.numOfCakes -= action.payload;
        },
        addCake : (state, action) => {
            state.numOfCakes += action.payload;
        } 
    }
});

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;