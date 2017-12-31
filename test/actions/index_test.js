import { expect } from '../test_helper';
import { ADD_COMMENT } from '../../src/actions/types';
import * as actions from '../../src/actions';

describe('Actions', () => {
  it('addComments should return a action with right type and payload', () => {
    const addCommentAction = actions.addComment('new Comment');
    expect(addCommentAction).to.include({
      type: ADD_COMMENT,
      payload: 'new Comment'
    });
  });
});