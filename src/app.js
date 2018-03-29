import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import './styles/styles.scss';
import 'normalize.css/normalize.css';

//const store = configureStore();

// store.dispatch(addContact({name: 'Ziming Li', gender: 'male', birthday: 'May 10 1992'}));
// store.dispatch(addContact({name: 'Sunny Wang', gender: 'female'}));
// store.dispatch(addContact({name: 'Yanhui Liu'}));

//const state = store.getState();

//const visibleExpenses = getVisibleExpenses(state.expenses, state.filter);
//console.log(visibleExpenses);


const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));