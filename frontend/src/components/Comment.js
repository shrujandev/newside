import { Avatar, Divider, Text } from '@geist-ui/react';
import React from 'react';
import styled from 'styled-components';

function Comment({ comment }) {
    return (
        <Container>
            <User>
                <Avatar text={comment.username[0]} />
                <Text p>{comment.username}</Text>
            </User>
            <Text p>{comment.comment}</Text>
        </Container>
    );
}

export default Comment;

const User = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding: 0.5rem 0;
`;
