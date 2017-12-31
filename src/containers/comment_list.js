import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {
  renderComment(comment) {
    return <li key={comment} className="list-group-item">{comment}</li>;
  }
  render() {
    return (
      <div className="comment-list">
        <ul className="list-group">
          {this.props.comments.map(comment => this.renderComment(comment))}
        </ul>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    comments: state.comments
  };
})(CommentList);
