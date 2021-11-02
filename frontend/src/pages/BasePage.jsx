import React from 'react';

import styled, { css } from 'styled-components';
import { mediaQuery } from '../utils/mediaQuery';
import { motion } from 'framer-motion';

function BasePage(props) {
    return (
        <Page
            {...props}
            initial={{ opacity: 0, y: '-20px' }}
            animate={{ opacity: 1, y: '0' }}
            exit={{ opacity: 0, y: '100px' }}
            transition={{
                duration: 1,
            }}>
            {props.children}
        </Page>
    );
}

export default BasePage;

const Page = styled(motion.div)`
    min-height: calc(100vh - 19.7rem);
    margin-right: auto;
    margin-left: auto;
    margin-top: 3rem;
    margin-bottom: 5rem;
    max-width: 1200px;
    scroll-behavior: smooth;
    ${(props) =>
        props.center
            ? css`
                  display: grid;
                  place-items: center;
              `
            : ''}
    ${mediaQuery('xl')} {
        max-width: unset;
        padding: 1rem;
    }
`;
