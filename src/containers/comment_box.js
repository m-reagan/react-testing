import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = { comment: '' };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onHandleChange(event) {
    this.setState({ comment: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.addComment(this.state.comment);
    this.setState({ comment: '' });
  }

  render() {
    return (
      <form className="comment-box" onSubmit={this.onSubmit} >
        <textarea value={this.state.comment} onChange={this.onHandleChange} />
        <button type="submit">Add comment</button>
      </form>
    );
  }
}

export default connect(null, actions)(CommentBox);
