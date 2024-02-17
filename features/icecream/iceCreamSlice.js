const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    numOfIceCreams: 20,
};

const iceCreamSlice = createSlice({
    name: "iceCream",
    initialState,
    reducers: {
        buyIceCream: (state, action) => {
            state.numOfIceCreams -= action.payload;
        },
        addIceCream: (state, action) => {
            state.numOfIceCreams += action.payload;
        },
    },
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;