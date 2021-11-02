import { Card, Text } from '@geist-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function NewsMasonryCard({ article }) {
    return (
        <Card hoverable shadow>
            <Image>
                <img src={article.media} alt={article.title} />
            </Image>
            {/* <Divider y={0} /> */}
            <Card.Content>
                <Text p>
                    <Link to={`/article/${article._id}`}>
                        <strong>{article.title}</strong>
                    </Link>
                </Text>
            </Card.Content>
            {/* <Card.Content style={{ textAlign: 'justify' }}>
                <Text p>{article.summary}</Text>
            </Card.Content> */}
        </Card>
    );
}

export default NewsMasonryCard;

const Image = styled.div`
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    overflow: hidden;
    height: 200px;
    img {
        object-fit: cover;
    }
`;
