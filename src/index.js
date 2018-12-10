import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import rootReducer from './rootReducer'
import { createStore , applyMiddleware} from 'redux';
import  thunk  from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'

const store =createStore(
rootReducer,
composeWithDevTools(
    applyMiddleware(thunk)
)
);




ReactDOM.render(
    <Provider> store={store}
<App />
</Provider>
, document.getElementById('root'));

