import React from 'react';
import styled from 'styled-components';
import { Card, Text, Divider, Button } from '@geist-ui/react';
import BasePage from './BasePage';

function UserProfile(props) {
    return (
        <BasePage>
            <Text h1>Profile</Text>
            <Divider y={0} style={{ marginBottom: '2rem' }} />
            <Card>
                <Card.Content>
                    <p>UserName:Jeff</p>
                </Card.Content>
                <Divider y={0} />
                <Card.Content>
                    <Text p>Your Interests</Text>
                    <Interests></Interests>
                </Card.Content>
                <Card.Footer>
                    <Actions>
                        <Button type='success' ghost>
                            <Text p>Edit Account</Text>
                        </Button>
                        <Button type='error' ghost>
                            <Text p>Delete Account</Text>
                        </Button>
                    </Actions>
                </Card.Footer>
            </Card>
        </BasePage>
    );
}

export default UserProfile;

const Interests = styled.div``;
const Actions = styled.div`
    display: flex;
    gap: 1rem;
`;
