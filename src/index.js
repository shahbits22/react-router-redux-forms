import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

import { BrowserRouter, Route } from 'react-router-dom';
import promise from 'redux-promise'

import PostsIndex from './components/post_index'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

// class Hello extends React.Component {
//   render(){
//     return <div>Hello!</div>
//   }
// }


// class Goodbye extends React.Component {
//   render(){
//     return <div>Goodbye!</div>
//   }
// }

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/" component={PostsIndex}></Route>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
