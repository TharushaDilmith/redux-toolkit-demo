const store = require('./app/store');
const { cakeActions } = require('./features/cake/cakeSlice');
const { iceCreamActions } = require('./features/icecream/iceCreamSlice');

console.log(store.getState());

//subscribe to the store
store.subscribe(() => console.log(store.getState()));

//dispatch actions
store.dispatch(cakeActions.buyCake(2));
store.dispatch(cakeActions.addCake(5));

store.dispatch(iceCreamActions.buyIceCream(3));
store.dispatch(iceCreamActions.addIceCream(10));