import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/containers/comment_list';

describe('CommentList', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(CommentList, null, {
      comments: ['First', 'second']
    });
  });
  it('has a li for each comment', () => {
    expect(component.find('li').length).to.equal(2);
    expect(component.find('li')).to.contain('First');
    expect(component.find('li')).to.not.contain('Second');
  });
});
