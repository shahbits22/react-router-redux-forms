import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise'

import PostsIndex from './components/post_index'
import PostNew from './components/post_new'

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
        <Switch>
          <Route exact path="/" component={PostsIndex}></Route>
          <Route path="/posts/new" component={PostNew}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
