const store = require('./app/store');
const { cakeActions } = require('./features/cake/cakeSlice');

console.log(store.getState());

//subscribe to the store
store.subscribe(() => console.log(store.getState()));

//dispatch actions
store.dispatch(cakeActions.buyCake(2));
store.dispatch(cakeActions.addCake(5));