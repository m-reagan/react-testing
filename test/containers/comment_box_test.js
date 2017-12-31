import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/containers/comment_box';
import * as actions from '../../src/actions';

describe('CommentBox', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(CommentBox, { addComment: actions.addComment });
  });

  it('has a text area', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });

  it('on text change the textarea should have updated value', () => {
    component.find('textarea').simulate('change', 'new comment');
    expect(component.find('textarea')).to.have.value('new comment');
  });

  it('on form submit the text area should clear out', () => {
    expect(component.find('textarea').val()).to.equal('');
    component.find('textarea').simulate('change', 'comment change');
    expect(component.find('textarea')).to.have.value('comment change');
    component.simulate('submit');
    expect(component.find('textarea')).to.have.value('');
  });

});

