import { Divider, Text } from '@geist-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NewsMasonry from '../components/NewsMasonry';
import BasePage from './BasePage';

function Explore(props) {
    const topics = ['News', 'Business', 'Sports', 'Tech', 'Crypto', 'Movies'];

    return (
        <BasePage>
            <Text h1>Explore</Text>
            <Divider y={0} style={{ marginBottom: '2rem' }} />
            <Text p style={{ margin: 0 }}>
                Explore some topics :{' '}
            </Text>
            <Topics>
                {topics.map((topic) => (
                    <Text p>
                        <Link to={`/topic/${topic.toLowerCase()}`}>
                            # {topic}
                        </Link>
                    </Text>
                ))}
            </Topics>
            <Container>
                <NewsMasonry />
            </Container>
        </BasePage>
    );
}

export default Explore;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

const Topics = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
`;
