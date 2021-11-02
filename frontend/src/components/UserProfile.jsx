import React from 'react';
import styled from 'styled-components';
import { Card, Text, Link } from '@geist-ui/react';

function UserProfile(props) {
    return (
        <div>
            <h2>Your Profile </h2>
            <Card>
                <p>UserName:</p>
                <Text>Your Interests</Text>
                {/* <p>ddddd........Have to get these from db</p> */}
                <Link>Bookmarks</Link>
                <Link>Edit Profile </Link>
                <Link style={{ color: 'red' }}>Delete Account</Link>
            </Card>
        </div>
    );
}

export default UserProfile;
