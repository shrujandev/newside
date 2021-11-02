import { Button, Divider, Spacer, Text } from '@geist-ui/react';
import React from 'react';
import styled from 'styled-components';
import NewsSlides from '../components/NewsSlides';
import Weather from '../components/Weather';
import BasePage from './BasePage';

function Home(props) {
    return (
        <BasePage>
            <HeroContainer>
                <Text h1 style={{ margin: 0 }}>
                    NewSide : Fast, Quick News For All!
                </Text>
                <Text p>We aggregate news and provide you the summary!</Text>

                <Button type='success'>Create an account now!</Button>
            </HeroContainer>
            <Spacer h={4} />
            <Section>
                <Weather />
            </Section>
            <Spacer h={4} />
            <Section>
                <Text h4>Breaking News</Text>
                <NewsSlides />
            </Section>
            <Spacer h={4} />
            <Section>
                <Text h4>Trending News</Text>
                <NewsSlides />
            </Section>
        </BasePage>
    );
}

export default Home;

const HeroContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
`;

const Section = styled.div``;
