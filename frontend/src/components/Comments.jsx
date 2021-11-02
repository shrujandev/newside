import React from 'react';
import { comments } from '../utils/sampleComments';
import Comment from './Comment';

function Comments(props) {
    return (
        <div>
            <h5>
                <span>{comments.length}</span> Comment
                {comments.length > 0 ? 's' : ''}
            </h5>

            {comments.length === 0 && !props.loading ? (
                <div>Be the first to comment</div>
            ) : null}

            {comments.map((comment, index) => (
                <Comment key={index} comment={comment} />
            ))}
        </div>
    );
}

export default Comments;
