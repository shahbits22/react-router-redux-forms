import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import { reducer as formreducer } from 'redux-form';

const rootReducer = combineReducers({
 posts: PostsReducer,
 form: formreducer
});

export default rootReducer;
