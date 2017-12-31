import { combineReducers } from 'redux';
import CommentsReducer from '../reducers/reducer_comments';

const rootReducer = combineReducers({
  comments: CommentsReducer
});

export default rootReducer;
