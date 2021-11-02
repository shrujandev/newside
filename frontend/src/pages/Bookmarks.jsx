import React from 'react';
import styled from 'styled-components';
import BasePage from './BasePage';
import NewsSlides from '../components/NewsSlides';
import { Divider, Text } from '@geist-ui/react';

function Bookmarks() {
    return (
        <BasePage>
            <Text h1>Bookmarks</Text>
            <Divider y={0} style={{ marginBottom: '2rem' }} />
            <Section>
                <NewsSlides />
            </Section>
        </BasePage>
    );
}

export default Bookmarks;

const Section = styled.div``;
