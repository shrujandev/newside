import React from 'react';
import { Text, Card } from '@geist-ui/react';
import { Link } from 'react-router-dom';

function Topics() {
    const topics = ['News', 'Business', 'Sports', 'Tech', 'Crypto', 'Movies'];
    return (
        <Card>
            <Card.Content>
                <Text h3 style={{ textAlign: 'center' }}>
                    Explore Topics
                </Text>
            </Card.Content>
            <Card.Content>
                {topics.map((topic) => (
                    <Text p style={{ textTransform: 'capitalize' }}>
                        <Link to={`/topic/${topic}`}># {topic}</Link>
                    </Text>
                ))}
            </Card.Content>
        </Card>
    );
}

export default Topics;
