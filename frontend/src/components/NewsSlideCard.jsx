import { Card, Tag, Text } from '@geist-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function NewsSlideCard({ article }) {
    return (
        <Card width={window.innerWidth < 475 ? '100%' : '300px'} shadow>
            <Card.Content>
                <Text p>
                    <Link to={`/article/${article._id}`}>
                        <strong>{article.title.substring(0, 30)}...</strong>
                    </Link>
                </Text>
                <Text em style={{ fontSize: '0.87em' }}>
                    By - {article.author}
                </Text>
            </Card.Content>
            <StyledFooter>
                <Text p>19th October 2021</Text>
                <Tag type='success'>
                    <Link to={`/topic/${article.topic.toLowerCase()}`}>
                        {article.topic}
                    </Link>
                </Tag>
            </StyledFooter>
        </Card>
    );
}

export default NewsSlideCard;

const StyledFooter = styled(Card.Footer)`
    display: flex;
    justify-content: space-between;
    margin-top: auto;
`;
