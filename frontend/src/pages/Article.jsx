import React from 'react';
// import styled from 'styled-components';
import BasePage from './BasePage';
import { Button, Card, Divider, Input, Link, Text } from '@geist-ui/react';
import Topics from '../components/Topics';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { news } from '../utils/sampleNews';

import { find } from 'lodash';
import { Bookmark, Globe, Send } from '@geist-ui/react-icons';
import Comments from '../components/Comments';

function Article() {
    const { id } = useParams();
    const article = find(news, { _id: id });
    const datestring = new Date(article.published_date).toDateString();
    return (
        <BasePage>
            <Container>
                <Card style={{ flex: 1 }}>
                    <Card.Content>
                        <img src={article.media} alt='' />
                        <Text h2 style={{ textAlign: 'center' }}>
                            {article.title}
                        </Text>
                        <Byline>
                            <div>
                                <Text p>
                                    <strong>By : </strong>
                                    {article.author ? article.author : '---'}
                                </Text>
                                <Text p>
                                    <strong>Published On : </strong>

                                    {datestring}
                                </Text>
                            </div>
                            <Actions>
                                <Button
                                    type='warning'
                                    ghost
                                    icon={<Globe />}
                                    scale={0.85}>
                                    <Link href={article.link} target='_blank'>
                                        Original Article
                                    </Link>
                                </Button>
                                <Button
                                    type='success'
                                    icon={<Bookmark />}
                                    scale={0.85}>
                                    Bookmark
                                </Button>
                            </Actions>
                        </Byline>
                    </Card.Content>

                    <Divider y={0} />

                    <Card.Content>
                        <Text p>
                            <strong>Summary : </strong>
                        </Text>
                        <Text p>{article.summary}</Text>
                    </Card.Content>

                    <Card.Footer>
                        <NewsComments>
                            <CommentFormContainer>
                                <Text p>
                                    <strong>Add a comment</strong>
                                </Text>
                                <CommentForm>
                                    <Input
                                        placeholder='Comment'
                                        width={'100%'}
                                    />

                                    <Button type='success' icon={<Send />} auto>
                                        Comment
                                    </Button>
                                </CommentForm>
                            </CommentFormContainer>
                            <Comments />
                        </NewsComments>
                    </Card.Footer>
                </Card>
                <Topics />
            </Container>
        </BasePage>
    );
}

export default Article;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2rem;
`;
const Byline = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    align-items: center;
`;

const Actions = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    align-items: center;
`;

const CommentFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem 0;
`;

const CommentForm = styled.div`
    display: flex;
    gap: 1rem;
`;

const NewsComments = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem 0;
`;
