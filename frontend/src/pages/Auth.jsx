import React from 'react';
import BasePage from './BasePage';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import styled from 'styled-components';
import { Text } from '@geist-ui/react';

function Auth(props) {
    return (
        <BasePage>
            <Text h1 style={{ textAlign: 'center', margin: 0 }}>
                Get started with NewSide!
            </Text>
            <Text p style={{ textAlign: 'center', marginBottom: '2rem' }}>
                With a few simple steps...
            </Text>
            <Container>
                <Login />
                <SignUp />
            </Container>
        </BasePage>
    );
}

export default Auth;

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
`;
