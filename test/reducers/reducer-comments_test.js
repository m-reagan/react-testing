import { expect } from '../test_helper';
import commentsReducer from '../../src/reducers/reducer_comments';
import { ADD_COMMENT } from '../../src/actions/types';

describe('Reducers', () => {
  it('when no comments in state define an empty array', () => {
    expect(commentsReducer(undefined, {})).to.be.instanceOf(Array);
    expect(commentsReducer(undefined, {}).length).to.equal(0);
  });

  describe('When there are existing comments in the state', () => {
    let comments = ['first', 'second'];

    beforeEach(() => {
      comments = ['first', 'second'];
    });

    it('should return existing state when no action is performed', () => {
      const newComments = commentsReducer(comments, {});
      expect(newComments.length).to.equal(comments.length);
      expect(newComments).to.have.deep.members(comments);
    });

    it('should add comment in app state on action type ADD_COMMENT', () => {
      const newComments = commentsReducer(comments, {
        type: ADD_COMMENT,
        payload: 'third'
      });
      expect(newComments.length).to.equal(comments.length + 1);
      expect(newComments).to.include.members(comments);
      expect(newComments[2]).to.equal('third');
    });
  });
});
