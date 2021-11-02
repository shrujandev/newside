import React from 'react';
import BasePage from './BasePage';
import NewsMasonry from '../components/NewsMasonry';
import { Divider, Text } from '@geist-ui/react';

function TopicNews(props) {
    return (
        <BasePage>
            <Text h1># Topic</Text>
            <Divider y={0} style={{ marginBottom: '2rem' }} />
            <div>
                <NewsMasonry></NewsMasonry>
            </div>
        </BasePage>
    );
}

export default TopicNews;
