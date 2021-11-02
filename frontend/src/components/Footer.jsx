import React from 'react';
import { Card, Text, Divider, Link } from '@geist-ui/react';
import styled from 'styled-components';
function Footer(props) {
    const topics = ['News', 'Business', 'Sports', 'Tech', 'Crypto', 'Movies'];

    return (
        <FooterContainer>
            <div>
                <Text p style={{ textAlign: 'center' }}>
                    NEWSIDE
                </Text>
                <Divider y={0} />

                <Row>
                    <Col>
                        <Text p>Some links: </Text>
                        <Text p style={{ fontSize: '0.9em' }}>
                            <Link>About us</Link>
                        </Text>
                        <Text p style={{ fontSize: '0.9em' }}>
                            <Link>Privacy Policy </Link>
                        </Text>
                    </Col>
                    <Col>
                        <Text>Trending Topics : </Text>
                        {topics.map((topic) => (
                            <Text p style={{ fontSize: '0.9em' }}>
                                <Link to={`/topic/${topic.toLowerCase()}`}>
                                    # {topic}
                                </Link>
                            </Text>
                        ))}
                    </Col>
                </Row>
            </div>
        </FooterContainer>
    );
}

export default Footer;

const FooterContainer = styled.div`
    width: 100%;
    background-color: black;
    color: white;
`;

const Row = styled.div`
    display: flex;
    justify-content: center;
    gap: 3rem;
    margin: 0 auto;
    max-width: 500px;
    flex-wrap: wrap;
`;

const Col = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
    p {
        margin: 0;
    }
`;
