import React from 'react';
import { Input, Button, Spacer } from '@geist-ui/react';

import styled from 'styled-components';

function SignUp(props) {
    return (
        <div>
            <h3>Sign Up</h3>
            <Form action='' method=''>
                <Input label='Username' width='100%' />

                <Input
                    labelRight='@gmail.com'
                    placeholder='Email Id'
                    width='100%'
                />

                <Input.Password label='Password' width='100%' />
                <Input.Password label='Confirm Password' width='100%' />

                <Button type='success'>Sign Up</Button>
                <Spacer h={0.5} />
            </Form>
        </div>
    );
}
export default SignUp;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;
