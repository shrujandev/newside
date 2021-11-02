import React from 'react';
import { Input, Button, Spacer } from '@geist-ui/react';
import styled from 'styled-components';

function Login(props) {
    return (
        <div>
            <h3>Log In</h3>
            <Form action='' method=''>
                <Input label='Username' width='100%' />

                <Input.Password label='Password' width='100%' />

                <Button type='success'>Login</Button>
                <Spacer h={0.5} />
            </Form>
        </div>
    );
}
export default Login;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;
