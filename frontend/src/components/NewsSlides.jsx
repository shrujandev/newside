import React from 'react';
import styled from 'styled-components';
import { news } from '../utils/sampleNews';
import NewsSlideCard from './NewsSlideCard';

function NewsSlides({ limit = 6 }) {
    return (
        <SlidesContainer>
            {news.slice(0, limit).map((article) => (
                <NewsSlideCard article={article} key={article.id} />
            ))}
        </SlidesContainer>
    );
}

export default NewsSlides;

const SlidesContainer = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 2rem 0;
`;
